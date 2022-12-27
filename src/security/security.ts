import { NextFunction } from 'express';
import { ServerResponse } from 'http';
import { IncomingMessage } from 'http';

export const security = (req: IncomingMessage, res: ServerResponse, next: NextFunction) => {
  console.log(req);
  next();
};