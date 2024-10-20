import { useParams } from "react-router-dom";
import styles from "./description.module.css";
const AboutDescription = () => {
  const { lang } = useParams<{ lang: "en" | "ge" }>();
  const selectedLang = lang || "en";
  const content = {
    en: {
      title: "About The 7",
      text: "The Seven are the pinnacle of superhero excellence, embodying strength,justice, and protection for the world. Each member is carefully selected and promoted as the ultimate defender of humanity, representing Vought's unwavering commitment to safety and security. They play a vital role in maintaining peace, supporting military efforts, and handling global crises. With their unparalleled powers and heroism, The Seven are the pride of Vought International, inspiring millions and reinforcing Vought's position as the leader in the superhero industry.",
    },
    ge: {
      title: "შვიდეულის შესახებ",
      text: "შვიდეული წარმოადგენს სუპერგმირების სრულყოფილების მწვერვალს, განასახიერებენ ძალას, სამართლიანობასა და მსოფლიო დაცვის იდეას. ყოველი წევრი შერჩეულია განსაკუთრებული სიფრთხილით და წარდგენილია როგორც კაცობრიობის საბოლოო დამცველი, რაც Vought-ის ურყევ ერთგულებას გამოხატავს უსაფრთხოებისა და სტაბილურობის მიმართ. ისინი მნიშვნელოვან როლს ასრულებენ მშვიდობის შენარჩუნებაში, სამხედრო ძალების მხარდაჭერაში და გლობალური კრიზისების მართვაში. თავიანთი განუმეორებელი ძალებითა და გმირობით, შვიდეული არის Vought International-ის სიამაყე, შთააგონებს მილიონებს და აძლიერებს Vought-ის ლიდერობას სუპერგმირების ინდუსტრიაში.",
    },
  };

  return (
    <div className={`${styles.about_seven} ${styles.container}`}>
      <h1>{content[selectedLang].title}</h1>
      <p>{content[selectedLang].text}</p>
    </div>
  );
};

export default AboutDescription;
