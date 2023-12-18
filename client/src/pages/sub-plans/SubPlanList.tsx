import React from "react";
import styles from "./SubPlansPage.module.scss";
import { SubPlansData } from "../../utils/SubPlansData";
import { useSelector } from "react-redux";
import { userDataSelector } from "../../redux/Slices/userDataSlice";
import AuthService from "../../services/AuthService";

export default function SubPlanList() {
  const user = useSelector(userDataSelector);
  async function toPaymentHandler(lookup_key: string) {
    try {
      const response = await AuthService.paymentRedirect(user.id, lookup_key);
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  }

  return (
    <div className={styles.blocks}>
      {SubPlansData.map((subPlan, index) => (
        <div
          key={index}
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
                <div key={advantage} className={styles.block_advantage}>
                  <img
                    style={{ backgroundColor: `${subPlan.color}` }}
                    src="SubPlans/tick.svg"
                    alt="Icon"
                  />
                  <span>{advantage}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => toPaymentHandler(subPlan.lookup_key)}
              style={{ backgroundColor: `${subPlan.color}` }}
              className={styles.block_button}
            >
              Buy Now
            </button>
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
