// Create Restful Api for Comments
// 1. Create Comment
// 2. Get All Comments
// 3. Get Comment by Id
// 4. Update Comment
// 5. Delete Comment

// Import Express
const express = require('express');
// Import Router
const router = express.Router();
// Import Comment Model
const Comment = require('../models/comment');
// Import Post Model
const Post = require('../models/post');

// Create Comment
router.post('/comments', (req, res) => {
    // Create Comment
    Comment.create(req.body, (err, comment) => {
        if (err) {
            res.status(400).json({ message: err.message });
        } else {
            // Find Post by Id
            Post.findById(req.body.postId, (err, post) => {
                if (err) {
                    res.status(400).json({ message: err.message });
                } else {
                    // Push Comment to Post
                    post.comments.push(comment);
                    // Save Post
                    post.save();
                    // Response
                    res.status(200).json({ message: 'Comment Created Successfully' });
                }
            });
        }
    });
});

// Get All Comments
router.get('/comments', (req, res) => {
    // Find All Comments
    Comment.find({}, (err, comments) => {
        if (err) {
            res.status(400).json({ message: err.message });
        } else {
            // Response
            res.status(200).json(comments);
        }
    });
});

// Get Comment by Id
router.get('/comments/:id', (req, res) => {
    // Find Comment by Id
    Comment.findById(req.params.id, (err, comment) => {
        if (err) {
            res.status(400).json({ message: err.message });
        } else {
            // Response
            res.status(200).json(comment);
        }
    });
});

// Update Comment
router.patch('/comments/:id', (req, res) => {
    // Find Comment by Id and Update
    Comment.findByIdAndUpdate(req.params.id, req.body, (err, comment) => {
        if (err) {
            res.status(400).json({ message: err.message });
        } else {
            // Response
            res.status(200).json({ message: 'Comment Updated Successfully' });
        }
    });
});

// Delete Comment
router.delete('/comments');
