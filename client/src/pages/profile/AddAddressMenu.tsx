import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userDataSelector } from "../../redux/slices/userDataSlice";
import styles from "./ProfilePage.module.scss";
import toast from "react-hot-toast";
import AddressServices from "../../services/AddressServices";

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

export default function AddAddressMenu({
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      console.error("User not authenticated");
      return;
    }

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

  const getAddresses = async (): Promise<void> => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("User not authenticated");
      return;
    }

    try {
      const response = await AddressServices.getAddresses(user.id);
      console.log(response.data);
    } catch (error) {
      console.error("Error get addresses:", error);
    }
  };

  useEffect(() => {
    getAddresses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <div className={styles.address}>
              <div className={styles.address_text}>
                <p>Wade Warren</p>
                <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                <p>(406) 555-0120</p>
              </div>

              <button>EDIT</button>
            </div>
            <div className={styles.address}>
              <div className={styles.address_text}>
                <p>Wade Warren</p>
                <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                <p>(406) 555-0120</p>
              </div>

              <button>EDIT</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
