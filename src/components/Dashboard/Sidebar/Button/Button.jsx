import styles from "./button.module.scss";

const Button = ({ active, text }) => {
  return (
    <div className={`${styles.Button} ${active ? styles.active : null}`}>
      {text}
    </div>
  );
};
export default Button;
