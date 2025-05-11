import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Portfolio ok!');
});

app.post('/api/auth/login', async (req, res) => {
   
})

app.get('/api/projects', async (req, res) => {
    try{
        const projects = await prisma.project.findMany();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar projetos' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})