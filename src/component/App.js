import "./App.css";
import ContactList from "./contactlist";
import Header from "./header";
import AddContact from "./addcontact";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  let list = [];
  if (localStorage.getItem("contact") === null) {
    list = [];
  } else {
    list = JSON.parse(localStorage.getItem("contact"));
  }
  const onDelete = (contact) => {
    console.log("delete this contact", contact);
    setconlist(
      conlist.filter((e) => {
        return e.sno !== contact.sno;
      })
    );
  };

  const addContact = (contact) => {
    let ind = 1;

    if (conlist == null) {
      ind = 1;
    } else {
      ind = conlist[conlist.length - 1].sno + 1;
    }
    let newcontact = {
      sno: ind,
      name: contact.name,
      number: contact.number,
    };

    setconlist([...conlist, newcontact]);
  };
  const [conlist, setconlist] = useState(list);
  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(conlist));
  }, [conlist]);
  return (
    <>
      <Router>
        <Header />
        <AddContact addContact={addContact} />
        <ContactList conlist={conlist} onDelete={onDelete} />
      </Router>
    </>
  );
}

export default App;
