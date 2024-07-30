import express from 'express';
import dotenv from 'dotenv';
import { route } from './routes/Route.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(route);


const port = process.env.PORT || 5500

app.listen(port);