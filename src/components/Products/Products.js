import React from "react";
import ProductCard from "./ProductCard/ProductCard";
// import ProductsJSON from "../../assets/JSON/ProductsJSON";
// import axios from "axios";

const Products = (props) => {

  return (
    <div className="products">
      <h1 className="products__header_admin">Products</h1>

      <div className="products__filter">
        <form className="products__form" onChange={props.productsFilter}>
          <select className="typeSelection" name="typeSelection">
            <option value="default">Sort By:</option>
            <option value="durags">Durags</option>
            <option value="shorts">Shorts</option>
          </select>
        </form>

        <form className="products__form" onChange={props.productsFilter}>
          <select name="price" className="priceSelection">
            <option>Price</option>
            <option value="asc">Low to High</option>
            <option value="dec">High to Low</option>
          </select>
        </form>
      </div>
      <div className="product__cards">
        {props.products.map(list => {
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


export default Products;
