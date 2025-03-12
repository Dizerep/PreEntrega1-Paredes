
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="text-dark py-4">
      <div className="container">
        <div className="row">
          {/* Columna 1: Logo y descripción */}
          <div className="col-md-4 text-center text-md-start">
            <h4 className="text-uppercase" style={{ color: "#db7093" }}>Pet Store</h4>
            <p>Tu tienda favorita para consentir a tus mascotas.</p>
          </div>

          {/* Columna 2: Categorías */}
          <div className="col-md-4 text-center">
            <h5>Categorías</h5>
            <ul className="list-unstyled">
              <li><Link to ="/categoria/1" className="text-light text-decoration-none">🐶 Perros</Link></li>
              <li><Link to ="/categoria/2" className="text-light text-decoration-none">🐱 Cats</Link></li>
              <li><Link to ="/categoria/3" className="text-light text-decoration-none">🐠 Fish</Link></li>
              <li><Link to ="/categoria/4" className="text-light text-decoration-none">🦜 Birds</Link></li>
              <li><Link to ="/categoria/5" className="text-light text-decoration-none">🦎 Reptiles</Link></li>
            </ul>
          </div>

          {/* Columna 3: Información de contacto */}
          <div className="col-md-4 text-center text-md-end">
            <h5>Contacto</h5>
            <p>📍 Corrales, Boyacá</p>
            <p>🌐 www.petstore.com</p>
            <p>📧 contacto@petstore.com</p>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="my-3 border-light" />

        {/* Derechos reservados */}
        <div className="text-center">
          <p className="mb-0">© 2024 Pet Store | Creado por Diana Paredes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
