import React from 'react';
import ContactCardAdmin from './ContactCardAdmin';

const ContactAdmin = (props) => {
    return (
        <main className="contact__admin">
            <h1 className="contact_header__admin">Contact Admin</h1>
            <section className="contact_cards__admin">
                <ContactCardAdmin />
                <ContactCardAdmin />
                <ContactCardAdmin />
            </section>
        </main>
    )

};

export default ContactAdmin;