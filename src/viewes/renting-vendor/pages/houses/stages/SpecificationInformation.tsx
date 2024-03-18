import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewHouses.module.scss";
import {IVendorProductData} from "@/utils/models/IVendorProductData.tsx";
import RentingStage from "@/components/renting-stages/RentingStage.tsx";
import toast from "react-hot-toast";
import {useInput} from "@/hooks/useInput/useInput.tsx";

type SpecificationInformationProps = {
    formData: IVendorProductData;
    setStage: Dispatch<SetStateAction<number>>;
    setFormData: Dispatch<SetStateAction<IVendorProductData>>;
}
export const SpecificationInformation = ({setFormData, setStage, formData}: SpecificationInformationProps) => {
    const bedrooms = useInput('');
    const washroom = useInput('');
    const area = useInput('');
    const countOfStoreys = useInput('');
    const areaUnit = useInput('');
    const condition = useInput('');

    function handleFeatureClick(feature: string) {
        setFormData(prevFormData => {
            const { attributes } = prevFormData;
            const featureValue = attributes['features'] || [];

            const updatedFeatures = Array.isArray(featureValue)
                ? featureValue.includes(feature)
                    ? featureValue.filter(item => item !== feature)
                    : [...featureValue, feature]
                : [feature];

            return {
                ...prevFormData,
                attributes: {
                    ...attributes,
                    features: updatedFeatures
                }
            };
        });
    }

    const setNextStageHandler = () => {
      if(!bedrooms.value || !washroom.value || !area.value || !countOfStoreys.value || !areaUnit.value || !condition.value) {
        return toast.error('Please fill all fields');
      }

      setFormData({
        ...formData,
        attributes: {
          ...formData.attributes,
        },
      });

      setStage((prev: number) => prev + 1);
    }

    return (
    <div className='__container'>
      <div className={styles.container}>
        <RentingStage coloredStage={3}/>
        <h1 className={styles.title}>House Renting</h1>
        <form className={styles.content}>
          <h2 className={styles.subtitle}>Basic information</h2>
          <React.Fragment>
            <div className={styles.inputsBox}>
              <div className={styles.inputBox}>
                <label>Bedrooms</label>
                <input onChange={bedrooms.onChange} value={bedrooms.value} type='number' placeholder="write number of bedrooms"/>
              </div>
              <div className={styles.inputBox}>
                <label>Washroom</label>
                <input onChange={washroom.onChange} value={washroom.value} type='number' placeholder="write number of washrooms"/>
              </div>
            </div>
            <div className={styles.inputRadioBox}>
              <span>House Condition</span>
              <div className={styles.radioInputs}>
                <div className={styles.inputRadio}>
                  <input onChange={condition.onChange} value='New House' name='condition' type="radio"/>
                  <label>New house</label>
                </div>
                <div className={styles.inputRadio}>
                  <input onChange={condition.onChange} value='Old House' name='condition' type="radio"/>
                  <label>Old House</label>
                </div>
              </div>
            </div>
            <div className={styles.noOfStoreys}>
              <span>No of storeys</span>
              <div>
                <button onClick={() =>
                  setFormData({
                    ...formData,
                    attributes: {
                      ...formData.attributes,
                      countOfStoreys: '1'
                    }
                  })
                }>1
                </button>
                <button onClick={() =>
                  setFormData({
                    ...formData,
                    attributes: {
                      ...formData.attributes,
                      countOfStoreys: '2'
                    }
                  })
                }>2
                </button>
                <button onClick={() =>
                  setFormData({
                    ...formData,
                    attributes: {
                      ...formData.attributes,
                      countOfStoreys: '3'
                    }
                  })
                }>3
                </button>
                <button onClick={() =>
                  setFormData({
                    ...formData,
                    attributes: {
                      ...formData.attributes,
                      countOfStoreys: '4+'
                    }
                  })
                }>4+
                </button>
              </div>
            </div>
            <div className={styles.areaUnit}>
              <span>Area unit</span>
              <div>
                <button onClick={() =>
                  setFormData({
                    ...formData,
                    attributes: {
                      ...formData.attributes,
                      areaUnit: 'Canal'
                    }
                  })
                }>Canal
                </button>
                <button onClick={() =>
                  setFormData({
                    ...formData,
                    attributes: {
                      ...formData.attributes,
                      areaUnit: 'Square Feet'
                    }
                  })
                }>Marla
                </button>
                <button onClick={() =>
                  setFormData({
                    ...formData,
                    attributes: {
                      ...formData.attributes,
                      areaUnit: 'Square Feet'
                    }
                  })
                }>Square Feet
                </button>
                <button onClick={() =>
                  setFormData({
                    ...formData,
                    attributes: {
                      ...formData.attributes,
                      areaUnit: 'Square Meter'
                    }
                  })
                }>Square Meter
                </button>
                <button onClick={() =>
                  setFormData({
                    ...formData,
                    attributes: {
                      ...formData.attributes,
                      areaUnit: 'Square Yards'
                    }
                  })
                }>Square Yards
                </button>
              </div>
            </div>
            <div className={styles.inputBox}>
              <label>Area</label>
              <input onChange={(event) =>
                setFormData({
                  ...formData,
                  attributes: {
                    ...formData.attributes,
                    area: event.target.value
                  }
                })
              } placeholder="Write the area value"/>
            </div>
            <div className={styles.features}>
              <span>Features</span>
              <div>
                <button onClick={() => handleFeatureClick('Servant Quarters')}>Servant Quarters</button>
                <button onClick={() => handleFeatureClick('Drawing Room')}>Drawing Room</button>
                <button onClick={() => handleFeatureClick('Dining Room')}>Dining Room</button>
                <button onClick={() => handleFeatureClick('Kitchen')}>Kitchen</button>
                <button onClick={() => handleFeatureClick('Study Room')}>Study Room</button>
                <button onClick={() => handleFeatureClick('Prayer Room')}>Prayer Room</button>
                <button onClick={() => handleFeatureClick('Powder Room')}>Powder Room</button>
              </div>
            </div>
          </React.Fragment>
        </form>
        <div className={styles.actionButtons}>
          <div className={styles.closeButton} onClick={() => setStage((prev: number) => prev - 1)}>Back</div>
          <div className={styles.nextButton} onClick={setNextStageHandler}>Next</div>
        </div>
      </div>
  </div>
  )
}