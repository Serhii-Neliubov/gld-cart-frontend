import React from "react";
import { Link } from "react-router-dom";
import styles from "./SubPlansPage.module.scss";
import { SubPlansData } from "../../utils/SubPlansData";

export default function SubPlanList() {
  return (
    <div className={styles.blocks}>
      {SubPlansData.map((subPlan) => (
        <div
          style={
            subPlan.popular
              ? { backgroundColor: `${subPlan.color}` }
              : { backgroundColor: `` }
          }
          className={subPlan.popular ? `${styles["block_popular"]}` : ``}
        >
          <div
            style={{ border: `1px solid ${subPlan.color}` }}
            className={styles.block}
          >
            <div className={styles.block_img}>
              <img src={subPlan.img} alt="Icon" />
            </div>
            <h2 className={styles.block_title}>{subPlan.title}</h2>
            <p className={styles.block_text}>{subPlan.subtitle}</p>
            <span className={styles.block_price}>{subPlan.price}$/Month</span>
            <span className={styles.block_price_desc}>Per User Monthly</span>
            <div className={styles.block_advantages}>
              {subPlan.advantages.map((advantage) => (
                <div className={styles.block_advantage}>
                  <img
                    style={{ backgroundColor: `${subPlan.color}` }}
                    src="SubPlans/tick.svg"
                    alt="Icon"
                  />
                  <span>{advantage}</span>
                </div>
              ))}
            </div>
            <Link
              to="/payment"
              style={{ backgroundColor: `${subPlan.color}` }}
              className={styles.block_button}
            >
              Buy Now
            </Link>
            <div className={styles.reminder}>
              *Check Terms and Conditions Apply
            </div>
          </div>
          {subPlan.popular && <span className={styles.popular}>Popular</span>}
        </div>
      ))}
    </div>
  );
}
