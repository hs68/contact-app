import React from "react";
import ContactCard from "./contactcard";
const ContactList = (props) => {
  return (
    <div className="container">
      {/* {props.conlist.length === 0
        ? "no contact list to display"
        : props.conlist.map((contact) => {
            return <ContactCard key={contact.sno} contact={contact} onDelete={props.onDelete} />;
          })} */}
    </div>
  );
};
export default ContactList;
