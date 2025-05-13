import express, { Request, Response, Router } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const router = Router();
const PORT = process.env.PORT || 4000;
const prisma = new PrismaClient();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota básica
router.get('/', (_req: Request, res: Response) => {
  res.send('API Portfolio funcionando!');
});

// Rotas de autenticação
router.post('/api/auth/login', async (req: Request<{}, {}, { email: string; password: string }>, res: Response) => {
  try {
    const { email, password } = req.body;
    
    // Buscar usuário
    const user = await prisma.user.findUnique({
      where: { email }
    });
    
    // Para desenvolvimento, simplificamos a autenticação
    if (user && password === 'admin123') {
      // Gerar token simples
      const token = 'jwt-token-simulado';
      
      return res.json({
        user: {
          id: user.id,
          email: user.email,
          role: user.role
        },
        token
      });
    }
    
    return res.status(401).json({ error: 'Credenciais inválidas' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao fazer login' });
  }
});

// Rotas de projetos
router.get('/api/projects', async (_req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar projetos' });
  }
});

router.get('/api/projects/:id', async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const project = await prisma.project.findUnique({
      where: { id: Number(id) }
    });
    
    if (!project) {
      return res.status(404).json({ error: 'Projeto não encontrado' });
    }
    
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar projeto' });
  }
});

router.post('/api/projects', async (req: Request<{}, {}, { title: string; description: string; imageUrl: string; link: string; tags: string; featured?: boolean }>, res: Response) => {
  try {
    const { title, description, imageUrl, link, tags, featured } = req.body;
    
    const project = await prisma.project.create({
      data: {
        title,
        description,
        imageUrl,
        link,
        tags,
        featured: featured || false
      }
    });
    
    res.status(201).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar projeto' });
  }
});

router.put('/api/projects/:id', async (req: Request<{ id: string }, {}, { title: string; description: string; imageUrl: string; link: string; tags: string; featured?: boolean }>, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, imageUrl, link, tags, featured } = req.body;
    
    const project = await prisma.project.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        imageUrl,
        link,
        tags,
        featured: featured || false
      }
    });
    
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar projeto' });
  }
});

router.delete('/api/projects/:id', async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    
    await prisma.project.delete({
      where: { id: Number(id) }
    });
    
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir projeto' });
  }
});

app.use(router);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Tratar encerramento do processo
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});