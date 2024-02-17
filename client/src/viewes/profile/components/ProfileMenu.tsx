import React, { FormEvent } from "react";
import styles from "../ProfilePage.module.scss";
import {logout, userDataSelector} from "../../../store/slices/userDataSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {useInput} from "../../../hooks/useInput/useInput.tsx";
import {ProfileService} from "../../../services/ProfileService.ts";

export default function ProfileMenu() {
  const user = useSelector(userDataSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useInput('');
  const surname = useInput('');
  const email = useInput('');
  const phoneNumber = useInput('');
  const address = useInput('');
  const bio = useInput('');

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await ProfileService.updateProfileData({
        id: user.id,
        email: email.value,
        name: name.value,
        surname: surname.value,
        phone_number: phoneNumber.value,
        address: address.value,
        BIO: bio.value,
      });

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
          <form className={styles.box_inputs} onSubmit={submitHandler}>
            <div className={styles.inputs_column}>
              <input
                className={styles.input}
                placeholder="Eleanor"
                type="text"
                name="name"
                value={name.value}
                onChange={name.onChange}
              />
              <input
                className={styles.input}
                placeholder="Pena"
                type="text"
                name="surname"
                value={surname.value}
                onChange={surname.onChange}
              />
            </div>
            <input
              placeholder="alma.lawson@example.com"
              className={styles.input}
              type="text"
              name="email"
              value={email.value}
              onChange={email.onChange}
            />
            <input
              placeholder="0123 456 7889"
              className={styles.input}
              type="text"
              name="phone_number"
              value={phoneNumber.value}
              onChange={phoneNumber.onChange}
            />
            <input
              placeholder="3304 Randall Drive"
              className={styles.input}
              type="text"
              name="address"
              value={address.value}
              onChange={address.onChange}
            />
            <input
              placeholder="Hi there, this is my bio..."
              className={styles.input}
              type="text"
              name="BIO"
              value={bio.value}
              onChange={bio.onChange}
            />
            <div className={styles.button}>
              <button type="submit">Update Profile</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
}
