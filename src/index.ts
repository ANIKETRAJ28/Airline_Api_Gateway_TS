import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { authProxy, bookingProxy, flightSearchProxy } from './middleware/proxy.middleware';
import { services } from './util/services.util';

const app = express();

const corsOptions = {
  origin: services.FRONTEND_URL,
  credentials: true,
};

app.use(cors(corsOptions));
app.use('/search', flightSearchProxy);
app.use('/auth', authProxy);
app.use('/reservation', bookingProxy);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.listen(3000, () => {
  console.log('Gateway is running on port 3000');
});
