const express = require('express');
const evidenceController = require('../controllers/evidenceRecord');

const router = express.Router();
router.get('/', evidenceController.getEvidenceRecords);

module.exports = router;