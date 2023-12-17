import { Link } from "react-router-dom";
import Footer from "../../components/UI/Footer";
import styles from "./ProfilePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { logout, userDataSelector } from "../../redux/Slices/userDataSlice";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import React from "react";
import ChangePasswordMenu from "./ChangePasswordMenu";
import axios from "axios";
import { API_URL } from "../../http";

const ProfilePage: FC = () => {
  const user = useSelector(userDataSelector);
  const [selectedLabel, setSelectedLabel] = useState("Profile");
  const dispatch = useDispatch<AppDispatch>();

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
  };

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
              )}

              <ChangePasswordMenu selectedLabel={selectedLabel} />
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
