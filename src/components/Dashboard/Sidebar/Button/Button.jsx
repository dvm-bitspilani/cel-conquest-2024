import { useLocation, useNavigate } from "react-router-dom";
import styles from "./button.module.scss";

const Button = ({ active, text, handleButtonClick, link }) => {
  const location = useLocation();
  const navigate = useNavigate();
  active = location.pathname === link;
  return (
    <div
      className={`${styles.Button} ${active ? styles.active : null}`}
      onClick={(e) => {
        handleButtonClick(text);
        e.preventDefault();
        navigate(`${link}`);
      }}
    >
      {text}
    </div>
  );
};
export default Button;
