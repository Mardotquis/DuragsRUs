import React from 'react';

const ContactCardAdmin = (props) => {
    const { customerName, customerEmail, customerPhoneNum, customerMessage, createdDate } = props
    return (
        <div className="contact_card__admin">
            <time className="submitted__time">submitted at:{createdDate.toString()} </time>
            <div className="customer__info">
                <h2 className="customer__name">{customerName}</h2>
                <a href={`mailto: ${customerEmail}`} className="customer__email">{customerEmail}</a>
                <a href={`tel: ${customerPhoneNum}`} className="customer__phn">{customerPhoneNum}</a>
            </div>
            <p className="customer__message">"{customerMessage}"</p>

        </div>
    )

};

export default ContactCardAdmin;