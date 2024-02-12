import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "../ProfilePage.module.scss";
import {logout, userDataSelector} from "../../../redux/slices/userDataSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {IProfileData} from "../../../models/IProfileData.ts";
import {ChangeProfileDataServices} from "../../../services/ChangeProfileDataServices.ts";

const ClearProfileData = {
  name: "",
  surname: "",
  email: "",
  phone_number: "",
  address: "",
  BIO: "",
}

export default function ChangeProfileData() {
  const user = useSelector(userDataSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<IProfileData>({id: user.id, ...ClearProfileData});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await ChangeProfileDataServices.updateProfileData(formData);

      dispatch(logout());

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <React.Fragment>
        <h1 className={styles.title}>
          Welcome Mr. {user.name} {user.surname}
        </h1>
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
      </React.Fragment>
    );
}
