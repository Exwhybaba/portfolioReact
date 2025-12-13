require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 5000;



app.use(cors({
  origin: [
    "http://localhost:5173",                // Local development
    "https://seye-oyelayo-portfolio.vercel.app", // Your deployed Vercel URL
    "https://portfolio-react-eta-orcin.vercel.app" // Your Vercel deployment from logs
  ],
  credentials: true
}));

app.use(express.json());

// Add this root route to fix "Cannot GET /" 404 errors on the backend
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio_blog')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/posts', postRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));