import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Header from './components/Header/Header';
import Home from './pages/home/Home';
import CreatePortfolio from './pages/CreatePortfolio/CreatePortfolio';
import Content from './pages/Content/Content';
import Login from './pages/Login/Login';
import CreateUser from './pages/CreateUser/CreateUser';
import NotFound from './pages/NotFound/NotFound';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header/>      
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/login" element={<Login />} />          
          
          {/* Rotas Protegidas */}
          <Route path="/create-user" element={<ProtectedRoute element={CreateUser} />} />
          <Route path="/admin/conteudo" element={<ProtectedRoute element={Content} />} />
          <Route path="/admin/novo/portfolio" element={<ProtectedRoute element={CreatePortfolio} />} />
          
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;