import React from "react";
import styles from "./BookSlots.module.scss";
import SlotInputField from "../SelectSlots/SlotInputField/SlotInputField";

function BookSlots() {
  return (
    <div className={styles.container}>
      <h2>BookSlots</h2>
      <SlotInputField></SlotInputField>
      <SlotInputField></SlotInputField>
      <SlotInputField></SlotInputField>
      <button>Confirm</button>
    </div>
  );
}

export default BookSlots;
