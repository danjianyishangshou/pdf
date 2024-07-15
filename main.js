const express = require('express');
const generate_pdf = require('./index');
const app = express();

app.get('/generatepdf', async (req, res) => {
    const { contractNumber, token } = req.query;
    if (!contractNumber || !token) {
        res.status(400).json({ code: '401', error: 'Missing contractNumber or token' });
        return;
    }
    try {
        const result = await generate_pdf(contractNumber, token);
        res.status(200).json({ success: result });
    } catch (error) {
        console.error('Error during PDF generation:', error);
        res.status(500).json({ error: error.toString() });
    }
});

app.use((req, res) => {
    res.status(404).send('Not Found');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
