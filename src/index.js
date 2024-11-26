const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");

const userRouter = require("./routes/userRoute");

dotenv.config();
//CONNECT DATABASE
mongoose.connect(process.env.MONGODB_URL);

app.use(bodyParser.json({limit:"50mb"}));
app.use(helmet());
app.use(cors());
app.use(morgan("common"));

//ROUTES
app.use("/api/v1/users", userRouter);

app.listen(process.env.PORT || 6000, () => {
  console.log("server is running");
});