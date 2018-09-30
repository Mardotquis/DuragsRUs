import React from 'react';

const ContactCardAdmin = (props) => {
    return (
        <div className="contact_card__admin">
            <time className="submitted__time">submitted at: </time>
            <div className="customer__info">
                <h2 className="customer__name">Customer's Name</h2>
                <a href="mailto: abc@example.com" className="customer__email">example.com</a>
                <a href="tel:7049999999" className="customer__phn">89322832829</a>
            </div>
            <p className="customer__message">Sint voluptate fugiat amet cillum id ad consequat sint exercitation proident est occaecat laboris. Reprehenderit laborum ipsum ipsum in.</p>

        </div>
    )

};

export default ContactCardAdmin;