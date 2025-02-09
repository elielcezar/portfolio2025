import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/home/Home';
import AddPortfolio from './pages/addPortfolio/AddPortfolio';
import ListContent from './pages/listContent/ListContent';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Header/>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin/novo/portfolio" element={<AddPortfolio />} />
        <Route path="admin/conteudo" element={<ListContent />} />
        <Route path="/login" element={<Login />} />
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
    </Router>
  );
}

export default App;