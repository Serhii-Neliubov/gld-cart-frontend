import React, { useState } from "react";
import styles from "./NewGardening.module.scss";
import { Layout } from "../../../../components/Vendor/Layout.tsx";
import useCategoryRedirect from "../../../../hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import ItemPublishPage from "../../../../components/item-published/ItemPublishPage.tsx";
import {IVendorProductData} from "../../../../utils/models/IVendorProductData.tsx";
import {PhotoAndVideoBlock} from "../../components/PhotoAndVideoBlock.tsx";
import {BasicInformation} from "./stages/BasicInformation.tsx";

export const NewGardening = () => {
  const [stage, setStage] = useState(3);
  const [formData, setFormData] = useState<IVendorProductData>({
    title: '',
    description: '',
    attributes: {},
    images: [],
    category: '',
    subcategory: '',
    service_name: '',
  });

  useCategoryRedirect("gardening", "/personal-services", stage);

  return (
    <React.Fragment>
      {stage < 6 && (
        <Layout
          setStage={setStage}
          title="Gardening SERVICES Form"
          subtitle="Basic information"
          stage={stage - 1}
        >
          {stage == 3 && (
            <BasicInformation formData={formData} setFormData={setFormData} />
          )}
          {stage == 4 && (
            <PhotoAndVideoBlock  formData={formData} setFormData={setFormData}/>
          )}
          {stage == 5 && (
            <React.Fragment>
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
            </React.Fragment>
          )}
        </Layout>
      )}
      {stage == 6 && <ItemPublishPage link='professional-services' formData={formData} category="Gardening" />}
    </React.Fragment>
  );
};
