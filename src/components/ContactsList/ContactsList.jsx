export default function ContactsList({ contacts }) {
  return contacts.map(contact => (
    <li key={contact.number}>
      {contact.name} : {contact.number}
    </li>
  ));
}
