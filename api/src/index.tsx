import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/auth';
import projectRoutes from './routes/projects';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
export const prisma = new PrismaClient();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

// Rota básica
app.get('/', (req, res) => {
  res.send('API Portfolio funcionando!');
});

// Tratamento de erros
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Erro no servidor!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Fechamento da conexão Prisma quando a aplicação encerrar
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});