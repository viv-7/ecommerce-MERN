require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const sampleProducts = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 99.99,
    description: "High-quality noise-canceling headphones.",
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    countInStock: 10
  },
  {
    id: "2",
    name: "Mechanical Keyboard",
    price: 129.99,
    description: "RGB mechanical keyboard with tactile switches.",
    category: "Computers",
    imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80",
    countInStock: 5
  },
  {
    id: "3",
    name: "Gaming Mouse",
    price: 49.99,
    description: "Ergonomic gaming mouse with programmable buttons.",
    category: "Computers",
    imageUrl: "https://images.unsplash.com/photo-1527814050087-179f004f5f50?w=500&q=80",
    countInStock: 15
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB. Seeding data...");
    await Product.deleteMany({}); // Clears out any old test data
    await Product.insertMany(sampleProducts);
    console.log("Products seeded successfully!");
    process.exit();
  })
  .catch(err => {
    console.error("Seeding error:", err);
    process.exit(1);
  });