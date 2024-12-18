const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");

const seedRoles = require('./seed/seedRoles');
const userRouter = require("./routes/userRoute");
const authRouter = require("./routes/authRoute");
const documentRoute = require('./routes/documentRoute');
const path = require('path');


dotenv.config();
//CONNECT DATABASE
mongoose.connect(process.env.MONGODB_URL);

app.use(bodyParser.json({limit:"50mb"}));
app.use(helmet());
app.use(cors());
app.use(morgan("common"));



//ROUTES
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter); // Sử dụng authRouter
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Sử dụng route tài liệu
app.use('/api/v1/documents', documentRoute);  


console.log("MONGODB_URL:", process.env.MONGODB_URL);

// GENERATE SEED DATA
// seedRoles();

app.listen(process.env.PORT || 6000, () => {
  console.log("server is running");
});