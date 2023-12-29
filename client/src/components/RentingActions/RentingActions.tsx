import React from "react";
import styles from "./RentingActions.module.scss";
import { Link } from "react-router-dom";

type RentingActionsProps = {
  nextPageLink: string;
  setFormData: () => void;
};

export default function RentingActions({
  nextPageLink,
  setFormData,
}: RentingActionsProps) {
  return (
    <div className={styles.actions}>
      <Link
        to="/"
        style={{
          border: "1px solid gray",
          color: "gray",
          padding: "20px 50px",
        }}
      >
        Cancel
      </Link>
      <Link to={nextPageLink}>
        <button
          onClick={setFormData}
          style={{
            border: "1px solid blue",
            backgroundColor: "blue",
            color: "white",
            padding: "20px 50px",
          }}
        >
          Next
        </button>
      </Link>
    </div>
  );
}
