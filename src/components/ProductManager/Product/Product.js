import React from "react";
import Form from '../Form/Form';
// import EditForm from "../Form/EditForm";

const Product = (props) => {

  const toggleDelete = () => {
    let confirmationMessage = document.getElementById(`${props.productId}`);
    let overlay = document.querySelector(".formOverlay");
    confirmationMessage.style.display = ("block");
    overlay.style.display = ("block");
  };

  const editProductInformation = (e) => {
    e.preventDefault();
    const formId = Array.from(e.target.parentNode.parentNode.children).pop().id
    props.showFormModal(formId);
    // document.querySelector(".productForm").style.display = "flex";
  };

  const formatProductName = (productName) => {
    const randomNumber = Math.round(Math.random() * 100);
    const spaces = /\s/g;
    return `${productName.replace(spaces, "-").toLowerCase()}${randomNumber}`;
  }


  return (
    <section className="product__card_admin">

      <h2 className="product__title_admin ">{props.title}</h2>

      <div className="product__middle">
        <img src={props.imgSrc} className="product__img_admin" alt={props.description} />
        <p className="product__description_admin">{props.description}</p>

        <p className="product__price_admin">${props.price}</p>
      </div>
      <div className="product__controls_admin">
        <button className="product__edit_button" onClick={editProductInformation}>edit</button>
        <button className="product__delete_button" onClick={toggleDelete}>delete</button>
      </div>
      <div className="confirmationMessage" id={props.productId} >
        <p>Are you sure you would like to delete this product?</p>
        <button className="confirmationButton noDelete" onClick={() => props.deleteProduct("no", props.productId)}>no</button>
        <button className="confirmationButton yesDelete" onClick={() => props.deleteProduct("yes", props.productId)}>yes</button>
      </div>
      <Form
        title={props.title}
        description={props.description}
        id={formatProductName(props.title)}
        price={props.price}
        img={props.imgSrc}
        productType={props.productType}
        formAction={`http://localhost:8080/products/${props.productId}`}
        formMethod={"PUT"}
        productId={props.productId}
        type={'edit'}
      />
    </section>
  );
}


export default Product;
