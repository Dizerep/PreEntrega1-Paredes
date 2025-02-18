import CartWidget from "../../components/cart-widget/CartWidget";

import "./navbar.scss";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Pet Store
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Dogs
                            </a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Cats
                            </a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Fish
                            </a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Birds
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Reptiles
                            </a>
                        </li>
                        
                        <li className="nav-item cart-widget-container">
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
