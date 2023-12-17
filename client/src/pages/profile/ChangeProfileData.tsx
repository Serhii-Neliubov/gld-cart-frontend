import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./ProfilePage.module.scss";
import { logout, userDataSelector } from "../../redux/Slices/userDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../http";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type ChangeProfileDataProps = {
  selectedLabel: string;
};

export default function ChangeProfileData({
  selectedLabel,
}: ChangeProfileDataProps) {
  const user = useSelector(userDataSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: user.id,
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    address: "",
    BIO: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.put(`${API_URL}/update-personal-details`, formData);
    dispatch(logout());
    navigate("/");
  };

  return (
    selectedLabel === "Profile" && (
      <>
        <div className={styles.title}>
          <h1>
            Welcome Mr. {user.name} {user.surname}
          </h1>
        </div>

        <h2 className={styles.box_name}>Personal Details</h2>
        <div className={styles.content_box_items}>
          <form className={styles.box_inputs} onSubmit={handleSubmit}>
            <div className={styles.inputs_column}>
              <input
                className={styles.input}
                placeholder="Eleanor"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                className={styles.input}
                placeholder="Pena"
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>
            <input
              placeholder="alma.lawson@example.com"
              className={styles.input}
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              placeholder="0123 456 7889"
              className={styles.input}
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
            <input
              placeholder="3304 Randall Drive"
              className={styles.input}
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              placeholder="Hi there, this is my bio..."
              className={styles.input}
              type="text"
              name="BIO"
              value={formData.BIO}
              onChange={handleChange}
            />
            <div className={styles.button}>
              <button type="submit">Update Profile</button>
            </div>
          </form>
        </div>
      </>
    )
  );
}
