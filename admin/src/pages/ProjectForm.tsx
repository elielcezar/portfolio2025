import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box, Button, Paper, Typography, TextField,
  FormControlLabel, Switch, Grid, CircularProgress,
  Alert, Snackbar
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ProjectFormData {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string;
  featured: boolean;
}

const initialFormData: ProjectFormData = {
  title: '',
  description: '',
  imageUrl: '',
  link: '',
  tags: '',
  featured: false
};

// Simulação de projeto existente
const mockProject = {
  id: 1,
  title: 'Site E-commerce',
  description: 'Site de comércio eletrônico completo com React e Node.js',
  imageUrl: 'https://example.com/image.jpg',
  link: 'https://example.com',
  tags: 'react,nodejs,ecommerce',
  featured: true
};

export default function ProjectForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);
  
  const [formData, setFormData] = useState<ProjectFormData>(initialFormData);
  const [loading, setLoading] = useState(isEditMode);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEditMode) {
      // Simulação de carregamento da API
      const timer = setTimeout(() => {
        setFormData(mockProject);
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isEditMode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'featured' ? checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    try {
      // Simulação de envio para API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Futuro: await api.post ou api.put
      
      setSuccess(true);
      setTimeout(() => {
        navigate('/projects');
      }, 1500);
    } catch (err) {
      setError('Erro ao salvar o projeto. Tente novamente.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/projects')}
        sx={{ mb: 3 }}
      >
        Voltar
      </Button>

      <Typography variant="h4" sx={{ mb: 4 }}>
        {isEditMode ? 'Editar Projeto' : 'Novo Projeto'}
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Título"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                multiline
                rows={4}
                label="Descrição"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="URL da Imagem"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://..."
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Link do Projeto"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="https://..."
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="react, ui, design (separadas por vírgula)"
              />
            </Grid>
            
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.featured}
                    onChange={handleChange}
                    name="featured"
                    color="primary"
                  />
                }
                label="Projeto Destacado"
              />
            </Grid>
            
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={saving}
                  sx={{ mt: 2 }}
                >
                  {saving ? 'Salvando...' : 'Salvar'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Snackbar 
        open={success} 
        autoHideDuration={6000} 
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success">
          Projeto salvo com sucesso!
        </Alert>
      </Snackbar>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
}