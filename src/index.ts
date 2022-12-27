import { security } from './security/security';

import express, { Request, response } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as path from 'path';


// import errorHandler from './api/middlewares/error-handler.middleware';
const routes = require('./routes/router');

const app = express();
const port = 3000;

// serve static files
app.use(express.static(path.join(__dirname, '../public')));

// compresses all the responses
app.use(compression());

// adding set of security middlewares
app.use(helmet());

// parse incoming request body and append data to `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable all CORS request
app.use(cors());

app.use('/api', security);

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`)
});