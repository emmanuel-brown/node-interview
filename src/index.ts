import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use(cors({
//     origin: 'http://localhost:4200',
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization']
// }));

app.use(cors({
    origin: '*', // Allow all origins for development purposes
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

import Routes from './routes'

app.use('/users', Routes.userRouter)

app.get('/', (_req: Request, res: Response) => {
  res.send('🚀 Hello from TypeScript + Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});