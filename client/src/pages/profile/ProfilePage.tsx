import { Link } from "react-router-dom";
import Footer from "../../components/UI/Footer";
import styles from "./ProfilePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { logout, userDataSelector } from "../../redux/Slices/userDataSlice";
import { FC, useState } from "react";
import React from "react";

const ProfilePage: FC = () => {
  const user = useSelector(userDataSelector);
  const [selectedLabel, setSelectedLabel] = useState("Profile");
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
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
              <img src="ProfilePage/icon1.svg" alt="icon" />
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
              <img src="ProfilePage/icon2.svg" alt="icon" />
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
                <img src="ProfilePage/icon3.svg" alt="icon" />
                <button>My Orders</button>
              </div>
            )}

            {user.type == "Buyer" && (
              <Link to="/wishlist" className={styles.button_item}>
                <img src="ProfilePage/icon5.svg" alt="icon" />
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
              <img src="ProfilePage/icon6.svg" alt="icon" />
              <button>Change Password</button>
            </div>
            <Link to="/help-and-support" className={styles.button_item}>
              <img src="ProfilePage/icon7.svg" alt="icon" />
              <button>Help & Support</button>
            </Link>
            <Link to="/terms-and-conditions" className={styles.button_item}>
              <img src="ProfilePage/icon8.svg" alt="icon" />
              <button>Terms & conditions</button>
            </Link>
            <Link to="/contact-us" className={styles.button_item}>
              <img src="ProfilePage/icon9.svg" alt="icon" />
              <button>Contact Us</button>
            </Link>
            <Link
              to="/"
              onClick={() => dispatch(logout())}
              className={styles.button_item}
            >
              <img src="ProfilePage/icon10.svg" alt="icon" />
              <button>Logout</button>
            </Link>
          </div>
          <div className={styles.content}>
            <div className={styles.content_box}>
              {selectedLabel === "Profile" && (
                <>
                  <h1 className={styles.title}>
                    Welcome Mr. {user.name} {user.surname}
                  </h1>
                  <h2 className={styles.box_name}>Personal Details</h2>
                  <div className={styles.content_box_items}>
                    <div className={styles.box_inputs}>
                      <div className={styles.inputs_column}>
                        <input
                          className={styles.input}
                          placeholder="Eleanor Pena"
                          type="text"
                        />
                        <input
                          placeholder="alma.lawson@example.com"
                          className={styles.input}
                          type="text"
                        />
                      </div>
                      <input
                        placeholder="0123 456 7889"
                        className={styles.input}
                        type="text"
                      />
                      <input
                        placeholder="3304 Randall Drive"
                        className={styles.input}
                        type="text"
                      />
                      <input
                        placeholder="Hi there, this is my bio..."
                        className={styles.input}
                        type="text"
                      />
                    </div>
                    <div className={styles.button}>
                      <button className={styles.button}>Update Profile</button>
                    </div>
                  </div>
                </>
              )}
              {selectedLabel === "Change Password" && (
                <>
                  <h2 className={styles.box_name}>
                    Please Enter Your Current Password
                  </h2>
                  <div className={styles.content_box_items}>
                    <div className={styles.box_inputs}>
                      <input
                        placeholder="Old Password"
                        className={styles.input}
                        type="password"
                      />
                      <input
                        placeholder="New Password"
                        className={styles.input}
                        type="password"
                      />
                      <input
                        placeholder="Confirm New Password"
                        className={styles.input}
                        type="password"
                      />
                    </div>
                    <div className={styles.button}>
                      <button className={styles.button}>Update</button>
                    </div>
                  </div>
                </>
              )}
              {selectedLabel === "Address" && (
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
                    <button>+ Add New Address</button>
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
                      {/* <div className={styles.address}>
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
                      </div> */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
