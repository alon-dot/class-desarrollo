import React from 'react';
import { Link } from 'react-router-dom';

const Homes: React.FC = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Bienvenido a la App</h1>
        <p className="auth-subtitle">Explora nuestra plataforma y accede a tu cuenta.</p>
        
        <div className="auth-links">
          <Link to="/login" className="btn btn-primary">Iniciar Sesión</Link>
          <Link to="/registro" className="btn btn-secondary">Crear Cuenta</Link>
        </div>
      </div>
    </div>
  );
};

export default Homes;