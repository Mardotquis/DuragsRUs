import React from 'react';
import ContactCardAdmin from './ContactCardAdmin';

const ContactAdmin = (props) => {
    return (
        <main className="contact__admin">
            <h1 className="admin__header contact_admin_header">Contact Admin</h1>
            <section className="contact_cards__admin">
                {props.contactsData.map(data => {
                    return (
                        <ContactCardAdmin
                            key={data._id}
                            customerName={data.customerName}
                            customerEmail={data.customerEmail}
                            customerPhoneNum={data.customerPhoneNum}
                            customerMessage={data.customerMessage}
                            createdDate={data.createdDate.toString()}
                        />
                    );
                })}
            </section>
        </main>
    )

};

export default ContactAdmin;