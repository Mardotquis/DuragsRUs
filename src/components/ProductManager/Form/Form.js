import React from 'react';
const Form = (props) => {
    return (

        <form className="productForm" method="POST" action={props.formAction}>
            <h1>{props.haha}jfiosjoifjsoi</h1>
            <label htmlFor="productTitle" />
            <input type="text" id="productTitle" name="title" placeholder={props.haha} />

            <label htmlFor="productDescription" />
            <input
                type="text"
                id="productDescription"
                name="description"
                placeholder="product description"
            />

            <label htmlFor="productImgSrc" />
            <input type="text" id="productImgSrc" name="productImages" placeholder="product image source" />

            <label htmlFor="productType" />
            <input type="text" id="productType" name="productType" placeholder="product type" />

            <label htmlFor="productPrice" />
            <input type="text" id="productPrice" name="price" placeholder="product price" />


            <button type="submit" className="submitButton">
                submit
          </button>
        </form>)
}

export default Form;