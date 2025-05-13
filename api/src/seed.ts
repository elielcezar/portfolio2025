import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await bcrypt.hash('admin123', 10);
  
  try {
    const admin = await prisma.user.upsert({
      where: { email: 'admin@eliel.dev' },
      update: {},
      create: {
        email: 'admin@eliel.dev',        
        password: adminPassword,
        role: 'admin'
      }
    });
    
    console.log('Usuário admin criado:', admin);
  } catch (error) {
    console.error('Erro ao criar usuário admin:', error);
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });