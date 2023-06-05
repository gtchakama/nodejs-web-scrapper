## Web Scraping API

This code provides a web scraping API that extracts information from the HTML of a given website. It uses the following modules:

- `express`: to create an instance of the Express application and define routes
- `axios`: to make HTTP requests to the website to be scraped
- `cheerio`: to parse the HTML and extract data from it

### How to use

1. Clone or download this repository.
2. Install the required dependencies by running `npm install` in the project directory.
3. Start the server by running `node index.js`.
4. Make a GET request to the `/scrape` endpoint with a `url` query parameter set to the URL of the website you want to scrape. Example: `http://localhost:3000/scrape?url=https://www.example.com`.

The API will respond with a JSON object containing the extracted data from the website:

```json
{
  "title": "Example Domain",
  "description": "Example Domain. This domain is established to be used for illustrative examples in documents. You may use this domain in examples without prior coordination or asking for permission.",
  "paragraph": "This domain is established to be used for illustrative examples in documents. You may use this domain in examples without prior coordination or asking for permission."
}
```

If there is an error during the scraping process, the API will respond with a 500 status code and an error message.

### Dependencies

- express: ^4.17.1
- axios: ^0.21.1
- cheerio: ^1.0.0-rc.3

### License

This code is licensed under the [MIT License](https://opensource.org/licenses/MIT).