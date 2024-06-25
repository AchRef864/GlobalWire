const express = require('express');
const newsAPI = require('./NewsAPI'); // Import newsAPI functions

const app = express();

// Route to display news sources
app.get('/news-sources', async (req, res) => {
  try {
    await newsAPI.getAllSources(); // Call the function from newsapi.js
    res.send('News sources displayed in the console.'); // Consider sending response data
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving news sources.'); // Handle errors gracefully
  }
});

// Example route to retrieve articles (adjust parameters as needed)
app.get('/news-articles', async (req, res) => {
    const source = req.query.source;
    const category = req.query.category;
    const q = req.query.q;
  
    try {
      const articles = await newsAPI.getNewsArticles(source, category, q);
      // Process and display articles in your front-end using articles data
      res.json(articles); // Send the articles data as JSON response
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving news articles.'); // Handle errors gracefully
    }
  });  

const port = process.env.PORT || 3000; // Use environment variable or default port

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
