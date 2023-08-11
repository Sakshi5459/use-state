import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat contact={to} />
    </div>
  );
}

const Contacts = [
  { name: "Abhi", email: "abhi@mail.com" },
  { name: "Manisha", email: "manisha@mail.com" },
  { name: "Elvish", email: "elvish@mail.com" },
];
