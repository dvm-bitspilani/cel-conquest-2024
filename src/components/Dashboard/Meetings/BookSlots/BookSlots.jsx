import React from "react";
import styles from "./BookSlots.module.scss";
import BookSlotItem from "./BookSlotItem/BookSlotItem";

function BookSlots() {
  return (
    <div className={styles.container}>
      <h2>BookSlots</h2>
      <BookSlotItem></BookSlotItem>
      <BookSlotItem></BookSlotItem>
      <BookSlotItem></BookSlotItem>
      <button>Confirm</button>
    </div>
  );
}

export default BookSlots;
