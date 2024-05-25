import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, userDataSelector } from "@store/slices/userDataSlice.ts";
import {useNavigate} from "react-router-dom";
import styles from "../Profile.module.scss";
import {useInput} from "@hooks/useInput/useInput.tsx";
import {PasswordService} from "@services/PasswordService.ts";

export default function PasswordMenu() {
  const user = useSelector(userDataSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newPassword = useInput('');
  const oldPassword = useInput('');
  const confirmPassword = useInput('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await PasswordService.changeOldPassword(newPassword.value, oldPassword.value, user.email, confirmPassword.value);

            if (response && response.success) {
                dispatch(logout());
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

  return (
      <React.Fragment>
        <h2 className={styles.box_name}>Please Enter Your Current Password</h2>
        <div className={styles.content_box_items}>
          <form onSubmit={handleSubmit} className={styles.box_inputs}>
            <input
              placeholder="Old Password"
              className={styles.input}
              type="password"
              name="oldPassword"
              value={oldPassword.value}
              onChange={oldPassword.onChange}
            />
            <input
              placeholder="New Password"
              className={styles.input}
              name="newPassword"
              type="password"
              value={newPassword.value}
              onChange={newPassword.onChange}
            />
            <input
              placeholder="Confirm New Password"
              className={styles.input}
              name="confirmPassword"
              type="password"
              value={confirmPassword.value}
              onChange={confirmPassword.onChange}
            />
            <div className={styles.button}>
              <button type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
  );
}
