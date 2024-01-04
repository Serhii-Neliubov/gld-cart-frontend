import React, { ChangeEvent,  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userDataSelector } from "../../../redux/slices/userDataSlice.ts";
import styles from "../ProfilePage.module.scss";
import toast from "react-hot-toast";
import AddressServices from "../../../services/AddressServices.ts";

type AddAddressMenuProps = {
  selectedLabel: string;
  setSelectedLabel: (value: string) => void;
};

type TypeAddressData = {
  ZIP_code: number;
  street_address: string;
  city: string;
  recipients_name: string,
  country: string;
  phone: string;
  _id: string
};

function AddAddressMenu({
  selectedLabel,
  setSelectedLabel,
}: AddAddressMenuProps) {
  const user = useSelector(userDataSelector);
  const [formData, setFormData] = useState({
    userId: user.id,
    addressId: "",
    addressData: {
      recipients_name: "",
      street_address: "",
      city: "",
      country: "",
      ZIP_code: undefined,
      phone_number: "",
    }
  });
  const [addresses, setAddresses] = useState([])

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

  const handleSubmit = async () => {
    try {
      await AddressServices.sendAddress(
          formData.userId,
          formData.addressData
      );
      toast.success("Address was added successfully");
    } catch (error) {
      toast.error("Error to adding the address");
    }
  };
  const handleSubmitChanges = async () => {
    try {
      await AddressServices.updateAddress(
          formData.userId,
          formData.addressId,
          formData.addressData,
      );
      toast.success("Address changed successfully");
    } catch (error) {
      console.error("Error sending address:", error);
      toast.error("Error to adding the address");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
        const response = await AddressServices.getAddresses(user.id);
        console.log(user.id)
        const data = response.data;
        setAddresses(data)
    };

    fetchData();
  }, []);

  if(selectedLabel === "Add Address"){
    return (
        <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              justifyContent: "space-between",
              height: "100%",
            }}
        >
          <div className={styles.title_action}>
            <h2 className={styles.box_name}>ADDRESS</h2>
            <button onClick={() => setSelectedLabel("Address")}>Return</button>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
                placeholder="Recipients name"
                className={styles.input}
                type="text"
                name="recipients_name"
                value={formData.addressData.recipients_name}
                onChange={handleChange}
            />
            <input
                placeholder="Street"
                className={styles.input}
                type="text"
                name="street_address"
                value={formData.addressData.street_address}
                onChange={handleChange}
            />
            <input
                placeholder="City"
                className={styles.input}
                type="text"
                name="city"
                value={formData.addressData.city}
                onChange={handleChange}
            />
            <input
                placeholder="Country"
                className={styles.input}
                type="text"
                name="country"
                value={formData.addressData.country}
                onChange={handleChange}
            />
            <input
                placeholder="ZIP Code"
                className={styles.input}
                type="text"
                name="ZIP_code"
                value={formData.addressData.ZIP_code}
                onChange={handleChange}
            />
            <input
                placeholder="Phone number"
                className={styles.input}
                type="text"
                name="phone_number"
                value={formData.addressData.phone_number}
                onChange={handleChange}
            />
            <button className={styles.sendbutton} type="submit">
              Submit
            </button>
          </form>
        </div>
    )
  }

  if(selectedLabel === "Address"){
    return (
        selectedLabel === "Address" && (
            <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: 'center',
                  justifyContent: "space-between",
                  height: "100%",

                }}
            >
              <div className={styles.title_action}>
                <h2 className={styles.box_name}>ADDRESS</h2>
                <button onClick={() => setSelectedLabel("Add Address")}>
                  + Add New Address
                </button>
              </div>
              <div className={styles.address_content}>
                <div className={styles.address_box}>
                  {addresses.map((address: TypeAddressData) =>
                      <div className={styles.address}>
                        <div className={styles.address_text}>
                          <p>{address.country}, {address.city}</p>
                          <p>{address.street_address}, {address.ZIP_code} </p>
                          <p>{address.recipients_name}</p>
                        </div>
                        <button onClick={() => {
                          formData.addressId = address._id;
                          setSelectedLabel('Edit Address')
                        }}>EDIT</button>
                      </div>
                  )}
                </div>
              </div>
            </div>
        )
    )
  }

  if(selectedLabel === "Edit Address"){
    return (
        <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              justifyContent: "space-between",
              height: "100%",
            }}
        >
          <div className={styles.title_action}>
            <h2 className={styles.box_name}>EDIT</h2>
            <button onClick={() => setSelectedLabel("Address")}>Return</button>
          </div>
          <form className={styles.form} onSubmit={handleSubmitChanges}>
            <input
                placeholder="Recipients name"
                className={styles.input}
                type="text"
                name="recipients_name"
                value={formData.addressData.recipients_name}
                onChange={handleChange}
            />
            <input
                placeholder="Street"
                className={styles.input}
                type="text"
                name="street_address"
                value={formData.addressData.street_address}
                onChange={handleChange}
            />
            <input
                placeholder="City"
                className={styles.input}
                type="text"
                name="city"
                value={formData.addressData.city}
                onChange={handleChange}
            />
            <input
                placeholder="Country"
                className={styles.input}
                type="text"
                name="country"
                value={formData.addressData.country}
                onChange={handleChange}
            />
            <input
                placeholder="ZIP Code"
                className={styles.input}
                type="text"
                name="ZIP_code"
                value={formData.addressData.ZIP_code}
                onChange={handleChange}
            />
            <input
                placeholder="Phone number"
                className={styles.input}
                type="text"
                name="phone_number"
                value={formData.addressData.phone_number}
                onChange={handleChange}
            />
            <button className={styles.sendbutton} type="submit">
              Edit
            </button>
          </form>
        </div>
    )
  }

}

export default AddAddressMenu
