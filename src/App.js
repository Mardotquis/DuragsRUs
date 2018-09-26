import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./components/Index/Index";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductManager from "./components/ProductManager/ProductManager";
import Error from "./components/Error/Error";
import "./assets/css/App.css";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Index} exact />

            <Route path="/products" component={Products} />

            <Route path="/contact" component={Contact} />

            <Route path="/admin" component={ProductManager} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
