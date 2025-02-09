import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();


router.get('/api/usuarios', async (req, res, next) => {
    try{
        const users = await prisma.user.findMany({
            omit: { password: true }
        });

        res.status(200).json({ message: 'Usuarios encontrados com sucesso', users });

    }catch(error){
        res.status(500).json({ error: 'Erro ao buscar usuarios' });
    } 
}); 



// Rota para buscar todos os portfólios
/*router.get('/portfolio', async (req, res) => {
    try {
        const portfolio = await prisma.portfolio.findMany();
        res.json(portfolio);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar portfólio' });
    }
}); */

export default router;