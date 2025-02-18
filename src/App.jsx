
import { useState } from 'react';

import ItemListContainer from './components/item-list/ItemListContainer';
import Header from './layout/header/Header';

//importar bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//importar estilos
import './App.scss';

function App() {

    const [greeting, setGreeting] = useState('Bienvenidos a la tienda de mascotas');

    return (
        <>
            <Header />
            <ItemListContainer greeting={greeting} />
        </>
    );
}

export default App;
