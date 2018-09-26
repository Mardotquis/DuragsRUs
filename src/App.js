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
  constructor() {
    super();
    this.state = {
      ProductsJSON: [],
      filteredProducts: [],

    };
  }
  componentDidMount() {
    const url = 'http://localhost:8080/products';
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          ProductsJSON: data
        }, () => console.log(this.state.ProductsJSON)
        )
      })
      .catch((error) => {
        console.warn('ERROR')
        const errorHTML = "<h2>Sorry, an error has occured with fetching products...";
        document.querySelector('.errorHandler').innerHTML = errorHTML
      })
  };
  filterProducts = () => {
    let typeValue = document.querySelector(".typeSelection").value;
    let priceValue = document.querySelector(".priceSelection").value;
    let filterArr = this.state.ProductsJSON;

    if (typeValue !== "default") {
      filterArr = this.state.ProductsJSON.filter(
        type => type.productType === typeValue
      );
    }

    if (priceValue) {
      if (priceValue === "asc") {
        filterArr.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (priceValue === "dec") {
        filterArr.sort((a, b) => {
          return b.price - a.price;
        });
      }
    }

    this.setState({
      filteredProducts: filterArr
    });
  };
  render() {
    let newProducts = [];

    if (this.state.filteredProducts.length === 0) {
      newProducts = this.state.ProductsJSON;
    } else {
      newProducts = this.state.filteredProducts;
    }

    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Index} exact />

            <Route path="/products" render={() => (
              <Products products={newProducts} productsFilter={this.filterProducts} />
            )} />

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
