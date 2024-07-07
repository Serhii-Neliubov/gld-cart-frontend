import { FC } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

import imageSocial1 from "@/assets/images/HomePage/footer/social-icon1.svg";
import imageSocial2 from "@/assets/images/HomePage/footer/social-icon2.png";
import imageSocial3 from "@/assets/images/HomePage/footer/social-icon3.svg";
import imageSocial4 from "@/assets/images/HomePage/footer/social-icon4.svg";
import imageQR from "@/assets/images/HomePage/footer/qr.jpg";
import imageAppStore from "@/assets/images/HomePage/footer/AppStore.png";
import imageGooglePlay from "@/assets/images/HomePage/footer/GooglePlay.png";
import imageVisa from "@/assets/images/HomePage/footer/cards/visa.png";
import imageMasterCard from "@/assets/images/HomePage/footer/cards/mastercard.png";
import imageBHIM from "@/assets/images/HomePage/footer/cards/bhim.png";
import imageR from "@/assets/images/HomePage/footer/cards/r.png";
import iconCopyright from "@/assets/images/icon-copyright.png";


const Footer: FC = () => {
  return (
    <footer className="bg-black pt-[56px]">
      <div className="max-w-[1240px] px-[20px] mx-auto">
        <div className="flex justify-between flex-wrap gap-[20px]">
          <div className="flex flex-col">
            <h3 className=" w-full text-center text-white text-[20px] uppercase mb-[10px] font-medium">Online Shopping</h3>
            <a href="#" className="footer__link">
              Furniture's
            </a>
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
                Near By Furniture's
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
              <Link to="/track-an-order" className="footer__link">
                Track An Order
              </Link>
              <Link to="/contact-us" className="footer__link">
                Contact Us
              </Link>
              <Link to="/faq-s" className="footer__link">
                FAQs
              </Link>
              <Link to="/privacy-policy" className="footer__link">
                Privacy Policy
              </Link>
              <Link to="/cookie-policy" className="footer__link">
                Cookie Policy
              </Link>
              <Link to="/shipping-policy" className="footer__link">
                Shipping Policy
              </Link>
              <Link to="/terms-and-conditions" className="footer__link">
                Terms & Conditions
              </Link>
            </nav>
            <Link to="/help-and-support" className="footer__link">
              Help & Support
            </Link>
          </div>
          <div className="footer__contacts">
            <div className="footer__email">
              <h3 className="footer__links-title">email</h3>
              <a href={'mailto:contact@Gldcard.com'} className="footer__link-mail">Gldcartsrcgmail.com</a>
            </div>
            <div className="footer__socials">
              <h3 className="footer__links-title">social links</h3>
              <div className="footer__social-items">
                <a href="#" className="footer__social-item">
                  <img src={imageSocial1} alt="Social" />
                </a>
                <a href="#" className="footer__social-item">
                  <img src={imageSocial2} alt="Social" />
                </a>
                <a href="#" className="footer__social-item">
                  <img src={imageSocial3} alt="Social" />
                </a>
                <a href="#" className="footer__social-item">
                  <img src={imageSocial4} alt="Social" />
                </a>
              </div>
            </div>
            <div className="footer__download">
              <h3 className="footer__links-title">Download App</h3>
              <div className="footer__download-services">
                <a href="#" className="footer__download-qr">
                  <img src={imageQR} alt="Image" />
                </a>
                <div className="footer__download-stores">
                  <a className="footer__download-store" href="#">
                    <img src={imageAppStore} alt="Image" />
                  </a>
                  <a className="footer__download-store" href="#">
                    <img src={imageGooglePlay} alt="Image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="max-w-[1240px] px-[20px] mx-auto">
          <div className="flex justify-between gap-[40px] flex-wrap items-center">
            <div className="flex flex-col justify-center md:justify-start gap-2 w-full md:items-start items-center">
              <h4 className="footer__trialshoopy-title">Trialshoopy accepts</h4>
              <div className="flex gap-8 md:gap-4">
                <img src={imageVisa} alt="Visa" />
                <img
                  src={imageMasterCard}
                  alt="Master Card"
                />
                <img src={imageBHIM} alt="BHIM UPI" />
                <img src={imageR} alt=" R" />
              </div>
            </div>
            <div className="flex justify-center md:justify-start gap-2 w-full items-center">
              <img src={iconCopyright} alt={'Icon copyright'} className={'w-[20px] h-[20px]'}/>
              <p className={'text-[#CFCFCF]'}>
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
