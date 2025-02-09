import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Inicializa o estado com base no token existente
        const token = localStorage.getItem('token');
        return !!token;
    });

    const login = (token) => {
        console.log('Login chamado com token:', token);
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        console.log('Logout chamado');
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    // Monitora mudanças no token
    useEffect(() => {
        const handleStorageChange = () => {
            const token = localStorage.getItem('token');
            setIsAuthenticated(!!token);
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    console.log('Estado atual de autenticação:', isAuthenticated);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
}; 