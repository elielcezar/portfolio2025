import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '../index';

// Estendendo a interface Request para incluir o user
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return res.status(401).json({ error: 'Token não fornecido' });
    }
    
    const parts = authHeader.split(' ');
    
    if (parts.length !== 2) {
      return res.status(401).json({ error: 'Erro no token' });
    }
    
    const [scheme, token] = parts;
    
    if (!/^Bearer$/i.test(scheme)) {
      return res.status(401).json({ error: 'Token mal formatado' });
    }
    
    const secret = process.env.JWT_SECRET as string;
    
    jwt.verify(token, secret, async (err, decoded: any) => {
      if (err) {
        return res.status(401).json({ error: 'Token inválido' });
      }
      
      const user = await prisma.user.findUnique({
        where: { id: decoded.id }
      });
      
      if (!user) {
        return res.status(401).json({ error: 'Usuário não encontrado' });
      }
      
      req.user = user;
      return next();
    });
  } catch (error) {
    return res.status(500).json({ error: 'Erro na autenticação' });
  }
};