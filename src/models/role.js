const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Role Schema
const roleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        enum: ['admin', 'user'], // Chỉ cho phép các giá trị 'admin' hoặc 'user'
    },
    description: {
        type: String,
        default: ''
    },
}, { timestamps: true }); // Tự động thêm createdAt và updatedAt

module.exports = mongoose.model('Role', roleSchema);