import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, userDataSelector } from "../../../redux/slices/userDataSlice.ts";
import {useNavigate} from "react-router-dom";
import styles from "../ProfilePage.module.scss";
import {PasswordServices} from "../../../services/PasswordServices.ts";

const clearPasswordData = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
}

export default function ChangePasswordMenu() {
  const user = useSelector(userDataSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [changePasswordData, setChangePasswordData] = useState({...clearPasswordData, email: user.email});

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await PasswordServices.changeOldPassword(changePasswordData.newPassword, changePasswordData.oldPassword, changePasswordData.email, changePasswordData.confirmPassword);

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
              value={changePasswordData.oldPassword}
              onChange={(e) =>
                setChangePasswordData({
                  ...changePasswordData,
                  oldPassword: e.target.value,
                })
              }
            />
            <input
              placeholder="New Password"
              className={styles.input}
              name="newPassword"
              type="password"
              value={changePasswordData.newPassword}
              onChange={(e) =>
                setChangePasswordData({
                  ...changePasswordData,
                  newPassword: e.target.value,
                })
              }
            />
            <input
              placeholder="Confirm New Password"
              className={styles.input}
              name="confirmPassword"
              type="password"
              value={changePasswordData.confirmPassword}
              onChange=  {(e) =>
                setChangePasswordData({
                  ...changePasswordData,
                  confirmPassword: e.target.value,
                })
              }
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
