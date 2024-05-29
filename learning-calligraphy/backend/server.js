require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Import routers
const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const usersRouter = require('./routes/users'); 

// Register route middlewares
app.use('/api', apiRouter);
app.use('/api/users', usersRouter); 
app.use('/api/auth', authRouter);
app.use('/api/post', postRouter);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
