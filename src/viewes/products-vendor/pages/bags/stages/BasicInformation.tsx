import styles from "@/viewes/products-vendor/pages/bags/NewBags.module.scss";
import React, {Dispatch, SetStateAction, useState} from "react";
import {IVendorProductData} from "@/utils/models/IVendorProductData.ts";
import RentingStage from "@/components/renting-stages/RentingStage.tsx";
import {useInput} from "@/hooks/useInput/useInput.tsx";
import toast from "react-hot-toast";

interface BasicInformationProps {
  formData: IVendorProductData;
  setFormData: Dispatch<SetStateAction<IVendorProductData>>;
  setStage: Dispatch<SetStateAction<number>>;
}

export const BasicInformation = ({setStage, formData, setFormData}: BasicInformationProps) => {
  const [isFullPrice, setIsFullPrice] = useState(false);
  const [isDiscountPrice, setIsDiscountPrice] = useState(false);

  const title = useInput('');
  const description = useInput('');
  const productToSellIs = useInput('');
  const price = useInput('');
  const discountPrice = useInput('');
  const discountPercent = useInput('');

  const setNextStageHandler = () => {
    if(!title.value || !description.value || !productToSellIs.value || !price.value){
      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      title: title.value,
      description: description.value,
      attributes: {
        ...formData.attributes,
        productToSellIs: productToSellIs.value,
      },
      price: Number(price.value),
      discountPrice: Number(discountPrice.value),
    });

    setStage((prev: number) => prev + 1);
  }

  const setDiscountPriceHandler = () => {
    if(!isFullPrice){
      return toast.error('You can`t set discount price without setting full price first.');
    } else {
      setIsDiscountPrice((prev: boolean) => !prev)
    }
  }

  return (
    <div className='__container'>
      <div className={styles.container}>
        <RentingStage coloredStage={3}/>
        <h1 className={styles.title}>Bags</h1>
        <form className={styles.content}>
          <h2 className={styles.subtitle}>Basic Information</h2>
          <React.Fragment>
            <div className={styles.inputTextBox}>
              <label>Product Title</label>
              <input
                onChange={title.onChange}
                value={title.value}
                placeholder="70 words max"
                maxLength={70}
              />
            </div>
            <div className={styles.inputAreaBox}>
              <label>Products Description</label>
              <textarea
                minLength={160}
                maxLength={9000}
                placeholder="Minimum 160 and maximum 9000 characters"
                onChange={description.onChange}
                value={description.value}
              />
            </div>
            <div className={styles.inputsRadio}>
              <span>Category</span>
              <div className={styles.radioInputs}>
                <div className={styles.inputRadio}>
                  <input onChange={productToSellIs.onChange} value='Men' type="radio" />
                  <label>Men</label>
                </div>
                <div className={styles.inputRadio}>
                  <input onChange={productToSellIs.onChange} value='Women' type="radio" />
                  <label>Women</label>
                </div>
              </div>
            </div>
            <div className={styles.packageDetails}>
              <span>Packages Details</span>
              <div className={styles.inputsCheckbox}>
                <div className={styles.inputCheckbox}>
                  <div>
                    <input onChange={() => setIsFullPrice((prev: boolean) => !prev)} type="checkbox" />
                    <label>Full Price</label>
                  </div>
                  <div className={styles.inputsBox}>
                    <div>
                      <div className={styles.inputBox}>
                        <span>Price</span>
                        <input onChange={price.onChange} value={price.value} disabled={!isFullPrice} placeholder="450$" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.inputCheckbox}>
                  <div>
                    <input checked={isDiscountPrice} onChange={setDiscountPriceHandler} type="checkbox" />
                    <label>Discount Price</label>
                  </div>
                  <div className={styles.inputsBox}>
                    <div>
                      <div className={styles.inputBox}>
                        <span>Discount Price</span>
                        <input
                          onChange={discountPrice.onChange}
                          value={discountPrice.value}
                          disabled={!isDiscountPrice}
                          placeholder="450$"
                        />
                      </div>
                      <div className={styles.inputBox}>
                        <span>Discount</span>
                        <select
                          disabled={!isDiscountPrice}
                          onChange={discountPercent.onChange}
                          value={discountPercent.value}
                        >
                          <option value="10%">10%</option>
                          <option value="20%">20%</option>
                          <option value="30%">30%</option>
                          <option value="40%">40%</option>
                          <option value="50%">50%</option>
                          <option value="60%">60%</option>
                          <option value="70%">70%</option>
                          <option value="80%">80%</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
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
  );
}