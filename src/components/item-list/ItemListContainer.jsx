import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from '../item-card/ItemCard';
import './items-list-container.scss';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        getAllItems();
    }, []);

    useEffect(() => {
        if (id) {
            filterItemsByCategory(id);
        } else {
            setFilteredProducts(products);
        }
    }, [id, products]);

    const getAllItems = async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Retraso de 1 segundo
            const response = await fetch('/data.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data.productos || []);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const filterItemsByCategory = (categoryId) => {
        const filtered = products.filter(product => product.categoria === categoryId);
        setFilteredProducts(filtered);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            <div className="item-list">
                {filteredProducts && filteredProducts.length > 0 ? (
                    filteredProducts.map(item => (
                        <div key={item.id}>
                            <ItemCard item={item} />
                        </div>
                    ))
                ) : (
                    <div>No products available</div>
                )}
            </div>
        </div>
    );
};

export default ItemListContainer;