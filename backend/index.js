const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // To parse JSON bodies

const PORT = 5000; // Define a port for the server

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const mysql = require('mysql2'); // Ensure you are using mysql2 for compatibility

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // replace with your actual database username
  password: 'Mysqlroot', // replace with your actual database password
  database: 'vax_notify' // replace with your actual database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Endpoint for registration
app.post("/register", (req, res) => {
    console.log("Received registration data:", req.body); // Log received data
    const { name, dob, age, guardianName, email, phoneNumber, password } = req.body;
  
    const query = `INSERT INTO users (name, dob, age, guardianName, email, phoneNumber, password) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    
    connection.query(query, [name, dob, age, guardianName, email, phoneNumber, password], (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).send("Error saving user data: " + err.message);
      }
      res.status(200).send("User registered successfully!");
    });
  });
  
