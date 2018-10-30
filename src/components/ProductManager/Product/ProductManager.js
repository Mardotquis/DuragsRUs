import React from "react";
import AdminProducts from "./AdminProducts";
import Form from "../Form/Form";
const ProductManager = (props) => {

  const showFormModal = (id) => {
    console.log("clicked")
    let backgroundOverlay = document.querySelector(".formOverlay");
    let productForm = document.getElementById(`${id}`);
    backgroundOverlay.style.display = ("block");
    productForm.style.display = "flex";
    window.onclick = function (event) {
      if (event.target === backgroundOverlay) {
        productForm.style.display = "none";
        backgroundOverlay.style.display = ("none");
      };
    };
  };

  const deleteSingleProductHandler = (execute, thisId) => {
    let deleteMessage = document.getElementById(`${thisId}`);
    let overlay = document.querySelector(".formOverlay");
    console.warn(`clicked`);
    overlay.style.display = ("block");
    if (execute === 'yes') {
      let url = `https://duragsrus-220620.appspot.com/products/${parseInt(thisId)}`;
      fetch(url, {
        method: 'DELETE'
      });
      // window.location.reload();
    } else if (execute === 'no') {
      deleteMessage.style.display = "none";
      overlay.style.display = ("none");

    };
  };
  return (
    <main className="products_manager_admin">
      <h1 className="admin__header">Product Admin</h1>
      <div className="product__manager_controls_admin">
        <div className="add__product-btn" onClick={() => showFormModal("newForm")}></div>
      </div>
      <div className="formOverlay"></div>
      <Form formAction="https://duragsrus-220620.appspot.com/products" id={"newForm"} formMethod="POST" />
      <div className="products__list_item_admin">
        {props.products.map(quality => {
          return (
            <AdminProducts
              key={quality.productId}
              title={quality.title}
              productId={quality.productId}
              productImages={quality.productImages}
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
