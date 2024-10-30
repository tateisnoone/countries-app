import ContactForm from "../components/contact-form";
import Otp from "../components/otp/otp-code";

const ContactFormView = () => {
    return (
        <>
            <ContactForm />
            <Otp numberOfInputs={10} />
        </>
    );
};

export default ContactFormView;
