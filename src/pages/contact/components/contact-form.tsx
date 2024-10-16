import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./contact-form.module.css";

const ContactForm = () => {
  const [nameErrMsg, setNameErrMsg] = useState("");
  const [surnameErrMsg, setSurnameErrMsg] = useState("");
  const [messageErrMsg, setMessageErrMsg] = useState("");
  const [formValidationErrMsg, setFormValidationErrMsg] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userInfo = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      surname: (document.getElementById("surname") as HTMLInputElement).value,
      email: (document.getElementById("email") as HTMLInputElement).value,
      message: (document.getElementById("message") as HTMLTextAreaElement)
        .value,
    };
    if (name.length < 2) {
      return;
    }
    if (surname.length < 2) {
      return;
    }
    if (message.length < 2) {
      return setFormValidationErrMsg(
        "Message should include more than 2 characters"
      );
    } else setFormValidationErrMsg("");
    if (message.length > 500) {
      return;
    }
    return console.log(userInfo);
  };
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (name.length < 2) {
      setNameErrMsg("Name should contain more than 2 characters");
    } else setNameErrMsg("");
    setName(value);
  };
  const handleSurnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (surname.length < 2) {
      setSurnameErrMsg("Surname should contain more than 2 characters");
    } else setSurnameErrMsg("");
    setSurname(value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (message.length > 500) {
      setMessageErrMsg("Message should contain less than 500 characters");
    } else setMessageErrMsg("");
    setMessage(value);
  };
  return (
    <div className={`${styles.contact_form} ${styles.container}`}>
      <h1>Contact</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.contact_fields}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="your name"
            required
          />
          <span style={{ color: "#c70039" }}>{nameErrMsg}</span>
        </div>

        <div className={styles.contact_fields}>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={surname}
            onChange={handleSurnameChange}
            placeholder="your surname"
            required
          />
          <span style={{ color: "#c70039" }}>{surnameErrMsg}</span>
        </div>

        <div className={styles.contact_fields}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="your email"
            required
          />
        </div>

        <div className={styles.contact_text}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="leave a message for us..."
            required
          />
          <span style={{ color: "#c70039" }}>{messageErrMsg}</span>
        </div>
        <button className={styles.contact_button} type="submit">
          Submit
        </button>
        <span style={{ color: "#c70039" }}>{formValidationErrMsg}</span>
      </form>
    </div>
  );
};

export default ContactForm;
