import { FormEvent } from "react";
import styles from "./card-create-form.module.css";
type cardCreateProps = {
  onCardCreate: (e: FormEvent<HTMLFormElement>) => void;
};
const CardCreateForm: React.FC<cardCreateProps> = ({ onCardCreate }) => {
  return (
    <div className={`${styles.cardCreateForm} ${styles.container}`}>
      <h1>Add Country</h1>
      <form className={styles.country_form} onSubmit={onCardCreate}>
        <label htmlFor="name">Country Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="country name"
          required
        />
        <label htmlFor="population">Population:</label>
        <input
          type="number"
          id="population"
          name="population"
          placeholder="population"
          required
        />
        <label htmlFor="capital">Capital:</label>
        <input
          type="text"
          id="capital"
          name="capital"
          placeholder="capital"
          required
        />
        <button className={styles.country_button}>Submit</button>
      </form>
    </div>
  );
};

export default CardCreateForm;
