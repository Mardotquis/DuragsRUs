import React, { Component } from "react";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quanity: 0
    };
  }
  render() {
    const handleQuanity = action => {
      if (action === "+") {
        this.setState({
          quanity: this.state.quanity + 1
        });
      } else if (action === "-" && this.state.quanity > 0) {
        this.setState({
          quanity: this.state.quanity - 1
        });
      }
    };
    return (
      <div className="product__card">
        <h2 className="product__card__title">{this.props.title}</h2>
        <div className={this.props.price < 30 ? "itemOnSale" : false} />
        <img
          src={this.props.imgSrc}
          className="product__img"
          alt={this.props.description}
        />
        <p className="product__card_price">${this.props.price}</p>
        <p className="product__card_quanity">Qty: {this.state.quanity}</p>
        <div className="product__controls">
          <div className="product__btns">
            <button className="product__btns" onClick={() => { handleQuanity("+"); }}> + </button>
            <button className="product__btns" onClick={() => { handleQuanity("-"); }}> - </button>
          </div>
          <button className={this.state.quanity > 0 ? "product__card-addToCart-btn" : "product__card_cart-btn"} > Add to cart </button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
