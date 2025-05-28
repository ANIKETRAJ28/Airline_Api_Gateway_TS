import { createProxyMiddleware } from 'http-proxy-middleware';
import { services } from '../util/services.util';
import { NextFunction, Request, Response } from 'express';

export const flightSearchProxy = createProxyMiddleware({
  target: services.SEARCH_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/search': '',
  },
});

export const authProxy = createProxyMiddleware({
  target: services.AUTH_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/auth': '',
  },
});

export const bookingProxy = (req: Request, res: Response, next: NextFunction) => {
  const proxy = createProxyMiddleware({
    target: services.BOOKING_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      '^/reservation': '',
    },
  });
  return proxy(req, res, next);
};
