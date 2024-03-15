import React, {Dispatch, SetStateAction} from "react";
import styles from "@/viewes/products-vendor/pages/bags/NewBags.module.scss";
import {IVendorProductData} from "@/utils/models/IVendorProductData.ts";
import toast from "react-hot-toast";
import {useInput} from "@/hooks/useInput/useInput.tsx";
import RentingStage from "@/components/renting-stages/RentingStage.tsx";
import {ChoosingColorBlock} from "@/components/choosing-color-block/ChoosingColorBlock.tsx";

type SpecificationInformationProps = {
  formData: IVendorProductData;
  setFormData: Dispatch<SetStateAction<IVendorProductData>>;
  setStage: Dispatch<SetStateAction<number>>;
}

export const SpecificationInformation = ({setStage, formData, setFormData}: SpecificationInformationProps) => {

  const productsInStock = useInput('');
  const areaBox = useInput('');
  const numberOfPockets = useInput('');

  const handleCheckboxChange = (category: string, value: string) => {
    setFormData((prevFormData) => {
      const existingValues: string | string[] = prevFormData.attributes[category] || [];
      let updatedValues: string[];

      if (Array.isArray(existingValues)) {
        updatedValues = existingValues.includes(value)
          ? existingValues.filter((item: string) => item !== value)
          : [...existingValues, value];
      } else {
        updatedValues = [existingValues, value];
      }

      return {
        ...prevFormData,
        attributes: {
          ...prevFormData.attributes,
          [category]: updatedValues,
          productsInStock: productsInStock.value,
          careInstructions: areaBox.value,
          numberOfPockets: numberOfPockets.value
        }
      };
    });
  };

  const setNextStageHandler = () => {
    if(!productsInStock.value || !areaBox.value || !numberOfPockets.value){
      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
        productInStock: productsInStock.value,
        careInstructions: areaBox.value
      },
    });

    setStage((prev: number) => prev + 1);
  };

  return (
    <div className='__container'>
      <div className={styles.container}>
        <RentingStage coloredStage={5}/>
        <h1 className={styles.title}>Bags</h1>
        <form className={styles.content}>
          <h2 className={styles.subtitle}>Products Specification</h2>
          <React.Fragment>
          <span className={styles.tipTitle}>
            Select the Material of your product
          </span>
            <div className={styles.checkboxInputsBox}>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('material', 'Leather')} type="checkbox"/>
                  <label>Leather</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('material', 'Nylon')} type="checkbox"/>
                  <label>Nylon</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('material', 'Denim')} type="checkbox"/>
                  <label>Denim</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('material', 'Other')} type="checkbox"/>
                  <label>Other</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('material', 'Canvas')} type="checkbox"/>
                  <label>Canvas</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('material', 'Polyester')} type="checkbox"/>
                  <label>Polyester</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('material', 'Suede')} type="checkbox"/>
                  <label>Suede</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('material', 'Vinyl')} type="checkbox"/>
                  <label>Vinyl</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('material', 'Fabric Blend')} type="checkbox"/>
                  <label>Fabric Blend</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('material', 'Synthetic Leather')} type="checkbox"/>
                  <label>Synthetic Leather</label>
                </div>
              </div>
            </div>
            <ChoosingColorBlock />
            <span className={styles.tipTitle}>Select the Features of your product</span>
            <div className={styles.checkboxInputsBox}>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('features', 'Adjustable Straps')} type="checkbox"/>
                  <label>Adjustable Straps</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('features', 'Inner Pockets')} type="checkbox"/>
                  <label>Inner Pockets</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('features', 'RFID Blocking')} type="checkbox"/>
                  <label>RFID Blocking</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('features', 'Other')} type="checkbox"/>
                  <label>Other</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('features', 'Multiple Compartments')} type="checkbox"/>
                  <label>Multiple Compartments</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('features', 'Water-Resistant')} type="checkbox"/>
                  <label>Water-Resistant</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('features', 'Expandable')} type="checkbox"/>
                  <label>Expandable</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('features', 'Zipper Closure')} type="checkbox"/>
                  <label>Zipper Closure</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('features', 'Laptop Compartment')} type="checkbox"/>
                  <label>Laptop Compartment</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('features', 'Eco-Friendly Materials')} type="checkbox"/>
                  <label>Eco-Friendly Materials</label>
                </div>
              </div>
            </div>
            <span className={styles.tipTitle}>
                  Select Size of products
                </span>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('size', 'Medium')} type="checkbox"/>
                <label>Medium</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('size', 'Small')} type="checkbox"/>
                <label>Small</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('size', 'Large')} type="checkbox"/>
                <label>Large</label>
              </div>
            </div>
            <span className={styles.tipTitle}>
                  Select the type of closure for the bag
            </span>
            <div className={styles.checkboxInputsBox}>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfClosure', 'Zipper')} type="checkbox"/>
                  <label>Zipper</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfClosure', 'Drawstring')} type="checkbox"/>
                  <label>Drawstring</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfClosure', 'Magnetic Snap')} type="checkbox"/>
                  <label>Magnetic Snap</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfClosure', 'Flap')} type="checkbox"/>
                  <label>Flap</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfClosure', 'Buckle')} type="checkbox"/>
                  <label>Buckle</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfClosure', 'Other')} type="checkbox"/>
                  <label>Other</label>
                </div>
              </div>
            </div>
            <span className={styles.tipTitle}>
                  Select the type of strap for the bag
                </span>
            <div className={styles.checkboxInputsBox}>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfStrap', 'Shoulder Strap')} type="checkbox"/>
                  <label>Shoulder Strap</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfStrap', 'Backpack Strap')} type="checkbox"/>
                  <label>Backpack Straps</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfStrap', 'Other')} type="checkbox"/>
                  <label>Other</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfStrap', 'Crossbody Strap')} type="checkbox"/>
                  <label>Crossbody Strap</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfStrap', 'Detachable Strap')} type="checkbox"/>
                  <label>Detachable Strap</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfStrap', 'Handle')} type="checkbox"/>
                  <label>Handle</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfStrap', 'No Strap (Clutch)')} type="checkbox"/>
                  <label>No Strap (Clutch)</label>
                </div>
              </div>
            </div>
            <div className={styles.inputBox}>
              <label>Pockets</label>
              <input onChange={numberOfPockets.onChange} value={numberOfPockets.value} type="text" placeholder="Write the number and type of pockets in the bag (e.g., interior pockets, exterior pockets)"/>
            </div>
            <div className={styles.areaBox}>
              <label>Care Instructions</label>
              <textarea
                onChange={areaBox.onChange}
                value={areaBox.value}
                placeholder="Provide care and maintenance instructions for the bag"
              />
            </div>
            <div className={styles.inputBox}>
              <label>How many product are in stock?</label>
              <input
                onChange={productsInStock.onChange}
                value={productsInStock.value}
                type="number"
                placeholder="100"
              />
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