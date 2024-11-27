const multer = require('multer');
const path = require('path');
const Document = require('../models/document');

// Cấu hình Multer để lưu tệp
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Thư mục lưu tệp
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Tên tệp duy nhất
    },
});

const upload = multer({ storage });

// API xử lý tải tệp lên và lưu thông tin vào database
const uploadDocument = async (req, res) => {
    try {
        const { file } = req;
        if (!file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Lưu thông tin tệp vào cơ sở dữ liệu
        const document = new Document({
            name: file.originalname,
            filePath: file.path,
            size: file.size,
            mimeType: file.mimetype,
        });

        const savedDocument = await document.save();
        res.status(200).json({ message: 'File uploaded successfully', document: savedDocument });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading file', error: error.message });
    }
};

// API lấy danh sách tài liệu
const getDocuments = async (req, res) => {
    try {
        const documents = await Document.find();
        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching documents', error: error.message });
    }
};

module.exports = { upload, uploadDocument, getDocuments };
