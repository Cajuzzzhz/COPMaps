const express = require('express');
const router = express.Router();

// GET all accommodations
router.get('/', (req, res) => {
  res.json({ message: 'Get all accommodations' });
});

// GET accommodation by id
router.get('/:id', (req, res) => {
  res.json({ message: `Get accommodation ${req.params.id}` });
});

// POST create new accommodation
router.post('/', (req, res) => {
  res.json({ message: 'Create new accommodation' });
});

// PUT update accommodation
router.put('/:id', (req, res) => {
  res.json({ message: `Update accommodation ${req.params.id}` });
});

// DELETE accommodation
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete accommodation ${req.params.id}` });
});

module.exports = router; 