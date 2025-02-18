import { FaShoppingCart } from "react-icons/fa";

import './cart-widget.scss';

const CartWidget = () => {
    return (
        <a className="nav-link cart-widget" href="#">
            <FaShoppingCart size={40} color="black" />
            <span className="widget__counter">0</span>
        </a>
    );
};

export default CartWidget;
