import React, { Component } from "react";
import Product from "./Product/Product";
import Form from "./Form/Form";
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

  showFormModal = () => {
    let addProductForm = document.querySelector(".productForm");
    let backgroundOverlay = document.querySelector(".formOverlay");
    addProductForm.style.display = " flex";
    backgroundOverlay.style.display = "block";

    window.onclick = function (event) {
      if (event.target === backgroundOverlay) {
        addProductForm.style.display = 'none';
        backgroundOverlay.style.display = "none";
      }
    };
  };

  // submitForm = (e) => {
  //   // e.preventDefault();
  //   // let title = document.querySelector("#productTitle").value;
  //   // let description = document.querySelector("#productDescription").value;
  //   // let price = document.querySelector("#productPrice").value;
  //   // let productType = document.querySelector("#productType").value;
  //   // let productImages = document.querySelector("#productImgSrc").value;



  // }
  deleteSingleProductHandler = (thisId) => {

    let confirmationMessage = document.querySelector(".confirmationMessage");
    let backgroundOverlay = document.querySelector(".formOverlay");
    let noBtn = document.querySelector(".noDelete").value;
    let yesBtn = document.querySelector(".yesDelete");

    confirmationMessage.style.display = "block";
    backgroundOverlay.style.display = "block";
    if (noBtn = "haha") {
      console.log('no haha')
      // return window.onclick = function (event) {
      //   if (event.target === backgroundOverlay) {
      //     confirmationMessage.style.display = 'none';
      //     backgroundOverlay.style.display = "none";
      //   }
      // };
    } else if (yesBtn) {
      console.log('yes pressed')
    }

    // let url = `http://localhost:8080/products/${thisId}`;
    // let card = document.querySelector(".product__card_admin");
    // let delBtn = document.querySelector(".product__delete_button");

    // // card.classList = "product__card_admin deletedCard";

    // delBtn.disabled = true;
    // card.style.display = 'none';
    // console.log(`clicked on ${this.props._id}`)
    // fetch(url, {
    //   method: 'DELETE'
    // })
    // // window.location.reload();
  }




  render() {
    return (
      <section className="products_manager_admin">
        <div className="products__header_admin">
          <h1 className="product_manager__title_admin">product admin</h1>
          <div className="product__manager_controls_admin">
            <button className="add__product-btn" onClick={this.showFormModal}>add a product</button>

          </div>
        </div>
        <div className="formOverlay"></div>
        <Form />
        <div className="products__list_item_admin">
          {this.state.productsList.map(quality => {
            return (
              <Product
                key={quality._id}
                title={quality.title}
                productId={quality._id}
                imgSrc={quality.productImages}
                price={quality.price}
                description={quality.description}
                deleteProduct={this.deleteSingleProductHandler}
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
