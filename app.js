const express = require('express');
const bodyParser = require('body-parser');
const itemsRouter = require('./routes/items');

const app = express();
app.use(bodyParser.json());

const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
