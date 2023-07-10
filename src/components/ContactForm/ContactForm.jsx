import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { GiClick } from "react-icons/gi";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("Sushil");
  const [email, setEmail] = useState("Sushildawadi@gmail.com");
  const [text, setText] = useState("Just Practicing");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log("name", event.target[0].value);
    console.log("email", event.target[1].value);
    console.log("text", event.target[2].value);
  };
  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <div className={styles.top_button}>
          <Button icon={<LuPhoneCall fontSize="24px" />} text="VIA CALL" />
          <Button
            icon={<MdMessage fontSize="24px" />}
            text="VIA SUPPORT CHAT"
          />
        </div>
        <Button
          isOutline={true}
          icon={<AiOutlineMail fontSize="24px" />}
          text="VIA EMAIL FORM"
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="name">Email</label>
            <input type="email" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="name" rows="5" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button icon={<GiClick fontSize="24px" />} text="SUBMIT" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/image/contactt.png" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
