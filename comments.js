// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments.js');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get all comments
app.get('/comments', function(req, res) {
  res.json(comments.getComments());
});

// Get comment by ID
app.get('/comments/:id', function(req, res) {
  const id = req.params.id;
  res.json(comments.getComment(id));
});

// Create new comment
app.post('/comments', function(req, res) {
  const comment = req.body;
  res.json(comments.addComment(comment));
});

// Update comment by ID
app.put('/comments/:id', function(req, res) {
  const id = req.params.id;
  const comment = req.body;
  res.json(comments.updateComment(id, comment));
});

// Delete comment by ID
app.delete('/comments/:id', function(req, res) {
  const id = req.params.id;
  res.json(comments.deleteComment(id));
});

// Start server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});