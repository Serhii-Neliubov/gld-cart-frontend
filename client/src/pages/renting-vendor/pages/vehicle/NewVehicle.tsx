import React, { ChangeEvent, useState } from "react";
import styles from "./NewVehicle.module.scss";
import { Layout } from "../../../../components/Vendor/Layout.tsx";
import useCategoryRedirect from "../../../../hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductInformation,
  vendorProductInfo,
} from "../../../../redux/slices/vendorProductInfoSlice.ts";
import ItemPublishPage from "../../../../components/ItemPublishPage/ItemPublishPage.tsx";
import {PhotoAndVideoBlock} from "../../components/PhotoAndVideoBlock.tsx";

interface ProductInformation {
  [key: string]: string;
}

export const NewVehicle = () => {
  const dispatch = useDispatch();
  const data = useSelector(vendorProductInfo);
  const [stage, setStage] = useState(3);

  useCategoryRedirect("vehicles", "/renting-category-page", stage);

  const handleInputChange = (
    currentData: object,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    const inputValue = e.target.value;

    dispatch(
      setProductInformation({
        ...currentData,
        [key]: inputValue,
      })
    );
  };

  const onChecked = (
    currentData: object,
    event: ChangeEvent<HTMLInputElement>,
    key: string,
    element: string | object
  ) => {
    if (event.target.checked) {
      dispatch(setProductInformation({ ...currentData, [key]: element }));
    } else {
      const updatedInfo: ProductInformation = { ...currentData };
      delete updatedInfo[key];
      dispatch(setProductInformation(updatedInfo));
    }
  };

  console.log(data);

  return (
    <React.Fragment>
      {stage < 6 && (
        <Layout
          setStage={setStage}
          title="Vehicle Renting Form"
          subtitle="Basic information"
          stage={stage - 1}
        >
          {stage == 3 && (
            <React.Fragment>
              <div className={styles.inputTextBox}>
                <label>Title</label>
                <input
                  onChange={(event) =>
                    handleInputChange(data.info, event, "title")
                  }
                  placeholder="70 words max"
                  maxLength={70}
                />
              </div>
              <div className={styles.inputAreaBox}>
                <label>Description</label>
                <textarea
                  onChange={(event) =>
                    handleInputChange(data.info, event, "description")
                  }
                  minLength={160}
                  maxLength={9000}
                  placeholder="Minimum 160 and maximum 9000 characters"
                />
              </div>
              <div className={styles.inputRadioBox}>
                <span>You want to rent your car</span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input
                      name="driver"
                      onChange={() =>
                        dispatch(
                          setProductInformation({
                            ...data.info,
                            driver: "Without Driver",
                          })
                        )
                      }
                      type="radio"
                    />
                    <label>Without Driver</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input
                      onChange={() =>
                        dispatch(
                          setProductInformation({
                            ...data.info,
                            driver: "With Driver",
                          })
                        )
                      }
                      name="driver"
                      type="radio"
                    />
                    <label>With Driver</label>
                  </div>
                </div>
              </div>
              <div className={styles.packageDetails}>
                <span>Packages Details</span>
                <div className={styles.inputsCheckbox}>
                  <div className={styles.inputCheckbox}>
                    <div>
                      <input
                        name="time"
                        onChange={(event) =>
                          onChecked(data.info, event, "packageForDays", {})
                        }
                        type="checkbox"
                      />
                      <label>Renting Packages For Days </label>
                    </div>
                    <div className={styles.inputsBox}>
                      <div>
                        <div className={styles.inputBox}>
                          <span>Rent Price</span>
                          <input placeholder="450$" />
                        </div>
                        <div className={styles.inputBox}>
                          <span>Day</span>
                          <select
                            onChange={(event) =>
                              dispatch(
                                setProductInformation({
                                  ...data.info,
                                  packageForDays: {
                                    amountOfDays: event.target.value,
                                  },
                                })
                              )
                            }
                          >
                            <option value="1 Day">01 Day</option>
                            <option value="2 Days">02 Days</option>
                            <option value="3 Days">03 Days</option>
                            <option value="4 Days">04 Days</option>
                            <option value="5 Days">05 Days</option>
                            <option value="10 Days">10 Days</option>
                            <option value="15 Days">15 Days</option>
                            <option value="20 Days">20 Days</option>
                            <option value="25 Days">25 Days</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputCheckbox}>
                    <div>
                      <input
                        name="time"
                        onChange={(event) =>
                          onChecked(data.info, event, "packageForWeeks", {})
                        }
                        type="checkbox"
                      />
                      <label>Renting Packages For Weeks </label>
                    </div>
                    <div className={styles.inputsBox}>
                      <div>
                        <div className={styles.inputBox}>
                          <span>Rent Price</span>
                          <input placeholder="450$" />
                        </div>
                        <div className={styles.inputBox}>
                          <span>Week</span>
                          <select
                            onChange={(event) =>
                              dispatch(
                                setProductInformation({
                                  ...data.info,
                                  packageForWeeks: {
                                    amountOfWeeks: event.target.value,
                                  },
                                })
                              )
                            }
                          >
                            <option value="1 Day">01 Week</option>
                            <option value="2 Weeks">02 Weeks</option>
                            <option value="3 Weeks">03 Weeks</option>
                            <option value="5 Weeks">05 Weeks</option>
                            <option value="8 Weeks">08 Weeks</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputCheckbox}>
                    <div>
                      <input
                        name="time"
                        onChange={(event) =>
                          onChecked(data.info, event, "packageForMonths", {})
                        }
                        type="checkbox"
                      />
                      <label>Renting Packages For Months </label>
                    </div>
                    <div className={styles.inputsBox}>
                      <div>
                        <div className={styles.inputBox}>
                          <span>Rent Price</span>
                          <input placeholder="450$" />
                        </div>
                        <div className={styles.inputBox}>
                          <span>Month</span>
                          <select
                            onChange={(event) =>
                              dispatch(
                                setProductInformation({
                                  ...data.info,
                                  packageForMonths: {
                                    amountOfMonths: event.target.value,
                                  },
                                })
                              )
                            }
                          >
                            <option value="1 Month">01 Month</option>
                            <option value="2 Months">02 Months</option>
                            <option value="3 Months">03 Months</option>
                            <option value="4 Months">04 Months</option>
                            <option value="5 Months">05 Months</option>
                            <option value="10 Months">10 Months</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
          {stage == 4 && (
            <PhotoAndVideoBlock />
          )}
          {stage == 5 && (
            <React.Fragment>
              <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                  <label>Year of Manufacture</label>
                  <input placeholder="Car Manufacture year" />
                </div>
                <div className={styles.inputBox}>
                  <label>Vehicle Plate Number</label>
                  <input placeholder="AAA-123" />
                </div>
              </div>
              <div className={styles.inputRadioBox}>
                <span>Vehicle Condition</span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>New Vehicle</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Used Vehicle</label>
                  </div>
                </div>
              </div>
              <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                  <label>Custom specification*</label>
                  <input placeholder="Transmission" />
                </div>
                <div className={styles.inputBox}>
                  <label>Specification details*</label>
                  <input placeholder="Automatic" />
                </div>
              </div>
              <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                  <label>Fuel type*</label>
                  <input placeholder="Diesel" />
                </div>
                <div className={styles.inputBox}>
                  <label>Engine capacity*</label>
                  <input placeholder="1000 CC" />
                </div>
              </div>
              <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                  <label>Seat capacity</label>
                  <input placeholder="04" />
                </div>
                <div className={styles.inputBox}>
                  <label>Storage Bag capacity</label>
                  <input placeholder="1 big bag and one small bag" />
                </div>
              </div>
              <div className={styles.inputBox}>
                <label>Air bags</label>
                <input placeholder="02" />
              </div>
            </React.Fragment>
          )}
        </Layout>
      )}
      {stage == 6 && <ItemPublishPage category="Vehicle" />}
    </React.Fragment>
  );
};
