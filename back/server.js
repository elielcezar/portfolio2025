import express from 'express';
import publicRoutes from './routes/public.js';
import privateRoutes from './routes/private.js';
import auth from './middlewares/auth.js';
import cors from 'cors';
//import dotenv from 'dotenv';

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: ['https://eliel.dev', 'http://localhost:5173'], // permite tanto produção quanto desenvolvimento
    credentials: true
}));

app.use(express.json());
app.use('/', publicRoutes);
app.use('/', auth, privateRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
