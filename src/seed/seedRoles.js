const Role = require("../models/role");

// Tạo dữ liệu mẫu
const seedRoles = async () => {
    try {
        const roles = [
            { name: "admin" },
            { name: "user" },
        ];
        await Role.insertMany(roles);
        console.log("Seeded roles successfully");
    } catch (err) {
        console.error("Error seeding roles:", err);
    }
};

module.exports = seedRoles;
