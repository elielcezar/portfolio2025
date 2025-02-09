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
    
    /*const token = req.headers.authorization;
    
    if(!token){
        return res.status(401).json({ error: 'Token nao informado' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);*/    

}); 

export default router;