import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description,
            productImages: props.productImages,
            price: props.price,
            productType: props.productType
        }
    };
    handleFormInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }
    sendData = (e) => {
        // e.preventDefault();
        const { title, description, productImages, price, productType } = this.state
        let bodyBeingSent = { title, description, productImages, price, productType };
        console.log(`body being sent`, JSON.stringify(bodyBeingSent))
        let url = this.props.formAction
        fetch(url, {
            method: this.props.formMethod,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyBeingSent)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(e => console.log(e))

    };
    render() {


        return (

            <form className="newProduct" id={this.props.id} onSubmit={this.sendData} >

                <label htmlFor="productTitle" >product title</label>
                <input type="text" id="productTitle" name="title" placeholder={this.props.title} onChange={this.handleFormInput} value={this.state.title} />
                <label htmlFor="productDescription">product description</label>
                <textarea
                    type="text" id="productDescription" name="description" placeholder={this.props.description} cols="100" onChange={this.handleFormInput} value={this.state.description} />
                <label htmlFor="productImgSrc">product image source</label>
                <input type="text" id="productImgSrc" name="productImages" placeholder={this.props.img} onChange={this.handleFormInput} value={this.state.productImages} />


                <label htmlFor="productType">product type</label>
                <input type="text" id="productType" name="productType" placeholder={this.props.productType} onChange={this.handleFormInput} value={this.state.productType} />
                <label htmlFor="productPrice">product price</label>
                <input type="text" id="productPrice" name="price" placeholder={this.props.price} onChange={this.handleFormInput} value={this.state.price} />
                <button type="submit" className="submitButton">
                    {this.props.type ? "edit product" : "add product"}
                </button>
            </form>)
    }
}

export default Form;