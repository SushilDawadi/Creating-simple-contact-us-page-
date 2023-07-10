import "./ContactHeader.module.css";
import styles from "./ContactHeader.module.css";
const ContactHeader = () => {
  return (
    <>
      <div className={`container ${styles.contactSection}`}>
        <h1>CONTACT US</h1>
        <p>
          We believe in maintaining open lines of communication with our valued
          customers, which is why we encourage you to contact us whenever you
          have any inquiries, feedback, or concerns. Our dedicated support team
          is here to assist you and provide prompt assistance with any questions
          or issues you may encounter.
        </p>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </>
  );
};

export default ContactHeader;
