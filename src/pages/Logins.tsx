import React from 'react';
import { Link } from 'react-router-dom';

const Logins: React.FC = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Iniciar Sesión</h1>
        <p className="auth-subtitle">Ingresa tus credenciales para continuar</p>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Correo Electrónico</label>
            <input type="email" placeholder="tucorreo@ejemplo.com" required />
          </div>
          
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          <button type="submit" className="btn btn-primary w-full">Entrar</button>
        </form>

        <p className="auth-footer-text">
          ¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link>
        </p>
        <p className="auth-footer-text">
          <Link to="/" className="back-link">← Volver al Inicio</Link>
        </p>
      </div>
    </div>
  );
};

export default Logins;