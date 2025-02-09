import express from 'express';
import cors from 'cors';
import publicRoutes from './routes/public.js';
import privateRoutes from './routes/private.js';
import auth from './middlewares/auth.js';

const app = express();

// Configuração do CORS
app.use(cors({
    origin: ['https://eliel.dev', 'http://localhost:5173'], // permite tanto produção quanto desenvolvimento
    credentials: true
}));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api', publicRoutes);
app.use('/api', auth, privateRoutes);

// Rota de teste de saúde
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
