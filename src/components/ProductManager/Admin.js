import React from 'react';
import ProductManagerHeader from "./ProductManagerHeader";
import ProductManager from "./Product/ProductManager";
import ContactAdmin from "./ContactAdmin/ContactAdmin";

const Admin = (props) => {
    return (
        <div>
            <ProductManagerHeader />
            <ProductManager />
            <ContactAdmin />
        </div>
    )

};
export default Admin