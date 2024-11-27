const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Tên tệp
    filePath: { type: String, required: true }, // Đường dẫn tệp được lưu
    uploadedAt: { type: Date, default: Date.now }, // Thời gian tải lên
    size: { type: Number, required: true }, // Kích thước tệp
    mimeType: { type: String, required: true }, // Loại tệp (MIME type)
});

module.exports = mongoose.model('Document', documentSchema);
