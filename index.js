// Import required modules
const express = require('express');
const axios = require('axios'); // for making http requests
const cheerio = require('cheerio'); // for parsing html

// Create an instance of the express application
const app = express();

// Define a route for web scraping
app.get('/scrape', async (req, res) => {
  const url = req.query.url; // Get the URL to scrape from the query parameter

  try {
    // Make a request to the URL using Axios
    const { data: html } = await axios.get(url);

    // Load the HTML into Cheerio for parsing
    const $ = cheerio.load(html);

    // Use Cheerio to extract data from the HTML
    const title = $('title').text();
    const paragraph = $('p').text();
    const description = $('meta[name="description"]').attr('content');

    // Send the extracted data back as a JSON response
    res.json({
      title,
      description,
      paragraph
    });
  } catch (error) {
    console.log(error);
    // If there is an error, send a 500 status code and an error message back to the client
    res.status(500).json({
      error: 'Error scraping website'
    });
  }
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
