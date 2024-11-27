const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Role = require("../models/role"); // Import model Role

dotenv.config(); // Gọi dotenv.config()

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URL);

// Tạo dữ liệu mẫu
const seedRoles = async () => {
    try {
        const roles = [
            { name: "admin" },
            { name: "user" },
        ];
        await Role.insertMany(roles);
        console.log("Seeded roles successfully");
        mongoose.connection.close();
    } catch (err) {
        console.error("Error seeding roles:", err);
    }
};

// Chạy hàm seed
seedRoles();
