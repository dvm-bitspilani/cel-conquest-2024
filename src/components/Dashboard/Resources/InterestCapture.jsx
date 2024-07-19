import { useState } from "react";

import axios from "axios";

import styles from "./interest.module.scss";

export default function InterestCaptureBtn({ data }) {
  const [isInterestCapture, setIsInterestCapture] = useState(true);

  return (
    <a
      className={styles.interest}
      onClick={() => {
        if (isInterestCapture) {
          if (JSON.parse(localStorage.getItem("userData"))) {
            axios
              .post(
                "https://conquest-api.bits-dvm.org/api/users/consultant-resource/interestcapture/",
                {
                  name: data.company_name,
                  type: "resource",
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
              })
              .catch((err) => {
                console.log(err);
              });
          }
          setIsInterestCapture(false);
        } else {
          if (JSON.parse(localStorage.getItem("userData"))) {
            axios
              .post(
                "https://conquest-api.bits-dvm.org/api/forms/send-email",
                data,
                {
                  headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).tokens.access
                      }`,
                  },
                }
              )
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      }}
    >
      {isInterestCapture ? "Interest Capture" : "Send Details"}
    </a>
  );
}
