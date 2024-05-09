// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/personalblog", {
  useNewUrlParser: true, // Deprecated option removed
  useUnifiedTopology: true // Deprecated option removed
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define a schema for the contact model
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String
});

// Create a model based on the schema
const Contact = mongoose.model('users', contactSchema);

// Middleware to parse JSON bodies
app.use(express.json());

// POST route to handle form submission
app.post('/api/contact', async (req, res) => {
  try {
    // Create a new contact instance
    const newContact = new Contact({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      message: req.body.message
    });

    // Save the contact to the database
    await newContact.save();

    res.status(201).json({ message: 'Contact added successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
