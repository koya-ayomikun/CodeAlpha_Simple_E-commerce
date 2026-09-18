const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas (Database)
mongoose.connect('YOUR_MONGODB_URI_STRING');

// Sample Product Route
app.get('/api/products', async (req, res) => {
  const Product = require('./models/Product');
  const products = await Product.find();
  res.json(products);
});

// Start Server
app.listen(5000, () => console.log('Server running on port 5000'));
