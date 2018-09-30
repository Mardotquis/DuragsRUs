import React from 'react';
import { Route } from 'react-router-dom';
import auth0Client from '../Auth/Auth';
import ContactAdmin from '../components/ProductManager/ContactAdmin/ContactAdmin';

function SecuredRoute(props) {
    const { component: ProductManager, path } = props;
    return (
        <Route path={path} render={() => {
            if (!auth0Client.isAuthenticated()) {
                auth0Client.signIn();
                return <div></div>;
            }
            return (<div><ProductManager products={props.products} />
                <ContactAdmin /></div>
            )
        }} />
    );
}

export default SecuredRoute;