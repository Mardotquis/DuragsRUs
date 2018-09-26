import React, { Component } from "react";
import ProductCard from "./ProductCard/ProductCard";
// import ProductsJSON from "../../assets/JSON/ProductsJSON";
// import axios from "axios";

class Products extends Component {
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
        })
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
      <div className="products">
        <h1 className="products__header_admin">Products</h1>

        <div className="products__filter">
          <form className="products__form" onChange={this.filterProducts}>
            <select className="typeSelection" name="typeSelection">
              <option value="default">Sort By:</option>
              <option value="durags">Durags</option>
              <option value="shorts">Shorts</option>
            </select>
          </form>

          <form className="products__form" onChange={this.filterProducts}>
            <select name="price" className="priceSelection">
              <option>Price</option>
              <option value="asc">Low to High</option>
              <option value="dec">High to Low</option>
            </select>
          </form>
        </div>
        <div className="product__cards">
          {newProducts.map(list => {
            return (
              <ProductCard
                key={list.title}
                title={list.title}
                imgSrc={list.productImages}
                price={list.price}
                // handleQuanity={this.handleQuanity}
                description={list.description}
              />
            );
          })}
        </div>
        <div className="errorHandler"></div>
      </div>
    );
  }
}

export default Products;
