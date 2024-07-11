import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './models/userModel.js';

const app = express();
const port = process.env.PORT || 3000;
const connectUrl = "mongodb+srv://shojik:3NAqlYto5jmCQcTj@backend.6l8ntax.mongodb.net/?retryWrites=true&w=majority&appName=backend";

import data from './data.js';

app.use(cors());
app.use(express.json());
function connectDB() {
    mongoose.connect(connectUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
}

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ username: user.username }, 'your_secret_key', { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/bookmarks', verifyToken, async (req, res) => {
    const userId = req.user._id;
    const { movieId } = req.body;
    console.log(userId, movieId);
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!user.bookmarks.includes(movieId)) {
            user.bookmarks.push(movieId);
            await user.save();
            return res.status(200).json({ message: 'Movie added to bookmarks' });
        } else {
            return res.status(400).json({ message: 'Movie already in bookmarks' });
        }
    } catch (error) {
        console.error('Bookmark error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/logout', (req, res) => {
    res.status(200).json({ message: 'Logout successful' });
});

app.get('/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    res.status(200).json(data.filter(movie => movie.title.toLowerCase().includes(query)));
});

app.get('/all', (req, res) => {
    res.status(200).json(data);
});

app.get('/popular', (req, res) => {
    res.status(200).json(data.filter(movie => movie.isTrending));
})

app.get('/category/:category', (req, res) => {
    const category = req.params.category.toLowerCase();
    let filteredData = data.filter(movie => movie.category.toLowerCase() === category);
    res.status(200).json(filteredData);
});

function verifyToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    jwt.verify(token, 'your_secret_key', (err, decoded) => {
        if (err) {
            console.error('Token verification error:', err);
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = decoded;
        next();
    });
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDB();
});
