import { ChangeEvent, FC, KeyboardEvent, useRef, useState } from "react";
import styles from "./otp-code.module.css";

type OtpProps = {
    numberOfInputs: number;
};
const Otp: FC<OtpProps> = ({ numberOfInputs }) => {
    const [inputs, setInputs] = useState<string[]>(
        Array(numberOfInputs).fill(""),
    );
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;

        if (!/^\d$/.test(value) && value !== "") {
            return;
        }

        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);

        if (value && index < inputs.length - 1) {
            inputRefs.current[index + 1]?.focus();
        } else if (value && index === inputs.length - 1) {
            inputRefs.current[index]?.blur();
        }
    };

    const handleKeyDown = (
        e: KeyboardEvent<HTMLInputElement>,
        index: number,
    ) => {
        if (e.key === "Backspace" && inputs[index] === "") {
            if (index > 0) {
                const newInputs = [...inputs];
                newInputs[index - 1] = "";
                setInputs(newInputs);
                inputRefs.current[index - 1]?.focus();
            }
        }
    };
    const handlePaste = (
        e: React.ClipboardEvent<HTMLInputElement>,
        index: number,
    ) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text");
        const digits = pastedData.split("").filter((char) => /^\d$/.test(char));

        const newInputs = [...inputs];

        digits.forEach((digit, i) => {
            if (index + i < newInputs.length) {
                newInputs[index + i] = digit;
            }
        });

        setInputs(newInputs);
    };

    return (
        <div className={styles.otp_div}>
            OTP Code:
            {inputs.map((value, index) => (
                <input
                    ref={(element) => {
                        inputRefs.current[index] = element;
                    }}
                    key={index}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={(e) => handlePaste(e, index)}
                    value={value}
                    maxLength={1}
                    type="text"
                    pattern="\d*"
                    className={styles.otp_input}
                />
            ))}
        </div>
    );
};

export default Otp;
