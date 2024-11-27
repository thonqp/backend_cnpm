const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authController = {
    // Register: Đăng ký người dùng mới
    registerUser: async (req, res) => {
        try {
            const { username, password, fullName, role } = req.body;

            // Kiểm tra xem username đã tồn tại chưa
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                return res.status(400).json({ message: "Username already exists" });
            }

            // Tạo user mới
            const newUser = new User({
                username, password, // Password sẽ được mã hóa trong middleware của userSchema
                fullName, role,
            });
            const savedUser = await newUser.save();

            res.status(201).json(savedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Login: Đăng nhập người dùng
    loginUser: async (req, res) => {
        try {
            const { username, password } = req.body;

            // Tìm user trong database
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            // Kiểm tra mật khẩu
            // const isPasswordValid = await user.checkPassword(password); // ??? Object user làm gì có phương thức checkPassword???????
            const isPasswordValid = user.password === password;
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            // Tạo JWT token
            // const token = jwt.sign(
            //     { id: user._id, role: user.role },
            //     process.env.JWT_SECRET,
            //     { expiresIn: "1h" }
            // );

            res.status(200).json({
                username: user.username, fullName: user.fullName, role: user.role
            });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Logout: Đăng xuất người dùng
    logoutUser: (req, res) => {
        // Xử lý đăng xuất đơn giản bằng cách xóa JWT phía client
        res.status(200).json({ message: "Logout successful" });
    },
};

module.exports = authController;
