const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const auth = require('./routes/auth');
const api = require('./routes/api');

const port = 3000;
const host = '0.0.0.0';

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(
        'mongodb://localhost:27017/authentication',
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(
        () => console.log('Connecting to MongoDB executed!')
    )
    .catch(
        () => console.log('MongoDB connection refused!')
    );

app.use('/auth', auth);
app.use('/api', api);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    );
    
    res.status(404).send('Not found');
    next();
});

app.listen(port, host);
console.log(`Listening on ${host}:${port}`);