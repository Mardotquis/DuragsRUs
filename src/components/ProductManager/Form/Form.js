import React from 'react';
const Form = (props) => {

    const sendData = (e) => {
        e.preventDefault();
        let bodyBeingSent = {
            title: document.getElementById("productTitle").value,
            description: document.getElementById("productDescription").value,
            productImages: document.getElementById("productImgSrc").value,
            price: document.getElementById("productPrice").value,
            productType: document.getElementById("productType").value
        };
        console.log(`body being sent`, JSON.stringify(bodyBeingSent))
        let url = props.formAction
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyBeingSent)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(e => console.log(e))

    };
    return (

        <form className="newProduct" id={props.id} onSubmit={sendData} >

            <label htmlFor="productTitle" >product title</label>
            <input type="text" id="productTitle" name="title" placeholder={props.title} />
            <label htmlFor="productDescription">product description</label>
            <textarea
                type="text" id="productDescription" name="description" placeholder={props.description} cols="100" />
            <label htmlFor="productImgSrc">product image source</label>
            <input type="text" id="productImgSrc" name="productImages" placeholder={props.img} />
            <label htmlFor="productType">product type</label>
            <input type="text" id="productType" name="productType" placeholder={props.productType} />
            <label htmlFor="productPrice">product price</label>
            <input type="text" id="productPrice" name="price" placeholder={props.price} />
            <button type="submit" className="submitButton">
                submit
          </button>
        </form>)
}

export default Form;