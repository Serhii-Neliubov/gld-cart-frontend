import { Link } from "react-router-dom";
import Footer from "../../components/UI/Footer";
import styles from "./ProfilePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { logout, userDataSelector } from "../../redux/Slices/userDataSlice";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import React from "react";
import ChangePasswordMenu from "./ChangePasswordMenu";
import ChangeProfileData from "./ChangeProfileData";
import AuthService from "../../services/AuthService";

const ProfilePage: FC = () => {
  const user = useSelector(userDataSelector);
  const [selectedLabel, setSelectedLabel] = useState("Profile");
  const dispatch = useDispatch<AppDispatch>();

  const [addressMenuOpen, setAddressMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    email: user.email,
    recipient: "",
    street: "",
    city: "",
    country: "",
    zip: 0,
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if the user is authenticated
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("User not authenticated");
      // Handle the case where the user is not authenticated
      return;
    }

    try {
      // Attempt to send the address with the authentication token
      const response = await AuthService.sendAddress(
        formData.email,
        formData.recipient,
        formData.street,
        formData.city,
        formData.country,
        formData.zip,
        formData.phone
      );

      // Log the response (for debugging purposes)
      console.log("Address sent successfully:", response);

      // Optionally, you can handle the response data or perform other actions
    } catch (error) {
      console.error("Error sending address:", error);

      // Handle the error (e.g., show an error message to the user)
    }
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
              <ChangeProfileData selectedLabel={selectedLabel} />
              <ChangePasswordMenu selectedLabel={selectedLabel} />

              {addressMenuOpen ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div className={styles.title_action}>
                    <h2 className={styles.box_name}>ADDRESS</h2>
                    <button onClick={() => setAddressMenuOpen(false)}>
                      Return
                    </button>
                  </div>
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                      placeholder="Recipients name"
                      className={styles.input}
                      type="text"
                      name="recipient"
                      value={formData.recipient}
                      onChange={handleChange}
                    />
                    <input
                      placeholder="Street"
                      className={styles.input}
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                    />
                    <input
                      placeholder="City"
                      className={styles.input}
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    <input
                      placeholder="Country"
                      className={styles.input}
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                    <input
                      placeholder="ZIP Code"
                      className={styles.input}
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                    />
                    <input
                      placeholder="Phone number"
                      className={styles.input}
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <button className={styles.sendbutton} type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              ) : (
                selectedLabel === "Address" && (
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
                      <button onClick={() => setAddressMenuOpen(true)}>
                        + Add New Address
                      </button>
                    </div>
                    <div className={styles.address_content}>
                      <div className={styles.address_box}>
                        <div className={styles.address}>
                          <div className={styles.address_text}>
                            <p>Wade Warren</p>
                            <p>
                              2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                            </p>
                            <p>(406) 555-0120</p>
                          </div>

                          <button>EDIT</button>
                        </div>
                        <div className={styles.address}>
                          <div className={styles.address_text}>
                            <p>Wade Warren</p>
                            <p>
                              2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                            </p>
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
                )
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
