import express from 'express';
import categoryRoute from './src/routes/categoryRoute';
import authorRoute from './src/routes/authorRoute';
import bookRoute from './src/routes/bookRoute';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.use('/api', categoryRoute);
app.use('/api', authorRoute);
app.use('/api', bookRoute);

app.listen(3000, () => {
    console.log("Book API App em funcionamento");
    
})