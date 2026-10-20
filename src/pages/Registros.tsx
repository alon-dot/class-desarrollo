import React from 'react';
import { Link } from 'react-router-dom';

const Registros: React.FC = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Crear Cuenta</h1>
        <p className="auth-subtitle">Regístrate para comenzar a usar la plataforma</p>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Nombre Completo</label>
            <input type="text" placeholder="Tu nombre" required />
          </div>

          <div className="form-group">
            <label>Correo Electrónico</label>
            <input type="email" placeholder="tucorreo@ejemplo.com" required />
          </div>
          
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          <button type="submit" className="btn btn-primary w-full">Registrarse</button>
        </form>

        <p className="auth-footer-text">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
        <p className="auth-footer-text">
          <Link to="/" className="back-link">← Volver al Inicio</Link>
        </p>
      </div>
    </div>
  );
};

export default Registros;