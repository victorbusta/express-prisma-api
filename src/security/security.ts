import { NextFunction } from 'express';
import { ServerResponse } from 'http';
import { IncomingMessage } from 'http';

export interface UserAuthenticatedRoute {
  routePathRe: RegExp,
  routeFunc: Function,
}

export const securityRoutes: UserAuthenticatedRoute[] = [
  {
    routePathRe: /^\/article\/(?<articleId>\d^)$/,
    routeFunc: (regex: RegExp, req: IncomingMessage) => {console.log(regex.exec(req.url ?? '')?.groups?.id);},
  },
  {
    routePathRe: /^\/article\/(?<articleId>\d+)\/comment\/(?<commentId>\d+)$/,
    routeFunc: (regex: RegExp, req: IncomingMessage) => {console.log(regex.exec(req.url ?? ''));},
  },
  {
    routePathRe: /^\/machine\/(?<machineId>\d+)$/,
    routeFunc: (regex: RegExp, req: IncomingMessage) => {console.log(regex.exec(req.url ?? ''));},
  },
  {
    routePathRe: /^\/component\/(?<componentId>\d+)$/,
    routeFunc: (regex: RegExp, req: IncomingMessage) => {console.log(regex.exec(req.url ?? ''));},
  },
]

export const security = (req: IncomingMessage, res: ServerResponse, next: NextFunction) => {

  // for (const securityRoute of securityRoutes) {    
  //   if (securityRoute.routePathRe.test(req.url ?? '')) {
  //     securityRoute.routeFunc(securityRoute.routePathRe, req);
  //   }
  // }

  // console.log(req.url);
  next();
}