import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./components/Index/Index";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductManager from "./components/ProductManager/Product/ProductManager";
import ContactAdmin from "./components/ProductManager/ContactAdmin/ContactAdmin";
import Error from "./components/Error/Error";
import "./assets/css/App.css";
import Callback from "./Callback";
import SecuredRoute from "./SecuredRoute/SecuredRoute";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ProductsJSON: [],
      filteredProducts: [],
      contactsData: [],
      loading: true,
    };
  }
   componentDidMount() {
    const productsFetchUrl = 'https://duragsrus-220620.appspot.com/products';
     fetch(productsFetchUrl)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          ProductsJSON: data,
          loading: false
        }

        )

      })
      .catch(() => {
        console.warn('ERROR')
        this.setState({ loading: false });
      });
    const contactFetchUrl = "https://duragsrus-220620.appspot.com/contact/data";
     fetch(contactFetchUrl)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          contactsData: data,
        }
        )
      })
      .catch(e => console.log(e));


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
    if (this.state.loading) {
      return null;
    }
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
            <Route exact path='/callback' component={Callback} />
            <SecuredRoute exact path="/admin" component={ProductManager} products={this.state.ProductsJSON} />
            <SecuredRoute exact path="/admin/contact-info" component={ContactAdmin} contactsData={this.state.contactsData} />
            <Route component={Error} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
