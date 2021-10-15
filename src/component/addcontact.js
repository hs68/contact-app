import React, { useState } from "react";
export default function AddContact(props) {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!name || !number) {
      alert("name or number cannot be null");
    }
    let contact = {
      name: name,
      number: number,
    };
    props.addContact(contact)
  };
  return (
    <div className="container">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            id="name"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Phone number
          </label>
          <input
            type="text"
            value={number}
            onChange={(e) => {
              setnumber(e.target.value);
            }}
            id="number"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
