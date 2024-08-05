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

const Footer = () => {
  return (
    <footer className="bg-black pt-[56px]">
      <div className="max-w-[1240px] pb-[25px] px-[20px] mx-auto">
        <div className="flex justify-between flex-wrap gap-[20px]">
          <div className="flex flex-col">
            <h3 className="w-full text-center text-white text-[20px] uppercase mb-[10px] font-medium">Online Shopping</h3>
            <a href="#" className="text-white hover:text-red-500 mt-[20px] transition-all">
              Furniture's
            </a>
            <nav className="flex flex-col gap-[15px] mt-[20px]">
              <a href="#" className="text-white hover:text-red-500 leading-normal transition-all">
                Men
              </a>
              <a href="#" className="text-white hover:text-red-500 leading-normal transition-all">
                Woman
              </a>
              <a href="#" className="text-white hover:text-red-500 leading-normal transition-all">
                Kids
              </a>
              <a href="#" className="text-white hover:text-red-500 leading-normal transition-all">
                Electronics
              </a>
              <a href="#" className="text-white hover:text-red-500 leading-normal transition-all">
                Jewellery
              </a>
            </nav>
          </div>
          <div className="flex flex-col">
            <h3 className="w-full text-center text-white text-[20px] uppercase mb-[10px] font-medium">Near by shops</h3>
            <nav className="flex flex-col gap-[15px] mt-[20px]">
              <a href="#" className="text-white hover:text-red-500 leading-normal transition-all">
                Near By Fashion
              </a>
              <a href="#" className="text-white hover:text-red-500 leading-normal transition-all">
                Near By Jewellery
              </a>
              <a href="#" className="text-white hover:text-red-500 leading-normal transition-all">
                Near By Furniture's
              </a>
              <a href="#" className="text-white hover:text-red-500 leading-normal transition-all">
                Near By Electronics
              </a>
              <a href="#" className="text-white hover:text-red-500 leading-normal transition-all">
                Near By All Shops
              </a>
            </nav>
          </div>
          <div className="flex max-w-[156px] flex-col gap-[15px]">
            <h3 className="w-full text-white text-[20px] uppercase mb-[10px] font-medium">help & info</h3>
            <nav className="flex flex-col gap-[15px]">
              <Link to="/track-order" className="text-white hover:text-red-500 leading-normal transition-all">
                Track An Order
              </Link>
              <Link to="/contact-us" className="text-white hover:text-red-500 leading-normal transition-all">
                Contact Us
              </Link>
              <Link to="/faqs" className="text-white hover:text-red-500 leading-normal transition-all">
                FAQs
              </Link>
              <Link to="/privacy-policy" className="text-white hover:text-red-500 leading-normal transition-all">
                Privacy Policy
              </Link>
              <Link to="/cookie-policy" className="text-white hover:text-red-500 leading-normal transition-all">
                Cookie Policy
              </Link>
              <Link to="/shipping-policy" className="text-white hover:text-red-500 leading-normal transition-all">
                Shipping Policy
              </Link>
              <Link to="/terms-conditions" className="text-white hover:text-red-500 leading-normal transition-all">
                Terms & Conditions
              </Link>
            </nav>
            <Link to="/help-center" className="text-white hover:text-red-500 leading-normal transition-all">
              Help & Support
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-[25px] mb-[25px]">
              <h3 className="w-full text-white text-[20px] uppercase mb-[10px] font-medium">email</h3>
              <a href={'mailto:contact@Gldcard.com'} className="text-white">Gldcartsrcgmail.com</a>
            </div>
            <div className="flex flex-col mb-[25px]">
              <h3 className="w-full text-white text-[20px] uppercase mb-[25px] font-medium">social links</h3>
              <div className="flex gap-[15px] items-center">
                <a href="#">
                  <img src={imageSocial1} alt="Social" />
                </a>
                <a href="#">
                  <img src={imageSocial2} alt="Social" />
                </a>
                <a href="#">
                  <img src={imageSocial3} alt="Social" />
                </a>
                <a href="#">
                  <img src={imageSocial4} alt="Social" />
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="w-full text-white text-[20px] uppercase mb-[25px] font-medium">Download App</h3>
              <div className="flex gap-[10px]">
                <a href="#">
                  <img src={imageQR} alt="Image" />
                </a>
                <div className="flex flex-col gap-[5px]">
                  <a href="#">
                    <img src={imageAppStore} alt="Image" />
                  </a>
                  <a href="#">
                    <img src={imageGooglePlay} alt="Image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'py-[25px] border-t border-solid border-white'}>
        <div className="max-w-[1240px] px-[20px] mx-auto">
          <div className="flex justify-between gap-[40px] flex-wrap items-center">
            <div className="flex max-w-[290px] flex-col justify-center md:justify-start gap-2 w-full md:items-start items-center">
              <h4 className="text-white uppercase mb-[10px]">Trialshoopy accepts</h4>
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
            <div className="flex max-w-[400px] justify-center md:justify-start gap-2 w-full items-center">
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
