import { IncomingMessage } from 'http';
import { ServerResponse } from 'http';
import { NextFunction } from 'express';
const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req: IncomingMessage, res: ServerResponse, next: NextFunction) => {
  console.log('Time: ', Date.now());
  next();
})

// define the home page route
router.get('/', (req: IncomingMessage, res: ServerResponse) => {
  res.end('Birds home page');
})

router.post('/', (req: IncomingMessage, res: ServerResponse) => {
  res.end('birds arent real !');
})

// define the about route
router.get('/about', (req: IncomingMessage, res: ServerResponse) => {
  res.end('About birds');
})

module.exports = router