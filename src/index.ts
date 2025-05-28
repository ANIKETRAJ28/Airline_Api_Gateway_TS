import express from 'express';
import cookieParser from 'cookie-parser';
import { authProxy, bookingProxy, flightSearchProxy } from './middleware/proxy.middleware';

const app = express();

app.use('/search', flightSearchProxy);
app.use('/auth', authProxy);
app.use('/reservation', bookingProxy);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.listen(3000, () => {
  console.log('Gateway is running on port 3000');
});
