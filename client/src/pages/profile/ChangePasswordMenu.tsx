import axios from "axios";
import React, { FormEvent, useState } from "react";
import { API_URL } from "../../http";
import { useDispatch, useSelector } from "react-redux";
import { logout, userDataSelector } from "../../redux/Slices/userDataSlice";
import { useNavigate } from "react-router-dom";
import styles from "./ProfilePage.module.scss";

type ChangePasswordMenuProps = {
  selectedLabel: string;
};

export default function ChangePasswordMenu({
  selectedLabel,
}: ChangePasswordMenuProps) {
  const user = useSelector(userDataSelector);
  const [changePasswordData, setChangePasswordData] = useState({
    email: user.email,
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      axios.post(`${API_URL}/reset-password`, {
        email: changePasswordData.email,
        oldPassword: changePasswordData.oldPassword,
        newPassword: changePasswordData.newPassword,
      });
      dispatch(logout());
      navigate("/login");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    selectedLabel === "Change Password" && (
      <>
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
              onChange={(e) =>
                setChangePasswordData({
                  ...changePasswordData,
                  confirmPassword: e.target.value,
                })
              }
            />
            <div className={styles.button}>
              <button type="submit" className={styles.button}>
                Update
              </button>
            </div>
          </form>
        </div>
      </>
    )
  );
}