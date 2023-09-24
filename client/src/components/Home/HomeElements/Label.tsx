import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Label.scss";

interface NavLinkProps {
  to: string;
  label: string;
}

const navLinks: NavLinkProps[] = [
  { to: "/", label: "Home" },
  { to: "/renting", label: "Renting" },
  { to: "/products", label: "Products" },
  { to: "/personal-services", label: "Professional Services" },
  { to: "/contact-us", label: "Contact Us" },
];

const Label: FC = () => {
  const location = useLocation();

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
          <button className="label__like-btn">
            <img src="like-icon.svg" alt="Like icon" />
          </button>
          <button className="label__trash-btn">
            <img src="trash-icon.svg" alt="Trash icon" />
          </button>
          <Link to="/user-type-page" className="label__profile-btn">
            <img src="profile-icon.svg" alt="Profile icon" />
            {/* <span>John Miller</span> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Label;
