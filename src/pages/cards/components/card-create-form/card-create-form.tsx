import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./card-create-form.module.css";
type cardCreateProps = {
  onCardCreate: (cardFields: {
    name: string;
    population: number;
    capital: string;
  }) => void;
  errMsg: string;
};
const CardCreateForm: React.FC<cardCreateProps> = ({
  onCardCreate,
  errMsg,
}) => {
  const [nameErrMsg, setNameErrMsg] = useState("");
  const [capitalErrMsg, setCapitalErrMsg] = useState("");
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [capital, setCapital] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (name.length < 2) {
      setNameErrMsg("Country name should containt more than 2 characters");
    } else setNameErrMsg("");
    setName(value);
  };
  const handlePopulationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPopulation(value);
  };
  const handleCapitalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (capital.length < 2) {
      setCapitalErrMsg("Capital should containt more than 2 characters");
    } else setCapitalErrMsg("");
    setCapital(value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCardCreate({ name, population, capital });
  };
  return (
    <div className={`${styles.cardCreateForm} ${styles.container}`}>
      <h1>Add Country</h1>
      <form className={styles.country_form} onSubmit={handleSubmit}>
        <label htmlFor="name">Country Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="country name"
          required
        />
        <span style={{ color: "#c70039" }}>{nameErrMsg}</span>
        <label htmlFor="population">Population:</label>
        <input
          type="number"
          id="population"
          name="population"
          value={population}
          onChange={handlePopulationChange}
          placeholder="population"
        />
        <label htmlFor="capital">Capital:</label>
        <input
          type="text"
          id="capital"
          name="capital"
          value={capital}
          onChange={handleCapitalChange}
          placeholder="capital"
        />
        <span style={{ color: "#c70039" }}>{capitalErrMsg}</span>
        <button className={styles.country_button}>Submit</button>
        <span style={{ color: "#c70039" }}>{errMsg}</span>
      </form>
    </div>
  );
};

export default CardCreateForm;
