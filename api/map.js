const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/map', async (req, res) => {

    // Predefined list of coordinates with names and images
    const coordinatesList = [
        { lat: 41.1579, lng: -8.6291, name: "Porto, Portugal", image: "https://raw.githubusercontent.com/GuilhermeSML/MappaMundi/81e8cbb7b06bded2d8b5703de74482b1451c7434/public/img/porto.jpg" },
        { lat: 48.8566, lng: 2.3522, name: "Paris, France", image: "https://example.com/paris.jpg" },
        { lat: 40.7128, lng: -74.0060, name: "New York, USA", image: "https://example.com/newyork.jpg" },
        { lat: 34.0522, lng: -118.2437, name: "Los Angeles, USA", image: "https://example.com/losangeles.jpg" }
    ]

    // Path to the EJS template
    const templatePath = path.join(__dirname, '..', 'views', 'map.ejs');
    console.log('Template Path:', templatePath);

    // Render the EJS template with dynamic data
    ejs.renderFile(templatePath, {coordinatesList}, (err, html) => {
        if (err) {
            console.error('Error rendering EJS template:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        res.setHeader('Content-Type', 'text/html');
        res.send(html);
    });
});

// Export the app as a serverless function
module.exports = (req, res) => {
    app(req, res);
};