import { useState } from "react";

export default function Chat({ Contact }) {
  const [text, setText] = useState("");
  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={"Chat to " + Contact.name}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button>
        <b>Send to {Contact.email}</b>
      </button>
    </section>
  );
}
