import { useState, useContext } from "react";
import axios from "axios";
import styles from "./InterestCaptureConsultant.module.scss";
import { WebContext } from "../../store/website-context.jsx";

export default function InterestCaptureConsultant({ data }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const body = data.name;
  const { displayMessage } = useContext(WebContext);

  const handleClick = () => {
    if (JSON.parse(localStorage.getItem("userData"))) {
      setIsDisabled(true);
      console.log(69, {
        name: data.name.name,
        type: "consultant",
      });
      axios
        .post(
          "https://portal.conquest.org.in/api/users/consultant-resource/interestcapture/",
          {
            name: data.name.name,
            type: "consultant",
          },
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).tokens.access
                }`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          displayMessage("success", "Interest Captured Successfully", 2);
        })
        .catch((err) => {
          console.log(err);
          setIsDisabled(false);
        });
    }
  };

  return (
    <a
      className={styles.interest}
      onClick={handleClick}
      style={{
        pointerEvents: isDisabled ? "none" : "auto",
        filter: isDisabled ? "grayscale(1)" : "none",
      }}
    >
      Interest Capture
    </a>
  );
}
