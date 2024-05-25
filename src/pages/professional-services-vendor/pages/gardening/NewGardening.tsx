import styles from "./NewGardening.module.scss";
import useCategoryRedirect from "@hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import ItemPublishPage from "@components/item-published/ItemPublishPage.tsx";
import {PhotoAndVideoBlock} from "../../components/PhotoAndVideoBlock.tsx";
import {BasicInformation} from "./stages/BasicInformation.tsx";
import {VendorProductComponentProps} from "@models/IVendorProductComponentProps.ts";

export const NewGardening = ({formData, stage, setFormData}: VendorProductComponentProps) => {
  useCategoryRedirect("gardening", "/personal-services", stage);

  return (
    <>
      stage == 3 && <BasicInformation formData={formData} setFormData={setFormData} />
      stage == 4 && <PhotoAndVideoBlock  formData={formData} setFormData={setFormData}/>
      stage == 5 && <>
              <div className={styles.inputBox}>
                <label>Garden Size</label>
                <input placeholder="Approximate size of the garden" />
              </div>
              <div className={styles.inputRadioBox}>
                <span>Need Gardening Material</span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Yes</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>No</label>
                  </div>
                </div>
              </div>
              <div className={styles.inputsRadio}>
                <span>You want to give your Gardening service Per</span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Hour</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Day</label>
                  </div>
                </div>
              </div>
              <span className={styles.tipTitle}>
                Select frequency of gardening services
              </span>
              <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>One Day after Gardening </label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>One Week after Gardening </label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>One Month after Gardening</label>
                  </div>
                </div>
              </div>
            </>
      stage == 6 && <ItemPublishPage link='professional-services' formData={formData} category="Gardening" />
    </>
  );
};
