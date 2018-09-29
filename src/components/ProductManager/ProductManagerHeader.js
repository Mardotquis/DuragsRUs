import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductManagerHeader = () => {
    return (
        <ul>
            <li><NavLink to="/admin" className="product_manager__title_admin">products</NavLink></li>
            <li><NavLink to="/admin/contact-info">contact info</NavLink></li>
        </ul>
    )

}

export default ProductManagerHeader;