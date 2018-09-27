import React from 'react';
import { Route } from 'react-router-dom';
import auth0Client from '../Auth/Auth';

function SecuredRoute(props) {
    const { component: ProductManager, path } = props;
    return (
        <Route path={path} render={() => {
            if (!auth0Client.isAuthenticated()) {
                auth0Client.signIn();
                return <div></div>;
            }
            return <ProductManager products={props.products} />
        }} />
    );
}

export default SecuredRoute;