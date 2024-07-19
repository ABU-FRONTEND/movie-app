import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './models/userModel.js';
import Movie from './models/movieModel.js'
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
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ email: user.email }, 'your_secret_key', { expiresIn: '1h' });

        res.status(200).json({ token, user });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/add-bookmarks', verifyToken, async (req, res) => {
    const { movieId } = req.body;
    console.log('Request User:', req.user);
    try {
        if (!data || !Array.isArray(data)) {
            console.error('Data is not defined or not an array');
            return res.status(500).json({ message: 'Internal server error' });
        }
        const movie = data.filter(movie => movie.id === movieId);
        console.log('Filtered Movie:', movie);
        if (movie.length === 0) {
            console.log('Movie not found');
            return res.status(404).json({ message: 'Movie not found' });
        }
        const foundMovieId = movie[0].id;
        console.log('Found Movie ID:', foundMovieId);

        // Log the user's email
        console.log('User Email:', req.user.email);

        // Find the user by email
        const user = await User.findOne({ email: req.user.email });
        if (!user) {
            console.log('User not found');
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('User found:', user);

        // Convert the movieId to ObjectId if required by the schema
        let movieObjectId;
        try {
            movieObjectId = new mongoose.Types.ObjectId(foundMovieId);
        } catch (err) {
            console.error('Invalid movie ID:', foundMovieId);
            return res.status(400).json({ message: 'Invalid movie ID' });
        }

        // Check if the movie is already bookmarked
        if (!user.bookmarks.includes(movieObjectId)) {
            console.log('Adding movie to bookmarks');
            user.bookmarks.push(movieObjectId);

            try {
                await user.save();
                console.log('Movie added to bookmarks');
                return res.status(200).json({ message: 'Movie added to bookmarks' });
            } catch (saveError) {
                console.error('Error saving user:', saveError);
                return res.status(500).json({ message: 'Internal server error' });
            }
        } else {
            console.log('Movie already in bookmarks');
            return res.status(400).json({ message: 'Movie already in bookmarks' });
        }
    } catch (error) {
        console.error('Bookmark error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/bookmarks', verifyToken, async (req, res) => {
    const userId = req.user._id;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ bookmarks: user.bookmarks });
    } catch (error) {
        console.error('Bookmark error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
})
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

app.get('/auth/check', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    jwt.verify(token, 'your_secret_key', (err, decoded) => {
        if (err) {
            console.error('Token verification error:', err);
            return res.status(401).json({ message: 'Unauthorized' });
        }
        res.status(200).json({ message: 'Authorized', user: decoded });
    });
})

app.listen(port, () => {
    console.log(`Server is running on +`);
    connectDB();
});
