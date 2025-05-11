import { useState, useEffect } from 'react';
import { 
  Grid, Paper, Typography, Box, 
  Card, CardContent, CardHeader,
  CircularProgress
} from '@mui/material';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

// Dados de exemplo para o dashboard
const mockData = [
  { name: 'Jan', value: 3 },
  { name: 'Fev', value: 5 },
  { name: 'Mar', value: 2 },
  { name: 'Abr', value: 7 },
  { name: 'Mai', value: 4 },
  { name: 'Jun', value: 8 }
];

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalProjects: 0,
    featuredProjects: 0
  });

  useEffect(() => {
    // Simula carregamento de dados
    const timer = setTimeout(() => {
      setStats({
        totalProjects: 12,
        featuredProjects: 4
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {/* Estatísticas */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            elevation={2}
            sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Total de Projetos
            </Typography>
            <Typography component="p" variant="h3">
              {stats.totalProjects}
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            elevation={2}
            sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Projetos Destacados
            </Typography>
            <Typography component="p" variant="h3">
              {stats.featuredProjects}
            </Typography>
          </Paper>
        </Grid>
        
        {/* Gráfico */}
        <Grid item xs={12} md={12} lg={6}>
          <Card>
            <CardHeader title="Projetos por Mês" />
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={mockData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}