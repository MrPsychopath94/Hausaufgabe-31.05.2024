import React from "react";
import { useState } from "react";

export default function UserForm({ onUserAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onUserAdd({ name, email });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputName">Name</label>
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            id="inputName"
            placeholder="Name eingeben"
          ></input>
        </div>
        <div>
          <label htmlFor="inputEmail">Email</label>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            id="inputEmail"
            placeholder="E-Mail eingeben"
          ></input>
        </div>
        <button type="submit">Hinzufügen</button>
      </form>
    </div>
  );
}
