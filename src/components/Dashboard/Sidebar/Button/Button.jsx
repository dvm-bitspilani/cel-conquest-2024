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
        if (link) {
          handleButtonClick(text);
          e.preventDefault();
          navigate(`${link}`);
        }
        else {
          window.open("https://www.conquest.org.in/process/", "_self");
        }
      }}
    >
      {text}
    </div>
  );
};
export default Button;
