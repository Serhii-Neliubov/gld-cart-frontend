import React from "react";
import styles from "./RentingStage.module.scss";

type RentingStageProps = {
  coloredStage: number;
};

const routings = [
  { id: 1, stage: "Category" },
  { id: 2, stage: "Sub Category" },
  { id: 3, stage: "Information" },
  { id: 4, stage: "Photo & Video" },
  { id: 5, stage: "Specifications" },
  { id: 6, stage: "Publish" },
];

export default function RentingStage({ coloredStage }: RentingStageProps) {
  return (
    <div className={styles.routings}>
      {routings.map((routing) => {
        return (
          <div key={routing.id} className={styles.routing}>
            <div
              style={
                coloredStage >= routing.id
                  ? { backgroundColor: "#02A0A0" }
                  : { backgroundColor: "#D9D9D9" }
              }
              className={styles.number}
            >
              {routing.id}
            </div>
            <span>{routing.stage}</span>
          </div>
        );
      })}
    </div>
  );
}
