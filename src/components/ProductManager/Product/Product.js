import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="product__card_admin">
        <div className="proudct__top_info_admin">
          <h2 className="product__title_admin">{this.props.title}</h2>
          <p className="product_id_admin">{this.props.productId}</p>
        </div>
        <div className="product__middle">
          <img src={this.props.imgSrc} className="product__img_admin" />
          <p className="product__description_admin">{this.props.description}</p>

          <p className="product__price_admin">${this.props.price}</p>
        </div>
        <div className="product__controls_admin">
          <button className="product__edit_button">edit</button>
          <button className="product__delete_button" onClick={() => this.props.deleteProduct(this.props.productId)}>delete</button>
        </div>
        <div className="confirmationMessage">
          <p>Are you sure you would like to delete this product?</p>
          <button className="confirmationButton noDelete" >no</button>
          <button className="confirmationButton yesDelete">yes</button>
        </div>
      </section>
    );
  }
}

export default Product;
