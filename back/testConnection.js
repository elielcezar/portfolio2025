const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function main() {
  try {
    console.log('Tentando conectar ao banco de dados...');
    const users = await prisma.user.findMany();
    console.log('Conexão bem-sucedida!');
    console.log('Usuários:', users);
  } catch (error) {
    console.error('Erro ao conectar:', error);
    console.error('URL de conexão:', process.env.DATABASE_URL);
  }
}

main()
  .catch(e => {
    console.error('Erro no programa principal:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });