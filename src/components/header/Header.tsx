import { ChangeEvent, FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.scss";
import { Link } from "react-router-dom";
import imageLogoURL from '@/assets/images/HomePage/header/logo.png'
import imageArrowDown from '@/assets/images/HomePage/header/arrow-down.svg'
import { useDebounce } from "@uidotdev/usehooks";
import toast from "react-hot-toast";
import axios from "axios";
import { API_URL } from "@/utils/interceptors/interceptors.ts";

const languages = ["English", "Russian", "Ukrainian", "German"];

const languageCodes: { [key: string]: string } = {
  English: "en",
  Russian: "ru",
  Ukrainian: "ua",
  German: "de",
};

const Header: FC = () => {
  const [openLanguageModal, setOpenLanguageModal] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("English");
  const [searchTerm, setSearchTerm] = useState('');

  const { t, i18n } = useTranslation();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const changeLanguage = (newLanguage: string): void => {
    i18n.changeLanguage(languageCodes[newLanguage]);
    setLanguage(newLanguage);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const searchProductHandler = async (value: string) => {
    if(value) {
      try{
        const response = await axios.get(`${API_URL}/search?query=${value}`);
        console.log(response.data);
      } catch (e) {
        toast.error(`Item does not exist!`);
      }
    }
  };

  useEffect(() => {
    searchProductHandler(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={imageLogoURL} alt="Logo" />
        </Link>
        <div className="header__input">
          <input onChange={event => handleChange(event)} placeholder={t("What are you looking for?")} type="text" />
          <button className="header__search-btn" />
        </div>
        <div
          onClick={() => setOpenLanguageModal((prev) => !prev)}
          className="header__button-lang"
        >
          <span>{language}</span>
          <img src={imageArrowDown} alt="arrow down" />
          {openLanguageModal && (
            <div className="header__language-modal">
              {languages
                .filter((lang) => lang !== language)
                .map((lang) => (
                  <div
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className="header__language-modal-elem"
                  >
                    {lang}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
