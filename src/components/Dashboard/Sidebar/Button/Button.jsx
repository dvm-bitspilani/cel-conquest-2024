import { useLocation, useNavigate } from "react-router-dom";
import styles from "./button.module.scss";

const Button = ({ active, text, handleButtonClick, link }) => {
  const location = useLocation();
  const navigate = useNavigate();
  active = location.pathname === link;
  
  const handleClick = (e) => {
    e.preventDefault();
    handleButtonClick(text);
    
    if (text === "Investment Partners") {
      window.open("https://www.conquest.org.in/partners", "_self");
    } else if (link) {
      navigate(link);
    } else {
      window.open("https://www.conquest.org.in/process/", "_self");
    }
  };

  return (
    <div
      className={`${styles.Button} ${active ? styles.active : null}`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default Button;
