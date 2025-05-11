import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './contexts/AuthContext';
import theme from './theme';

// Páginas (a serem criadas)
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectForm from './pages/ProjectForm';

// Layout (a ser criado)
import AdminLayout from './layouts/AdminLayout';

// Contexto de autenticação (placeholder)
const isAuthenticated = () => {
  // Verificar token no localStorage
  return localStorage.getItem('token') !== null;
};

// Rota protegida
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

function App() {
  // Ajuste para base path /admin/
  const basePath = '/admin';
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <BrowserRouter basename={basePath}>
          <Routes>
              <Route path="login" element={<Login />} />
              
              <Route path="/" element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }>
              <Route index element={<Dashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/new" element={<ProjectForm />} />
              <Route path="projects/edit/:id" element={<ProjectForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;