import { Link, NavLink } from "react-router-dom";
import CartWidget from "../../components/cart-widget/CartWidget";

import "./navbar.scss";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Pet Store
                </Link>
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
                            <NavLink to ="/categoria/1"  className={({ isActive }) =>  isActive ? "active nav-link" : "nav-link" }>
                                Dogs
                            </NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink to ="/categoria/2"   className={({ isActive }) =>  isActive ? "active nav-link" : "nav-link" }>
                                Cats
                            </NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink to ="/categoria/3"   className={({ isActive }) =>  isActive ? "active nav-link" : "nav-link" }>
                                Fish
                            </NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink to ="/categoria/4"   className={({ isActive }) =>  isActive ? "active nav-link" : "nav-link" }>
                                Birds
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to ="/categoria/5"   className={({ isActive }) =>  isActive ? "active nav-link" : "nav-link" }>
                                Reptiles
                            </NavLink>
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
