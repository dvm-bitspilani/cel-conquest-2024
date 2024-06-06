import styles from "./button.module.scss";

const Button = ({ active, text, handleButtonClick }) => {
  return (
    <div
      className={`${styles.Button} ${active ? styles.active : null}`}
      onClick={() => {
        handleButtonClick(text);
      }}
    >
      {text}
    </div>
  );
};
export default Button;
