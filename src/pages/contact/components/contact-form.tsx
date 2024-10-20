import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./contact-form.module.css";
import { useParams } from "react-router-dom";

const ContactForm = () => {
  const { lang } = useParams<{ lang: "en" | "ge" }>();
  const selectedLang = lang || "en";

  const [nameErrMsg, setNameErrMsg] = useState("");
  const [surnameErrMsg, setSurnameErrMsg] = useState("");
  const [messageErrMsg, setMessageErrMsg] = useState("");
  const [formValidationErrMsg, setFormValidationErrMsg] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const content = {
    en: {
      name: "name:",
      namePlaceholder: "your name",
      surname: "Surname:",
      surnamePlaceholder: "your surname",
      email: "Email:",
      emailPlaceholder: "your email",
      message: "Message:",
      messagePlaceholder: "leave a message for us...",
      button: "Submit",
      messageValidation: "Message should include more than 2 characters",
      message_validation: "Message should contain less than 500 characters",
      nameValidation: "Name should contain more than 2 characters",
      surnameValidation: "Surname should contain more than 2 characters",
    },
    ge: {
      name: "სახელი:",
      namePlaceholder: "შენი სახელი",
      surname: "გვარი:",
      surnamePlaceholder: "შენი გვარი",
      email: "მეილი:",
      emailPlaceholder: "შენი მეილი",
      message: "მესიჯი:",
      messagePlaceholder: "დაგვიტოვე მესიჯი...",
      button: "გაგზავნა",
      messageValidation: "მესიჯი უნდა შეიცავდეს 2-ზე მეტ სიმბოლოს",
      message_validation: "მესიჯი უნდა შეიცავდე 500-ზე ნაკლებ სიმბოლოს",
      nameValidation: "სახელი უნდა შეიცავდეს 2-ზე მეტ სიმბოლოს",
      surnameValidation: "გვარი უნდა შეიცავდეს 2-ზე მეტ სიმბოლოს",
    },
  };

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
      return setFormValidationErrMsg(content[selectedLang].messageValidation);
    } else setFormValidationErrMsg("");
    if (message.length > 500) {
      return;
    }
    return console.log(userInfo);
  };
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (name.length < 2) {
      setNameErrMsg(content[selectedLang].nameValidation);
    } else setNameErrMsg("");
    setName(value);
  };
  const handleSurnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (surname.length < 2) {
      setSurnameErrMsg(content[selectedLang].nameValidation);
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
      setMessageErrMsg(content[selectedLang].messageValidation);
    } else setMessageErrMsg("");
    setMessage(value);
  };
  return (
    <div className={`${styles.contact_form} ${styles.container}`}>
      <h1>Contact</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.contact_fields}>
          <label htmlFor="name">{content[selectedLang].name}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder={content[selectedLang].namePlaceholder}
            required
          />
          <span style={{ color: "#c70039" }}>{nameErrMsg}</span>
        </div>

        <div className={styles.contact_fields}>
          <label htmlFor="surname">{content[selectedLang].surname}</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={surname}
            onChange={handleSurnameChange}
            placeholder={content[selectedLang].surnamePlaceholder}
            required
          />
          <span style={{ color: "#c70039" }}>{surnameErrMsg}</span>
        </div>

        <div className={styles.contact_fields}>
          <label htmlFor="email">{content[selectedLang].email}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder={content[selectedLang].emailPlaceholder}
            required
          />
        </div>

        <div className={styles.contact_text}>
          <label htmlFor="message">{content[selectedLang].message}</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            placeholder={content[selectedLang].messagePlaceholder}
            required
          />
          <span style={{ color: "#c70039" }}>{messageErrMsg}</span>
        </div>
        <button className={styles.contact_button} type="submit">
          {content[selectedLang].button}
        </button>
        <span style={{ color: "#c70039" }}>{formValidationErrMsg}</span>
      </form>
    </div>
  );
};

export default ContactForm;
