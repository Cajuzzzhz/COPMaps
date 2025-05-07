const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('./routes/users');
const hospedagensRoutes = require('./routes/hospedagens');
require('./models/database'); // Import database

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Debug middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/hospedagens', hospedagensRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log('Available routes:');
  console.log('- http://localhost:3001/');
  console.log('- http://localhost:3001/api/usuarios');
  console.log('- http://localhost:3001/api/hospedagens');
}); 