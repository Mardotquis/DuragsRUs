import React, { Component } from "react";
import ProductCard from "./ProductCard/ProductCard";
import ProductsJSON from "../../assets/JSON/ProductsJSON:";

class Products extends Component {
  constructor() {
    super();
    this.state = ProductsJSON;
  }
  //
  render() {
    // console.log(jsonData);
    const jsonData = this.state.products;
    return (
      <div className="products">
        <h1 className="products__header">Products</h1>
        <div className="product__cards">
          {jsonData.map(list => {
            return (
              <ProductCard
                key={list.title}
                title={list.title}
                imgSrc={list.productImages}
                price={list.price}
                handleQuanity={this.handleQuanity}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Products;
