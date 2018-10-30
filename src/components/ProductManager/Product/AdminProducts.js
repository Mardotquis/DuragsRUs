import React from "react";
import Form from '../Form/Form';

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
  };
  const formatProductName = (productName) => {
    const randomNumber = Math.round(Math.random() * 100);
    const spaces = /\s/g;
    return `${productName.replace(spaces, "-").toLowerCase()}${randomNumber}`;
  }
  return (
    <section className="product__card_admin">
    {console.log(props.productId)}
      <h2 className="product__title_admin ">{props.title}</h2>

      <div className="product__middle">
        <img src={props.productImages} className="product__img_admin" alt={props.description} />
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
        productImages={props.productImages}
        productType={props.productType}
        formAction={`https://duragsrus-220620.appspot.com/products/${props.productId}`}
        formMethod={"PUT"}
        productId={props.productId}
        type={'edit'}
      />
    </section>
  );
}
export default Product;
