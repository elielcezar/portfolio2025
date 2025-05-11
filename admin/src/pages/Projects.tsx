import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Button, Paper, Typography, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow,
  IconButton, Chip, CircularProgress, Dialog,
  DialogActions, DialogContent, DialogContentText,
  DialogTitle
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon
} from '@mui/icons-material';

// Interface para o tipo Projeto
interface Project {
  id: number;
  title: string;
  description: string;
  featured: boolean;
  imageUrl?: string;
  createdAt: string;
}

// Dados de exemplo
const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Site E-commerce',
    description: 'Site de comércio eletrônico completo com React e Node.js',
    featured: true,
    createdAt: '2024-04-15'
  },
  {
    id: 2,
    title: 'App Mobile',
    description: 'Aplicativo móvel desenvolvido com React Native',
    featured: false,
    createdAt: '2024-03-22'
  },
  {
    id: 3,
    title: 'Dashboard Administrativo',
    description: 'Dashboard para gerenciamento de conteúdo',
    featured: true,
    createdAt: '2024-05-01'
  }
];

export default function Projects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<number | null>(null);

  useEffect(() => {
    // Simulação de carregamento da API
    const timer = setTimeout(() => {
      setProjects(mockProjects);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleEdit = (id: number) => {
    navigate(`/projects/edit/${id}`);
  };

  const handleDelete = (id: number) => {
    setProjectToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (projectToDelete) {
      // Implementação futura: Chamada à API
      setProjects(projects.filter(project => project.id !== projectToDelete));
    }
    setDeleteDialogOpen(false);
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">
          Projetos
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/projects/new')}
        >
          Novo Projeto
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Destacado</TableCell>
              <TableCell>Data de Criação</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.title}</TableCell>
                <TableCell>{project.description.substring(0, 50)}...</TableCell>
                <TableCell>
                  <Chip 
                    label={project.featured ? "Sim" : "Não"}
                    color={project.featured ? "success" : "default"}
                    size="small"
                  />
                </TableCell>
                <TableCell>{project.createdAt}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => window.open(`/project/${project.id}`, '_blank')}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton onClick={() => handleEdit(project.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(project.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog de confirmação de exclusão */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Confirmar exclusão</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza que deseja excluir este projeto? Esta ação não pode ser desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancelar</Button>
          <Button onClick={confirmDelete} color="error" autoFocus>
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}