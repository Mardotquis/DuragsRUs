import React, { Component } from "react";
import Product from "./Product/Product";

class ProductManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: []
    };
  }
  componentDidMount() {
    const url = "http://localhost:8080/products";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          productsList: data
        });
        console.log(data);
      })
      .catch(error => {
        console.warn("ERROR");
        const errorHTML =
          "<h2>Sorry, an error has occured with fetching products...";
        document.querySelector(".errorHandler").innerHTML = errorHTML;
      });
  }

  showFormModal() {

  }
  render() {
    return (
      <section className="products_manager_admin">
        <div className="products__header_admin">
          <h1 className="product_manager__title_admin">product admin</h1>
          <div className="product__manager_controls_admin">
            <button className="add__product-btn">add a product</button>

          </div>
        </div>
        <form className="productForm" >
          <label for="productTitle" />
          <input type="text" id="productTitle" name="productTitle" placeholder="product title" />

          <label for="productDescription" />
          <input
            type="text"
            id="productDescription"
            name="productDescription"
            placeholder="product description"
          />

          <label for="productImgSrc" />
          <input type="text" id="productImgSrc" name="productImgSrc" placeholder="product image source" />

          <label for="productType" />
          <input type="text" id="productType" name="productType" placeholder="product type" />

          <label for="productPrice" />
          <input type="text" id="productPrice" name="productPrice" placeholder="product price" />


          <button type="submit" className="submitButton">
            submit
          </button>
        </form>
        <div className="products__list_item_admin">
          {this.state.productsList.map(quality => {
            return (
              <Product
                title={quality.title}
                productId={quality._id}
                imgSrc={quality.productImages}
                price={quality.price}
                //   handleQuanity={this.handleQuanity}
                description={quality.description}
              />
            );
          })}
        </div>

        <div className="errorHandler" />
      </section>
    );
  }
}

export default ProductManager;
