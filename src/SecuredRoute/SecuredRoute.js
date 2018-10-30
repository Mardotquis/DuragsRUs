// import React from 'react';
// import { Route } from 'react-router-dom';
// import auth0Client from '../Auth/Auth';
// // import ContactAdmin from '../components/ProductManager/ContactAdmin/ContactAdmin';

// function SecuredRoute(props) {
//     const { component: Component, path } = props;
//     // const { component: ContactAdmin, path } = props;
//     return (
//         <Route path={path} render={() => {
//             if (!auth0Client.isAuthenticated()) {
//                 auth0Client.signIn();
//                 return <div></div>;
//             }
//             return <Component contactsData={props.contactsData} products={props.products} />

//         }} />
//     );
// }

// export default SecuredRoute;