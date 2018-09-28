import React from 'react';
const Form = (props) => {
    // const editButton = document.querySelectorAll('[data-editing=true]')
    // // const productInfo = editButton.dataset.productInfo

    // console.log('editButton', editButton)
    // console.log('productInfo', productInfo)
    const sendData = (e) => {
        e.preventDefault();
        const bodyBeingSent = {
            title: document.querySelector("#productTitle").value,
            description: document.querySelector("#productDescription").value,
            productImages: document.querySelector("#productImgSrc").value,
            price: document.querySelector("#productPrice").value,
            productType: document.querySelector("#productType").value
        };
        // for (let xxx in bodyBeingSent) {
        //     if (bodyBeingSent[xxx] === " ") {
        //         return alert('redo form')

        //     }
        // }
        let url = props.formAction
        fetch(url, {
            method: props.formMethod,
            headers: {
                'Content-Type': 'application/json',
                // 'Content-ype': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: JSON.stringify(bodyBeingSent)
        })
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(e => console.log(e))

    };
    return (

        <form className="newProduct" id={props.id} onSubmit={sendData} required>

            <label htmlFor="productTitle" />
            <input type="text" id="productTitle" name="title" placeholder={props.title} />

            <label htmlFor="productDescription" />
            <textarea
                type="text"
                id="productDescription"
                name="description"

                placeholder={props.description}
                cols="100"
            />

            <label htmlFor="productImgSrc" />
            <input type="text" id="productImgSrc" name="productImages" placeholder={props.img} />

            <label htmlFor="productType" />
            <input type="text" id="productType" name="productType" placeholder={props.productType} />

            <label htmlFor="productPrice" />
            <input type="text" id="productPrice" name="price" placeholder={props.price} />


            <button type="submit" className="submitButton">
                submit
          </button>
        </form>)
}

export default Form;