import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductManagerHeader = () => {
    return (
        <ul className="products__header_admin">
            <li>
                <NavLink to="/admin" className="admin__header_links">products</NavLink></li>

            <li><NavLink to="/admin/contact-info" className="admin__header_links">contact</NavLink></li>

        </ul>
    )

}

export default ProductManagerHeader;