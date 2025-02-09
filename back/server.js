import express from 'express';
import publicRoutes from './routes/public.js';
import privateRoutes from './routes/private.js';
import auth from './middlewares/auth.js';
import cors from 'cors';
//import dotenv from 'dotenv';


const app = express();
app.use(express.json());
app.use(cors());
app.use('/', publicRoutes);
app.use('/', auth, privateRoutes);

//dotenv.config();

app.use(express.json());

//app.use(cors());


const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
