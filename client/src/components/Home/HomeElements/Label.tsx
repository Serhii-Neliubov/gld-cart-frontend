import { Link, useLocation } from "react-router-dom";
import "./Label.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { selectIsAuth } from "../../../redux/Slices/userDataSlice";

interface NavLinkProps {
  to: string;
  label: string;
}

const Label = () => {
  const location = useLocation();
  const isVendor = useSelector((state: RootState) => state.isVendor.value);
  const isAuth = useSelector(selectIsAuth);

  const navLinks: NavLinkProps[] = [
    { to: "/", label: "Home" },
    {
      to: isVendor ? "/renting-category-page" : "/renting",
      label: "renting",
    },
    {
      to: isVendor ? "/products-category-page" : "/products",
      label: "Products",
    },
    { to: "/personal-services", label: "Professional Services" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  return (
    <div className="page__label label">
      <div className="label__container">
        <h2 className="label__title">Exclusive</h2>
        <div className="label__menu">
          <nav className="label__body">
            <ul className="label__list">
              {navLinks.map((navLink) => (
                <li className="label__item" key={navLink.to}>
                  <Link
                    to={navLink.to}
                    className={`label__link ${
                      location.pathname === navLink.to
                        ? "label__link_active"
                        : ""
                    }`}
                  >
                    {navLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="label__actions">
          {isVendor ? null : (
            <>
              <Link to="/wishlist-no-found" className="label__like-btn">
                <img src="like-icon.svg" alt="Like icon" />
              </Link>
              <Link to="/shopping-cart-no-found" className="label__trash-btn">
                <img src="trash-icon.svg" alt="Trash icon" />
              </Link>
            </>
          )}

          <Link
            to={isAuth ? "/profile" : "/user-type-page"}
            className="label__profile-btn"
          >
            <img src="profile-icon.svg" alt="Profile icon" />
            {/* <span>John Miller</span> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Label;
