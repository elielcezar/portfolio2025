import React from 'react';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import PageTitle from '../../components/PageTitle/PageTitle';

const Content = () => {
  return (
    <div id="main">
      <div className="container">
        <PageTitle title="Conteúdo" />
        {/* Seu conteúdo aqui */}
      </div>
    </div>
  );
};

export default Content;
