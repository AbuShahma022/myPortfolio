import { createContext, useState, useEffect } from "react";

export const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  });

  const addContact = (data) => {
    const newContact = { ...data, id: Date.now() };
    setContacts((prev) => [...prev, newContact]);
  };

  const removeContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  // ✅ Save to localStorage whenever contacts change
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <ContactContext.Provider value={{ contacts, addContact, removeContact }}>
      {children}
    </ContactContext.Provider>
  );
}
