import { Link } from "react-router-dom";
import Footer from "@/components/footer/Footer.tsx";
import styles from "./ProfilePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store.ts";
import { logout, userDataSelector } from "@/store/slices/userDataSlice.ts";
import { FC, useState } from "react";
import React from "react";
import PasswordMenu from "./components/PasswordMenu.tsx";
import ProfileMenu from "./components/ProfileMenu.tsx";
import AddressMenu from "./components/AddressMenu.tsx";

import imageProfileIcon1 from '@/assets/images/ProfilePage/icon1.svg'
import imageProfileIcon2 from '@/assets/images/ProfilePage/icon2.svg'
import imageProfileIcon3 from '@/assets/images/ProfilePage/icon3.svg'
import imageProfileIcon5 from '@/assets/images/ProfilePage/icon5.svg'
import imageProfileIcon6 from '@/assets/images/ProfilePage/icon6.svg'
import imageProfileIcon7 from '@/assets/images/ProfilePage/icon7.svg'
import imageProfileIcon8 from '@/assets/images/ProfilePage/icon8.svg'
import imageProfileIcon9 from '@/assets/images/ProfilePage/icon9.svg'
import imageProfileIcon10 from '@/assets/images/ProfilePage/icon10.svg'


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
              <img src={imageProfileIcon1} alt="icon" />
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
              <img src={imageProfileIcon2} alt="icon" />
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
                <img src={imageProfileIcon3} alt="icon" />
                <button>My Orders</button>
              </div>
            )}
            {user.type == "Buyer" && (
              <Link to="/wishlist" className={styles.button_item}>
                <img src={imageProfileIcon5} alt="icon" />
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
              <img src={imageProfileIcon6} alt="icon" />
              <button>Change Password</button>
            </div>
            <Link to="/help-and-support" className={styles.button_item}>
              <img src={imageProfileIcon7} alt="icon" />
              <button>Help & Support</button>
            </Link>
            <Link to="/terms-and-conditions" className={styles.button_item}>
              <img src={imageProfileIcon8} alt="icon" />
              <button>Terms & conditions</button>
            </Link>
            <Link to="/contact-us" className={styles.button_item}>
              <img src={imageProfileIcon9} alt="icon" />
              <button>Contact Us</button>
            </Link>
            <Link
              to="/"
              onClick={() => dispatch(logout())}
              className={styles.button_item}
            >
              <img src={imageProfileIcon10} alt="icon" />
              <button>Logout</button>
            </Link>
          </div>
          <div className={styles.content}>
            <div className={styles.content_box}>
              {selectedLabel === 'Profile' && <ProfileMenu />}
              {selectedLabel === 'Change Password' && <PasswordMenu />}
              <AddressMenu selectedLabel={selectedLabel} setSelectedLabel={setSelectedLabel}/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ProfilePage;
