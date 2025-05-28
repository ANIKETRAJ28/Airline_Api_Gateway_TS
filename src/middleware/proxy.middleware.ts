import { createProxyMiddleware } from 'http-proxy-middleware';
import { services } from '../util/services.util';

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

export const bookingProxy = createProxyMiddleware({
  target: services.BOOKING_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/reservation': '',
  },
});
