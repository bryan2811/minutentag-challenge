import express from 'express';
import stockPriceData from '../stock-price.js';
import productsData from '../products.js';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serving static files
app.use(express.static(path.join(__dirname, '../public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));


// Then you can use __dirname to reference directory paths
app.get('/', (req, res) => {
    res.render('home', { title: 'Home', products: productsData });
});


// API endpoint for stock and price
app.get('/api/stock-price/:code', (req, res) => {
    res.set({
        'Cache-Control': 'no-store',
        'Pragma': 'no-cache',
        'Expires': '0'
    });
    const data = stockPriceData[req.params.code];
    if (data) {
        res.json(data);
    } else {
        res.status(404).send('Stock data not found');
    }
});

app.get('/:productId-:brand', (req, res) => {
    const { productId, brand } = req.params;
    const product = productsData.find(p => p.id === parseInt(productId) && p.brand.toLowerCase().replace(' ', '-') === brand);
    if (product) {
        res.render('product-detail', { product });
    } else {
        res.status(404).send('Product not found');
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
