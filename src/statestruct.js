import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");

  const fullName = firstName + " " + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>lets get you in</h2>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued as: <b>{fullName}</b>
      </p>
    </>
  );
}
