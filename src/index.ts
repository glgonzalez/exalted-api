import express from 'express';
import cors from 'cors';

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the unofficial exalted api');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});