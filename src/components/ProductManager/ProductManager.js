import React from "react";
import Product from "./Product/Product";
import Form from "./Form/Form";
const ProductManager = (props) => {
  console.log(props)
  // const toggleModal = () => {
  //   let modal = document.querySelector(".formOverlay");
  //   if (modal.style.display === "none" || modal.style.display === " ") {
  //     modal.style.display = "block"
  //   } else {
  //     modal.style.display = "none"
  //   }
  // };

  const showFormModal = (id) => {
    console.log("clicked")
    let backgroundOverlay = document.querySelector(".formOverlay");
    let productForm = document.getElementById(`${id}`);
    // let ethan = document.querySelector('.confirmationMessage');
    backgroundOverlay.style.display = ("block");
    console.log(productForm, id);
    productForm.style.display = "flex";

    // ethan.style.display = "block";

    // else if (type === "editForm") {
    //   console.log("edit form");

    // }

    window.onclick = function (event) {
      if (event.target === backgroundOverlay) {
        productForm.style.display = "none";
        backgroundOverlay.style.display = ("none");
      }
    };
    // const overlayy = Array.from(document.getElementsByClassName('formOverlay'))[0]
    // overlayy.style.display = "block"

    // const form = Array.from(document.getElementsByClassName("newProduct"))[0]
    // form.classList.add('flex')
  };



  const deleteSingleProductHandler = (execute, thisId) => {

    let deleteMessage = document.getElementById(`${thisId}`);
    // let backgroundOverlay = document.querySelector(".confirmationMessage");
    let overlay = document.querySelector(".formOverlay");
    console.warn(`clicked`);
    // confirmationMessage.style.display = ("block");
    overlay.style.display = ("block");

    if (execute === 'yes') {
      let url = `http://localhost:8080/products/${thisId}`;
      fetch(url, {
        method: 'DELETE'
      });
      window.location.reload();
    } else if (execute === 'no') {
      deleteMessage.style.display = "none";
      // backgroundOverlay.style.display = "none";

      overlay.style.display = ("none");

    }

    // window.onclick = function (event) {
    //   if (event.target === backgroundOverlay) {
    //     deleteMessage.style.display = "none";
    //     // backgroundOverlay.style.display = ("none");
    //   }
    // };
  };



  return (
    <main className="products_manager_admin">
      <div className="products__header_admin">
        <h1 className="product_manager__title_admin">product admin</h1>
        <div className="product__manager_controls_admin">
          <button className="add__product-btn" onClick={() => showFormModal("newForm")}>add a product</button>

        </div>
      </div>
      <div className="formOverlay" ></div>
      {/* <Form formAction="http://localhost:8080/products" id={"newForm"} formMethod="POST" /> */}
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
              productType={props.productType}
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
