import { UserAuthenticatedRoute } from '../security/security';
import { Request, Response } from 'express';
import { NextFunction } from 'express';
import { login, register } from './manager.user';
const express = require('express')
const router = express.Router()

const authRoutes: UserAuthenticatedRoute[] = [
  {
    routePathRe: /^\/login$/,
    routeFunc: (req: Request, res: Response) => login(req, res)
  },
  {
    routePathRe: /^\/register$/,
    routeFunc: (req: Request, res: Response) => register(req, res)
  },
]

// middleware that is specific to this router
router.use((req: Request, res: Response, next: NextFunction) => {
  var noAuth = true

  for (const authRoute of authRoutes) {    
    if (req.method === 'POST' && authRoute.routePathRe.test(req.url ?? '')) {      
      authRoute.routeFunc(req, res);

      noAuth = false;
    }
  }

  // if (noAuth) next();
  // next();
})

module.exports = router