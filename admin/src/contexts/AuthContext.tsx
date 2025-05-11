import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextData {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoredData() {
      const token = localStorage.getItem('token');
      
      if (token) {
        try {
          // Em produção, aqui você faria uma chamada para verificar o token
          // const response = await api.get('/auth/me');
          // setUser(response.data);
          
          // Mock para desenvolvimento
          setUser({
            id: 1,
            name: 'Admin',
            email: 'admin@exemplo.com'
          });
        } catch (error) {
          localStorage.removeItem('token');
        }
      }
      
      setLoading(false);
    }
    
    loadStoredData();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Em produção:
      // const response = await api.post('/auth/login', { email, password });
      // const { token, user } = response.data;
      
      // Mock para desenvolvimento
      if (email === 'admin@teste.com' && password === 'senha123') {
        const mockUser = {
          id: 1,
          name: 'Admin',
          email: 'admin@teste.com'
        };
        
        localStorage.setItem('token', 'mock-token-1234');
        setUser(mockUser);
      } else {
        throw new Error('Credenciais inválidas');
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        loading, 
        login, 
        logout, 
        isAuthenticated: !!user 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  
  return context;
}