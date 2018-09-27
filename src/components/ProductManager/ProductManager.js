import React from "react";
import Product from "./Product/Product";
import Form from "./Form/Form";
const ProductManager = (props) => {

  // componentDidMount() {
  //   const url = "http://localhost:8080/products";
  //   fetch(url)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       this.setState({
  //         productsList: data
  //       });
  //     })
  //     .catch(error => {
  //       console.warn("ERROR");
  //       const errorHTML =
  //         "<h2>Sorry, an error has occured with fetching products...";
  //       document.querySelector(".errorHandler").innerHTML = errorHTML;
  //     });
  // }

  const showFormModal = (id) => {
    console.log("clicked")
    let backgroundOverlay = document.querySelector(".formOverlay");
    backgroundOverlay.style.display = ("block");


    let productForm = document.getElementById(`${id}`);
    productForm.style.display = ("flex");
    console.log(productForm)

    // else if (type === "editForm") {
    //   console.log("edit form");

    // }

    window.onclick = function (event) {
      if (event.target === backgroundOverlay) {
        productForm.style.display = ('none');

        backgroundOverlay.style.display = ("none");
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

  const deleteSingleProductHandler = (exucute, thisId) => {
    // let noBtn = document.querySelector(".noDelete");
    // let yesBtn = document.querySelector(".yesDelete");
    // let card = document.querySelector(".product__card_admin");
    // let delBtn = document.querySelector(".product__delete_button");
    let confirmationMessage = document.querySelector(".confirmationMessage");
    let backgroundOverlay = document.querySelector(".formOverlay");
    // card.classList = "product__card_admin deletedCard";
    if (exucute === 'yes') {
      let url = `http://localhost:8080/products/${thisId}`;
      fetch(url, {
        method: 'DELETE'
      });
      window.location.reload();
    }
    console.warn(`clicked `);
    window.onclick = function (event) {
      if (exucute === 'no' || event.target === backgroundOverlay) {
        confirmationMessage.style.display = "none";
        backgroundOverlay.style.display = "none";

      };
    }
  };



  return (
    <main className="products_manager_admin">
      <div className="products__header_admin">
        <h1 className="product_manager__title_admin">product admin</h1>
        <div className="product__manager_controls_admin">
          <button className="add__product-btn" onClick={() => showFormModal("newForm")}>add a product</button>

        </div>
      </div>
      <div className="formOverlay"></div>
      <Form formAction="http://localhost:8080/products" id={"newForm"} />
      <div className="products__list_item_admin">
        {props.products.map(quality => {
          return (
            <Product
              key={quality._id}
              title={quality.title}
              productId={quality._id}
              imgSrc={quality.productImages}
              price={quality.price}
              description={quality.description}
              deleteProduct={deleteSingleProductHandler}
              showFormModal={showFormModal}

            />

          );
        })}

      </div>

      <div className="errorHandler" />
    </main>
  );
}


export default ProductManager;
