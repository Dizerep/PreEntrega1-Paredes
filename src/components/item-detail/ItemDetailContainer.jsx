import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './item-detail-container.scss';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getItem = async () => {
      try {
        // Simular un retardo de 1 segundo
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Convertir el id a número para comparar
        const found = data.productos.find(prod => prod.id === parseInt(id));
        if (!found) throw new Error('Item no encontrado');
        setItem(found);
      } catch (err) {
        console.error('Error fetching item:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getItem();
  }, [id]);

  if (loading) {
    return <div className="text-center my-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center my-4">Error: {error.message}</div>;
  }

  if (!item) {
    return <div className="text-center my-4">Item no encontrado</div>;
  }

  return (
    <div className="item-detail-container container my-5">
      <div className="card shadow-lg">
        <div className="row g-0 p-4">
          <div className="col-md-4">
            <img
              src={item.imagen_url}
              alt={item.nombre}
              className="img-fluid rounded-start w-100"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title fs-1 fw-bold mb-4">{item.nombre}</h2>
              <h4 className="card-subtitle text-muted mb-3">${item.precio}</h4>
              <p className="card-text">{item.descripcion}</p>
              {item.fabricante && (
                <p>
                  <strong>Fabricante:</strong> {item.fabricante}
                </p>
              )}
              {item.pais_origen && (
                <p>
                  <strong>País de Origen:</strong> {item.pais_origen}
                </p>
              )}
              {item.material && (
                <p>
                  <strong>Material:</strong> {item.material}
                </p>
              )}
              {item.dimensiones && (
                <p>
                  <strong>Dimensiones:</strong> {item.dimensiones}
                </p>
              )}
              {item.peso && (
                <p>
                  <strong>Peso:</strong> {item.peso}
                </p>
              )}
              {item.volumen && (
                <p>
                  <strong>Volumen:</strong> {item.volumen}
                </p>
              )}
              {item.beneficios && item.beneficios.length > 0 && (
                <div className="mb-3">
                  <h5>Beneficios:</h5>
                  <ul>
                    {item.beneficios.map((beneficio, index) => (
                      <li key={index}>{beneficio}</li>
                    ))}
                  </ul>
                </div>
              )}
              {item.instrucciones_uso && (
                <p>
                  <strong>Instrucciones de Uso:</strong> {item.instrucciones_uso}
                </p>
              )}
              {item.recomendaciones && (
                <p>
                  <strong>Recomendaciones:</strong> {item.recomendaciones}
                </p>
              )}
              {item.testimonios && item.testimonios.length > 0 && (
                <div className="mt-4">
                  <h5>Testimonios:</h5>
                  {item.testimonios.map((testimonio, index) => (
                    <div key={index} className="mb-2">
                      <p className="mb-0">
                        <strong>{testimonio.usuario}:</strong> {testimonio.comentario}{' '}
                        <span className="text-warning">({testimonio.calificacion}★)</span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-4">
                <button className="btn btn-primary btn-lg">
                  Agregar a Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
