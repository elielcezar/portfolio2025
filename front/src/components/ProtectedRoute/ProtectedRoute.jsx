import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ element: Component }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    useEffect(() => {
        console.log('ProtectedRoute - isAuthenticated:', isAuthenticated);
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        console.log('Redirecionando para login...');
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    console.log('Renderizando componente protegido...');
    return <Component />;
};

export default ProtectedRoute;