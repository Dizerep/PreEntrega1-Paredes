
import { 
    BrowserRouter as Router,
    Routes,
    Route
 } from 'react-router-dom'
import { useState } from 'react';

import ItemListContainer from './components/item-list/ItemListContainer';
import Header from './layout/header/Header';

//importar bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//importar estilos
import './App.scss';
import ItemDetailContainer from './components/item-detail/ItemDetailContainer';
import Footer from './layout/footer/Footer';

function App() {

    const [greeting, setGreeting] = useState('Bienvenidos a PETSTORE');

    return (
        <Router>
            <div className="main_container_app">
                
                <div className="container_app">
                    <Header />
                    <Routes>
                        <Route path='/' element={<ItemListContainer greeting={greeting} />} />
                        <Route path='/categoria/:id' element={<ItemListContainer greeting={greeting} />} />
                        <Route path='/item/:id' element={<ItemDetailContainer />} />
                    </Routes>
                    
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
