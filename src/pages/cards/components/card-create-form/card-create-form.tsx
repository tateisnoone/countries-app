import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "./card-create-form.module.css";
type cardCreateProps = {
    onCardCreate: (cardFields: {
        name: string;
        nameGe: string;
        population: number;
        capital: string;
        capitalGe: string;
        image: string;
    }) => void;

    errMsg: string;
    initialValues?: {
        name: string;
        nameGe: string;
        population: number;
        capital: string;
        capitalGe: string;
        image: string;
    };
};

const CardCreateForm: React.FC<cardCreateProps> = ({
    onCardCreate,
    errMsg,
    initialValues,
}) => {
    const [nameErrMsg, setNameErrMsg] = useState("");
    const [capitalErrMsg, setCapitalErrMsg] = useState("");
    const [name, setName] = useState(initialValues?.name || "");
    const [nameGe, setGeName] = useState(initialValues?.nameGe || "");
    const [population, setPopulation] = useState(
        initialValues?.population.toString() || "",
    );
    const [capital, setCapital] = useState(initialValues?.capital || "");
    const [capitalGe, setGeCapital] = useState(initialValues?.capitalGe || "");
    const [image, setImage] = useState<string>(initialValues?.image || "");
    useEffect(() => {
        if (initialValues) {
            setName(initialValues.name);
            setGeName(initialValues.nameGe);
            setPopulation(initialValues.population.toString());
            setCapital(initialValues.capital);
            setGeCapital(initialValues.capitalGe);
            setImage(initialValues.image);
        }
    }, [initialValues]);

    const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const data = new FileReader();
            data.addEventListener("load", () => {
                setImage(data.result as string);
            });
            data.readAsDataURL(file);
        }
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (name.length < 2) {
            setNameErrMsg("Country name should contain more than 2 characters");
        } else setNameErrMsg("");
        setName(value);
    };
    const handleGeNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (nameGe.length < 2) {
            setNameErrMsg("Country name should contain more than 2 characters");
        } else setNameErrMsg("");
        setGeName(value);
    };
    const handlePopulationChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPopulation(value);
    };
    const handleCapitalChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (capital.length < 2) {
            setCapitalErrMsg("Capital should contain more than 2 characters");
        } else setCapitalErrMsg("");
        setCapital(value);
    };
    const handleCapitalGeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (capitalGe.length < 2) {
            setCapitalErrMsg("Capital should contain more than 2 characters");
        } else setCapitalErrMsg("");
        setGeCapital(value);
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCardCreate({
            name,
            nameGe,
            population: Number(population),
            capital,
            capitalGe,
            image,
        });
    };

    return (
        <div className={`${styles.cardCreateForm} ${styles.container}`}>
            <h1>{initialValues ? "Edit Country" : "Add Country"}</h1>
            <form className={styles.country_form} onSubmit={handleSubmit}>
                <div className={styles.langFields}>
                    <label htmlFor="name">Country:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="country name"
                        required
                    />
                    <label htmlFor="nameGe">Country (GE):</label>
                    <input
                        type="text"
                        id="nameGe"
                        name="nameGe"
                        value={nameGe}
                        onChange={handleGeNameChange}
                        placeholder="country name (GE)"
                        required
                    />
                </div>
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
                <div className={styles.langFields}>
                    <label htmlFor="capital">Capital:</label>
                    <input
                        type="text"
                        id="capital"
                        name="capital"
                        value={capital}
                        onChange={handleCapitalChange}
                        placeholder="capital"
                    />
                    <label htmlFor="capital">Capital (GE):</label>
                    <input
                        type="text"
                        id="capitalGe"
                        name="capitalGe"
                        value={capitalGe}
                        onChange={handleCapitalGeChange}
                        placeholder="capital (GE)"
                    />
                </div>
                <span style={{ color: "#c70039" }}>{capitalErrMsg}</span>
                <label htmlFor="file">Upload File:</label>
                <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleUpload}
                    accept=".png, .jpg, .jpeg"
                    required
                />
                <button className={styles.country_button}>Submit</button>
                <span style={{ color: "#c70039" }}>{errMsg}</span>
            </form>
        </div>
    );
};

export default CardCreateForm;
