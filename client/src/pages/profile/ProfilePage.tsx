import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer.tsx";
import styles from "./ProfilePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { logout, userDataSelector } from "../../redux/slices/userDataSlice";
import { FC, useState } from "react";
import React from "react";
import ChangePasswordMenu from "./components/ChangePasswordMenu.tsx";
import ChangeProfileData from "./components/ChangeProfileData.tsx";
import AddAddressMenu from "./components/AddAddressMenu.tsx";

const ProfilePage: FC = () => {
  const user = useSelector(userDataSelector);
  const [selectedLabel, setSelectedLabel] = useState("Profile");
  const dispatch = useDispatch<AppDispatch>();

  return (
    <React.Fragment>
      <div className="__container">
        <div className={styles.body}>
          <div className={styles.sidebar}>
            <div
              onClick={() => setSelectedLabel("Profile")}
              className={
                selectedLabel === "Profile"
                  ? styles.button_item_active
                  : styles.button_item
              }
            >
              <img src="/ProfilePage/icon1.svg" alt="icon" />
              <button>Profile</button>
            </div>
            <div
              onClick={() => setSelectedLabel("Address")}
              className={
                selectedLabel === "Address"
                  ? styles.button_item_active
                  : styles.button_item
              }
            >
              <img src="/ProfilePage/icon2.svg" alt="icon" />
              <button>Address</button>
            </div>
            {user.type == "Buyer" && (
              <div
                onClick={() => setSelectedLabel("My Orders")}
                className={
                  selectedLabel === "My Orders"
                    ? styles.button_item_active
                    : styles.button_item
                }
              >
                <img src="/ProfilePage/icon3.svg" alt="icon" />
                <button>My Orders</button>
              </div>
            )}
            {user.type == "Buyer" && (
              <Link to="/wishlist" className={styles.button_item}>
                <img src="/ProfilePage/icon5.svg" alt="icon" />
                <button>Wishlist</button>
              </Link>
            )}
            <div
              onClick={() => setSelectedLabel("Change Password")}
              className={
                selectedLabel === "Change Password"
                  ? styles.button_item_active
                  : styles.button_item
              }
            >
              <img src="/ProfilePage/icon6.svg" alt="icon" />
              <button>Change Password</button>
            </div>
            <Link to="/help-and-support" className={styles.button_item}>
              <img src="/ProfilePage/icon7.svg" alt="icon" />
              <button>Help & Support</button>
            </Link>
            <Link to="/terms-and-conditions" className={styles.button_item}>
              <img src="/ProfilePage/icon8.svg" alt="icon" />
              <button>Terms & conditions</button>
            </Link>
            <Link to="/contact-us" className={styles.button_item}>
              <img src="/ProfilePage/icon9.svg" alt="icon" />
              <button>Contact Us</button>
            </Link>
            <Link
              to="/"
              onClick={() => dispatch(logout())}
              className={styles.button_item}
            >
              <img src="/ProfilePage/icon10.svg" alt="icon" />
              <button>Logout</button>
            </Link>
          </div>
          <div className={styles.content}>
            <div className={styles.content_box}>
              {selectedLabel === 'Profile' && <ChangeProfileData />}
              {selectedLabel === 'Change Password' && <ChangePasswordMenu />}
              <AddAddressMenu selectedLabel={selectedLabel} setSelectedLabel={setSelectedLabel}/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ProfilePage;
