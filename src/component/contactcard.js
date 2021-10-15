import React from "react";

export default function ContactCard({contact,onDelete}) {
    return (
        <>
            <div>
            <p>Name-{contact.name}</p>
            <p>Phone-{contact.number}</p>
            <button className="btn btn-sm btn-danger" onClick={() => {
                onDelete(contact)
                }}>Delete</button>
            </div>
            </>
    );
}