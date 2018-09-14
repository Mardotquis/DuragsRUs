import React, { Component } from "react";
import ProductCard from "./ProductCard/ProductCard";
import ProductsJSON from "../../assets/JSON/ProductsJSON:";
// import FilterForm from "./FilterForm/FilterForm";
class Products extends Component {
  constructor() {
    super();
    this.state = {
      ProductsJSON,
      filteredProducts: []
    };
  }

  filterProduts = () => {
    let typeValue = document.querySelector(".typeSelection").value;
    let priceValue = document.querySelector(".priceSelection").value;
    let filterArr = this.state.ProductsJSON.products;

    filterArr.filter(type => type.productType === typeValue);

    let filter = this.state.ProductsJSON.products;
    if (typeValue) {
      filter = this.state.ProductsJSON.products.filter(
        type => type.productType === typeValue
      );
    }
    // if(priceValue){
    //   filter = this.state.ProductsJSON.products.filter(
    //     price =>
    //   )
    // }

    // let hello = this.state.ProductsJSON.products;
    // const durag = this.state.ProductsJSON.products.filter(
    //   word => word.price ===
    // );
    // console.log(durag);
    // let arr = [];
    // hello.map(hi => {
    //   arr.push(hi.price);
    // });
    // console.log("hi", arr);
    // let low = arr.sort((a, b) => a - b);
    // console.log("low", low);
    // let high = arr.sort((a, b) => b - a);
    // console.log("high", high);

    this.setState({
      filteredProducts: filter
    });
    console.log(this.state.filteredProducts);
  };

  render() {
    let newProducts = [];

    if (this.state.filteredProducts.length === 0) {
      newProducts = this.state.ProductsJSON.products;
    } else {
      newProducts = this.state.filteredProducts;
    }

    // console.log(jsonData);
    const jsonData = this.state.products;
    return (
      <div className="products">
        <h1 className="products__header">Products</h1>

        <div className="products__filter">
          <form className="products__form" onChange={this.filterProduts}>
            <select className="typeSelection" name="typeSelection">
              <option value="durags">Sort By:</option>
              <option value="durags">Durags</option>
              <option value="shorts">Shorts</option>
            </select>
          </form>

          <form className="products__form" onChange={this.filterProduts}>
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
