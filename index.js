import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

//initialize express
const app = express();
//PORT number
const PORT = process.env.PORT || 5000;

//Middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('hello from homepage');

});











app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
