import { createProxyMiddleware } from 'http-proxy-middleware';
import { services } from '../util/services.util';
import { Request, Response } from 'express';

export const flightSearchProxy = createProxyMiddleware({
  target: services.SEARCH_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/search': '',
  },
  on: {
    proxyReq: (proxyReq, req: Request) => {
      proxyReq.setHeader('X-Request-ID', req.id as string);
    },
    proxyRes: (proxyRes, req: Request, res: Response) => {
      let responseBody = Buffer.from([]);
      proxyRes.on('data', (chunk) => {
        responseBody = Buffer.concat([responseBody, chunk]);
      });
      proxyRes.on('end', () => {
        const bodyString = responseBody.toString('utf-8');
        try {
          const parsed = JSON.parse(bodyString);
          res.locals.errorMessage = parsed.message || 'No error message provided';
        } catch (err) {
          console.error('Failed to parse response as JSON:', err);
        }
      });
    },
  },
});

export const authProxy = createProxyMiddleware({
  target: services.AUTH_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/auth': '',
  },
  on: {
    proxyReq: (proxyReq, req: Request) => {
      proxyReq.setHeader('X-Request-ID', req.id as string);
    },
    proxyRes: (proxyRes, req: Request, res: Response) => {
      let responseBody = Buffer.from([]);
      proxyRes.on('data', (chunk) => {
        responseBody = Buffer.concat([responseBody, chunk]);
      });
      proxyRes.on('end', () => {
        const bodyString = responseBody.toString('utf-8');
        try {
          const parsed = JSON.parse(bodyString);
          res.locals.errorMessage = parsed.message || 'No error message provided';
        } catch (err) {
          console.error('Failed to parse response as JSON:', err);
        }
      });
    },
  },
});

export const bookingProxy = createProxyMiddleware({
  target: services.BOOKING_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/reservation': '',
  },
  on: {
    proxyReq: (proxyReq, req: Request) => {
      proxyReq.setHeader('X-Request-ID', req.id as string);
    },
    proxyRes: (proxyRes, req: Request, res: Response) => {
      let responseBody = Buffer.from([]);
      proxyRes.on('data', (chunk) => {
        responseBody = Buffer.concat([responseBody, chunk]);
      });
      proxyRes.on('end', () => {
        const bodyString = responseBody.toString('utf-8');
        try {
          const parsed = JSON.parse(bodyString);
          res.locals.errorMessage = parsed.message || 'No error message provided';
        } catch (err) {
          console.error('Failed to parse response as JSON:', err);
        }
      });
    },
  },
});
