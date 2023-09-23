import { FC } from "react";
import "./Footer.scss";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__nav">
            <h3 className="footer__links-title">Online Shopping</h3>
            <span className="footer__link"> Furnitures </span>
            <nav className="footer__links">
              <a href="#" className="footer__link">
                Men
              </a>
              <a href="#" className="footer__link">
                Woman
              </a>
              <a href="#" className="footer__link">
                Kids
              </a>
              <a href="#" className="footer__link">
                Electronics
              </a>
              <a href="#" className="footer__link">
                Jewellery
              </a>
            </nav>
          </div>
          <div className="footer__nav">
            <h3 className="footer__links-title">Near by shops</h3>
            <nav className="footer__links">
              <a href="#" className="footer__link">
                Near By Fashion
              </a>
              <a href="#" className="footer__link">
                Near By Jewellery
              </a>
              <a href="#" className="footer__link">
                Near By Furnitures
              </a>
              <a href="#" className="footer__link">
                Near By Electronics
              </a>
              <a href="#" className="footer__link">
                Near By All Shops
              </a>
            </nav>
          </div>
          <div className="footer__nav">
            <h3 className="footer__links-title">help & info</h3>
            <nav className="footer__links">
              <a href="#" className="footer__link">
                Track An Order
              </a>
              <a href="#" className="footer__link">
                Contact Us
              </a>
              <a href="#" className="footer__link">
                FAQs
              </a>
              <a href="#" className="footer__link">
                Privacy Policy
              </a>
              <a href="#" className="footer__link">
                Cookie Policy
              </a>
              <a href="#" className="footer__link">
                Shipping Policy
              </a>
              <a href="#" className="footer__link">
                Terms & Conditions
              </a>
            </nav>
            <span className="footer__link"> Help & Support </span>
          </div>
          <div className="footer__contacts">
            <div className="footer__email">
              <h3 className="footer__links-title">email</h3>
              <span className="footer__link">Gldcart@gmail.com</span>
            </div>
            <div className="footer__socials">
              <h3 className="footer__links-title">social links</h3>
              <div className="footer__social-items">
                <a href="#" className="footer__social-item">
                  <img src="HomePage/footer/social-icon1.svg" alt="Social" />
                </a>
                <a href="#" className="footer__social-item">
                  <img src="HomePage/footer/social-icon2.png" alt="Social" />
                </a>
                <a href="#" className="footer__social-item">
                  <img src="HomePage/footer/social-icon3.svg" alt="Social" />
                </a>
                <a href="#" className="footer__social-item">
                  <img src="HomePage/footer/social-icon4.svg" alt="Social" />
                </a>
              </div>
            </div>
            <div className="footer__download">
              <h3 className="footer__links-title">Download App</h3>
              <div className="footer__download-services">
                <a href="#" className="footer__download-qr">
                  <img src="HomePage/footer/qr.jpg" alt="Image" />
                </a>
                <div className="footer__download-stores">
                  <a className="footer__download-store" href="#">
                    <img src="HomePage/footer/AppStore.png" alt="Image" />
                  </a>
                  <a className="footer__download-store" href="#">
                    <img src="HomePage/footer/GooglePlay.png" alt="Image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="footer__container">
          <div className="footer__copyright-content">
            <div className="footer__trialshoopy">
              <h4 className="footer__trialshoopy-title">trialshoopy accepts</h4>
              <div className="footer__trialshoopy-items">
                <img src="HomePage/footer/cards/visa.png" alt="Visa" />
                <img
                  src="HomePage/footer/cards/mastercard.png"
                  alt="Master Card"
                />
                <img src="HomePage/footer/cards/bhim.png" alt="BHIM UPI" />
                <img src="HomePage/footer/cards/r.png" alt=" R" />
              </div>
            </div>
            <div className="footer__reserved">
              <p className="footer__reserved-text">
                2023 WWW.TrailShoppy.com. All right reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
