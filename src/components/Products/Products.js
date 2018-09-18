import React, { Component } from "react";
import ProductCard from "./ProductCard/ProductCard";
import ProductsJSON from "../../assets/JSON/ProductsJSON:";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      ProductsJSON,
      filteredProducts: []
    };
  }

  filterProducts = () => {
    let typeValue = document.querySelector(".typeSelection").value;
    let priceValue = document.querySelector(".priceSelection").value;
    let filterArr = this.state.ProductsJSON.products;

    if (typeValue !== "default") {
      filterArr = this.state.ProductsJSON.products.filter(
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
      newProducts = this.state.ProductsJSON.products;
    } else {
      newProducts = this.state.filteredProducts;
    }

    return (
      <div className="products">
        <h1 className="products__header">Products</h1>

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
                handleQuanity={this.handleQuanity}
                description={list.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Products;
