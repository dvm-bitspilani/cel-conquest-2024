import React, { useState } from "react";
import * as styles from "./ConnectionListItem.module.scss";
import axios from "axios";

const AcceptSVG = () => {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6663 1L5.49967 10.1667L1.33301 6"
        stroke="#00C408"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const RejectSVG = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 5L5 15"
        stroke="#EC2C2C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 5L15 15"
        stroke="#EC2C2C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const DeleteSVG = () => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16.25V14.75C12 13.9544 11.6839 13.1913 11.1213 12.6287C10.5587 12.0661 9.79565 11.75 9 11.75H3.75C2.95435 11.75 2.19129 12.0661 1.62868 12.6287C1.06607 13.1913 0.75 13.9544 0.75 14.75V16.25"
        stroke="#EC2C2C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.375 8.75C8.03185 8.75 9.375 7.40685 9.375 5.75C9.375 4.09315 8.03185 2.75 6.375 2.75C4.71815 2.75 3.375 4.09315 3.375 5.75C3.375 7.40685 4.71815 8.75 6.375 8.75Z"
        stroke="#EC2C2C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 6.5L17.25 10.25"
        stroke="#EC2C2C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.25 6.5L13.5 10.25"
        stroke="#EC2C2C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

function ConnectionListItem({ img, type, name, designation, listTab, id }) {
  const [deleted, setDeleted] = useState(false);
  const handleAccept = (status, id) => {
    setDeleted(true);
    if (JSON.parse(localStorage.getItem("userData")).tokens) {
      // console.log("fetching data");
      axios
        .post(
          "https://conquest-api.bits-dvm.org/api/users/connections/accept/",
          {
            status: status,
            id: id,
          },
          {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("userData")).tokens.access
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
    } else {
      console.log("error in fetching data");
    }
  };
  const handleDelete = (id) => {
    setDeleted(true);
    if (JSON.parse(localStorage.getItem("userData")).tokens) {
      // console.log("fetching data");
      axios
        .post(
          "https://conquest-api.bits-dvm.org/api/users/connections/delete/",
          {
            id: id,
          },
          {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("userData")).tokens.access
              }`,
            },
          }
        )
        .catch((err) => {
          // console.log(id);
          console.log(err);
        });
    } else {
      console.log("error in fetching data");
    }
  };

  return deleted ? (
    ""
  ) : (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <div
          className={styles.cardImg}
          style={{ backgroundImage: `url(${img})` }}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.typeOfAcc}>{type ?? "Startup"}</div>
        <div className={styles.profileName}>{name ?? "Example Name"}</div>
        <div className={styles.designation}>
          {designation ?? "Studies at BITS Pilani"}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        {listTab === "pending" ? (
          <>
            <div
              className={styles.acceptBtn}
              onClick={() => handleAccept(true, +id)}
            >
              <span>Accept</span>
              <AcceptSVG />
            </div>
            <div
              className={styles.rejectBtn}
              onClick={() => handleAccept(false, +id)}
            >
              <span>Reject</span>
              <RejectSVG />
            </div>
          </>
        ) : (
          <div className={styles.rejectBtn} onClick={() => handleDelete(id)}>
            <span>Remove</span>
            <DeleteSVG />
          </div>
        )}
      </div>
    </div>
  );
}

export default ConnectionListItem;
