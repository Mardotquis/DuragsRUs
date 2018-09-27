import React from "react";
import Form from '../Form/Form';
// import EditForm from "../Form/EditForm";


const Product = (props) => {
  const toggleState = () => {
    let confirmationMessage = document.querySelector(".confirmationMessage");
    let overlay = document.querySelector(".formOverlay");
    confirmationMessage.style.display = ("block");
    overlay.style.display = ("block")
  }

  const editProductInformation = (e) => {
    e.preventDefault();
    props.showFormModal(props.productId);
    // document.querySelector(".productForm").style.display = "flex";

  };


  return (
    <section className="product__card_admin">
      <div className="proudct__top_info_admin">
        <h2 className="product__title_admin">{props.title}</h2>
        <p className="product_id_admin">{props.productId}</p>
      </div>
      <div className="product__middle">
        <img src={props.imgSrc} className="product__img_admin" />
        <p className="product__description_admin">{props.description}</p>

        <p className="product__price_admin">${props.price}</p>
      </div>
      <div className="product__controls_admin">
        <button className="product__edit_button" onClick={editProductInformation}>edit</button>
        <button className="product__delete_button" onClick={toggleState} > delete</button>
      </div>
      <div className="confirmationMessage">
        <p>Are you sure you would like to delete this product?</p>
        <button className="confirmationButton noDelete" onClick={() => props.deleteProduct("no", props.productId)}>no</button>
        <button className="confirmationButton yesDelete" onClick={() => props.deleteProduct("yes", props.productId)}>yes</button>
        <Form
          title={props.title}
          description={props.description}
          id={props.productId}
        />
      </div>
    </section>
  );
}


export default Product;
