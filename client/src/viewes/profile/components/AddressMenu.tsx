import React, {ChangeEvent, useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { userDataSelector } from "../../../store/slices/userDataSlice.ts";
import styles from "../ProfilePage.module.scss";
import AddressService from "../../../services/AddressService.ts";

type AddAddressMenuProps = {
  selectedLabel: string;
  setSelectedLabel: (value: string) => void;
};

type TypeAddressData = {
  ZIP_code: number;
  street_address: string;
  city: string;
  recipients_name: string;
  country: string;
  phone: string;
  _id: string;
  forEffectiveDelivery: string;
};

const clearAddressFormData = {
  addressId: "",
  addressData: {
    recipients_name: "",
    street_address: "",
    city: "",
    country: "",
    ZIP_code: undefined,
    phone_number: "",
    forEffectiveDelivery: 'Home'
  }
}

function AddressMenu({selectedLabel, setSelectedLabel}: AddAddressMenuProps) {
  const user = useSelector(userDataSelector);

  const [formData, setFormData] = useState({...clearAddressFormData, userId: user.id});
  const [addresses, setAddresses] = useState([]);

  async function updateAddresses() {
    const response = await AddressService.getAddresses(user.id);
    const data = response.data;
    setAddresses(data);
  }

  useEffect(() => {
    updateAddresses();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      addressData: {
        ...prevData.addressData,
        [name]: value,
      },
    }));
  };

  const sendAddressHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await AddressService.sendAddress(formData.userId, formData.addressData);

    if (result.success) {
      setSelectedLabel('Address');
      await updateAddresses();
    }
  };

  const changeAddressHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await AddressService.changeAddress(formData.userId, formData.addressId, formData.addressData,);

    if (result.success) {
      setSelectedLabel('Address');
      await updateAddresses();
    }
  };

  if(selectedLabel === "Add Address"){
    return (
        <div className={styles.contentAddressBox}>
          <form className={styles.form} onSubmit={sendAddressHandler}>
            <div className={styles.inputColumns}>
              <label className={styles.inputBox}>
                Full Name
                <input
                    placeholder="Enter full name"
                    className={styles.input}
                    type="text"
                    name="recipients_name"
                    value={formData.addressData.recipients_name}
                    onChange={handleChange}
                />
              </label>
              <label className={styles.inputBox}>
                Address
                <input
                    placeholder="House no. / building / street / area"
                    className={styles.input}
                    type="text"
                    name="street_address"
                    value={formData.addressData.street_address}
                    onChange={handleChange}
                />
              </label>
            </div>
            <div className={styles.inputColumns}>
              <label className={styles.inputBox}>
                Phone number
                <input
                    placeholder="Enter mobile number"
                    className={styles.input}
                    type="text"
                    name="phone_number"
                    value={formData.addressData.phone_number}
                    onChange={handleChange}
                />
              </label>
              <label className={styles.inputBox}>
                Landmark (Optional)
                <input
                    placeholder="E.g.  beside train station"
                    className={styles.input}
                    type="text"
                    name="landmark"
                />
              </label>
            </div>
            <div className={styles.inputColumns}>
              <label className={styles.inputBox}>
                Country
                <input
                    placeholder="Country"
                    className={styles.input}
                    type="text"
                    name="country"
                    value={formData.addressData.country}
                    onChange={handleChange}
                />
              </label>
              <div className={styles.boxForEffectiveDelivery}>
                <span>Select a label for effective delivery:</span>
                <div className={styles.labelsForEffectiveDelivery}>
                  <button
                      onClick={(e) => {
                        e.preventDefault()
                        setFormData((prevData) => ({
                          ...prevData,
                          addressData: {
                            ...prevData.addressData,
                            forEffectiveDelivery: 'Home',
                          },
                        }))
                      }}
                      className={formData.addressData.forEffectiveDelivery === 'Home' ? `${styles.labelForEffectiveDelivery_active} ${styles.labelForEffectiveDelivery}` : styles.labelForEffectiveDelivery}
                  >
                    Home
                  </button>
                  <button
                      onClick={(e) => {
                        e.preventDefault()
                        setFormData((prevData) => ({
                          ...prevData,
                          addressData: {
                            ...prevData.addressData,
                            forEffectiveDelivery: 'Office',
                          },
                        }))
                      }}
                      className={formData.addressData.forEffectiveDelivery === 'Office' ? `${styles.labelForEffectiveDelivery_active} ${styles.labelForEffectiveDelivery}` : styles.labelForEffectiveDelivery}
                  >
                    Office
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.inputColumns}>
              <label className={styles.inputBox}>
                City
                <input
                    placeholder="City"
                    className={styles.input}
                    type="text"
                    name="city"
                    value={formData.addressData.city}
                    onChange={handleChange}
                />
              </label>
              <label className={styles.inputBox}>
                ZIP Code
                <input
                    placeholder="ZIP Code"
                    className={styles.input}
                    type="text"
                    name="ZIP_code"
                    value={formData.addressData.ZIP_code}
                    onChange={handleChange}
                />
              </label>
            </div>
            <div className={styles.button_actions}>
              <button onClick={() => setSelectedLabel("Address")}>Return</button>
              <button type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
    )
  }

  if (selectedLabel === "Address") {
    return (
        selectedLabel === "Address" && (
            <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  maxWidth: '790px'
                }}
            >
              <div className={styles.title_action}>
                <h2 className={styles.box_name}>ADDRESS</h2>
                <button  onClick={() => setSelectedLabel("Add Address")}>
                  + Add New Address
                </button>
              </div>
              <div className={styles.address_content}>
                <div className={styles.address_box}>
                  {addresses.map((address: TypeAddressData) =>
                      <div className={styles.address} key={address._id}>
                        <div className={styles.address_text}>
                          <p>{address.country}, {address.city}</p>
                          <p>{address.street_address}, {address.ZIP_code} </p>
                          <p>{address.recipients_name}</p>
                        </div>
                        <button onClick={() => {
                          formData.addressId = address._id;
                          setSelectedLabel('Edit Address')
                        }}>EDIT
                        </button>
                      </div>
                  )}
                </div>
              </div>
            </div>
        )
    )
  }

  if (selectedLabel === "Edit Address") {
    return (
        <div className={styles.contentAddressBox}>
          <form className={styles.form} onSubmit={changeAddressHandler}>
            <div className={styles.inputColumns}>
              <label className={styles.inputBox}>
                Full Name
                <input
                    placeholder="Enter full name"
                    className={styles.input}
                    type="text"
                    name="recipients_name"
                    value={formData.addressData.recipients_name}
                    onChange={handleChange}
                />
              </label>
              <label className={styles.inputBox}>
                Address
                <input
                    placeholder="House no. / building / street / area"
                    className={styles.input}
                    type="text"
                    name="street_address"
                    value={formData.addressData.street_address}
                    onChange={handleChange}
                />
              </label>
            </div>
            <div className={styles.inputColumns}>
              <label className={styles.inputBox}>
                Phone number
                <input
                    placeholder="Enter mobile number"
                    className={styles.input}
                    type="text"
                    name="phone_number"
                    value={formData.addressData.phone_number}
                    onChange={handleChange}
                />
              </label>
              <label className={styles.inputBox}>
                Landmark (Optional)
                <input
                    placeholder="E.g.  beside train station"
                    className={styles.input}
                    type="text"
                    name="landmark"
                />
              </label>
            </div>
            <div className={styles.inputColumns}>
              <label className={styles.inputBox}>
                Country
                <input
                    placeholder="Country"
                    className={styles.input}
                    type="text"
                    name="country"
                    value={formData.addressData.country}
                    onChange={handleChange}
                />
              </label>
              <div className={styles.boxForEffectiveDelivery}>
                <span>Select a label for effective delivery:</span>
                <div className={styles.labelsForEffectiveDelivery}>
                  <button
                      onClick={(e) => {
                        e.preventDefault()
                        setFormData((prevData) => ({
                          ...prevData,
                          addressData: {
                            ...prevData.addressData,
                            forEffectiveDelivery: 'Home',
                          },
                        }))
                      }}
                      className={formData.addressData.forEffectiveDelivery === 'Home' ? `${styles.labelForEffectiveDelivery_active} ${styles.labelForEffectiveDelivery}` : styles.labelForEffectiveDelivery}
                  >
                    Home
                  </button>
                  <button
                      onClick={(e) => {
                        e.preventDefault()
                        setFormData((prevData) => ({
                          ...prevData,
                          addressData: {
                            ...prevData.addressData,
                            forEffectiveDelivery: 'Office',
                          },
                        }))
                      }}
                      className={formData.addressData.forEffectiveDelivery === 'Office' ? `${styles.labelForEffectiveDelivery_active} ${styles.labelForEffectiveDelivery}` : styles.labelForEffectiveDelivery}
                  >
                    Office
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.inputColumns}>
              <label className={styles.inputBox}>
                City
                <input
                    placeholder="City"
                    className={styles.input}
                    type="text"
                    name="city"
                    value={formData.addressData.city}
                    onChange={handleChange}
                />
              </label>
              <label className={styles.inputBox}>
                ZIP Code
                <input
                    placeholder="ZIP Code"
                    className={styles.input}
                    type="text"
                    name="ZIP_code"
                    value={formData.addressData.ZIP_code}
                    onChange={handleChange}
                />
              </label>
            </div>
            <div className={styles.button_actions}>
              <button onClick={() => setSelectedLabel("Address")}>Return</button>
              <button type="submit">
                Edit
              </button>
            </div>
          </form>
        </div>
    )
  }

}

export default AddressMenu
