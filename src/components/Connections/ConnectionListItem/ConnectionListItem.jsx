import React from "react";
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

function ConnectionListItem({ img, type, name, designation, listTab, id }) {
  const handleAccept = (status, id) => {
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
          console.log(err);
        });
    } else {
      console.log("error in fetching data");
    }
  };

  return (
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
          <div
            className={styles.rejectBtn}
            onClick={() => handleDelete(Number(id))}
          >
            <span>Remove</span>
            <RejectSVG />
          </div>
        )}
      </div>
    </div>
  );
}

export default ConnectionListItem;
