import express from 'express';
import morgan from 'morgan';
import familyRoutes from './routes/family.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', familyRoutes);


export default app;
