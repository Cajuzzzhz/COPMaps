const express = require('express');
const router = express.Router();

// GET all users
router.get('/', (req, res) => {
  console.log('GET /api/usuarios route hit');
  res.json({ message: 'Get all users' });
});

// GET user by id
router.get('/:id', (req, res) => {
  res.json({ message: `Get user ${req.params.id}` });
});

// POST create new user
router.post('/', (req, res) => {
  res.json({ message: 'Create new user' });
});

// PUT update user
router.put('/:id', (req, res) => {
  res.json({ message: `Update user ${req.params.id}` });
});

// DELETE user
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete user ${req.params.id}` });
});

module.exports = router; 