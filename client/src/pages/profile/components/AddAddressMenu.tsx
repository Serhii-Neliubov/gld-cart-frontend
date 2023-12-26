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

type TypeFormData = {
  email: string;
  recipient: string;
  street: string;
  city: string;
  country: string;
  zip: undefined | number;
  phone: string;
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
  const [formData, setFormData] = useState<TypeFormData>({
    email: user.email,
    recipient: "",
    street: "",
    city: "",
    country: "",
    zip: undefined,
    phone: "",
  });
  const [addresses, setAddresses] = useState([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await AddressServices.sendAddress(
        formData.email,
        formData.recipient,
        formData.street,
        formData.city,
        formData.country,
        formData.zip,
        formData.phone
      );
      toast.success("Address add successfully");

    } catch (error) {
      console.error("Error sending address:", error);
      toast.error("Error to adding the address");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
        const response = await AddressServices.getAddresses(user.id);
        const data = response.data;
        setAddresses(data)
    };

    fetchData();
  }, []);

  return selectedLabel === "Add Address" ? (
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
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
        />
        <input
          placeholder="Street"
          className={styles.input}
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
        <input
          placeholder="City"
          className={styles.input}
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          placeholder="Country"
          className={styles.input}
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        <input
          placeholder="ZIP Code"
          className={styles.input}
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
        />
        <input
          placeholder="Phone number"
          className={styles.input}
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <button className={styles.sendbutton} type="submit">
          Submit
        </button>
      </form>
    </div>
  ) : (
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
                 <button>EDIT</button>
               </div>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default AddAddressMenu
