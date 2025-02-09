import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

//Cadastro de usuario
router.post('/api/cadastro', async (req, res) => {

    try{
        const user = req.body;
        
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);

        const userDB = await prisma.user.create({ 
            data: { 
                name: user.name,
                email: user.email, 
                password: hash
            } 
        });
    
        res.status(200).json(userDB);

    }catch(error){
        res.status(500).json({ error: 'Erro ao cadastrar usuario' });
    }   
    
});

// LOGIN
router.post('/login', async (req, res) => {
    try {
        console.log('Requisição de login recebida:', {
            body: req.body,
            headers: req.headers
        });

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email e senha são obrigatórios' });
        }

        const userDB = await prisma.user.findUnique({
            where: { email }
        });

        if (!userDB) {
            return res.status(401).json({ error: 'Usuário não encontrado' });
        }

        const passwordMatch = await bcrypt.compare(password, userDB.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Senha inválida' });
        }

        const token = jwt.sign({ id: userDB.id }, process.env.JWT_SECRET, { expiresIn: '12h' });    

        res.status(200).json({ 
            message: 'Login realizado com sucesso', 
            token,
            user: {
                id: userDB.id,
                email: userDB.email,
                name: userDB.name
            }
        });
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
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