export default function ContactList({ selectedContact, Contacts, onSelect }) {
  return (
    <section className="contact-list">
      <ul>
        {Contacts.map((Contact) => (
          <li key={Contact.email}>
            <button
              onClick={() => {
                onSelect(Contact);
              }}
            >
              {Contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
