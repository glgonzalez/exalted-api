import express from 'express';

const port = 8080;
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the unofficial exalted api');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});