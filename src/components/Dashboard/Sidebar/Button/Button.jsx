import { useNavigate } from "react-router-dom";
import styles from "./button.module.scss";

const Button = ({ active, text, handleButtonClick, link }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${styles.Button} ${active ? styles.active : null}`}
      onClick={(e) => {
        handleButtonClick(text);
        e.preventDefault();
        navigate(`${link}`);
        console.log(link);
      }}
    >
      {text}
    </div>
  );
};
export default Button;
