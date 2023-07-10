import styles from "./Button.module.css";
const Button = ({ text, icon, isOutline, ...rest }) => {
  return (
    <button
      {...rest}
      className={isOutline ? styles.second_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
