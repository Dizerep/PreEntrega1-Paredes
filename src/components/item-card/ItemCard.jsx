import { Link } from 'react-router-dom';
import './ItemCard.css';

const ItemCard = ({ item }) => {
  return (
    <div className='item_card_container'>
      <div className='item_card'>
        <img src={item.imagen_url} alt={item.nombre} className='item_card_img' />
        <div className='item_card_footer'>
          <span>{item.nombre}</span>
          <span>${item.precio}</span>
          <Link to={`/item/${item.id}`}>Ver detalle</Link>
        </div>
        <div className='item_card_action'>
            <button className=''>Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;