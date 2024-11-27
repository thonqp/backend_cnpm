const express = require('express');
const { upload, uploadDocument, getDocuments } = require('../controllers/documentController');

const router = express.Router();

// Route tải tệp lên
router.post('/upload', upload.single('file'), uploadDocument);

// Route lấy danh sách tài liệu
router.get('/', getDocuments);

module.exports = router;
