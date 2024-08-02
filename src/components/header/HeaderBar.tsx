import React, {ChangeEvent, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import i18n, {t} from "i18next";

import imageLogoURL from "@/assets/images/HomePage/header/logo.png";
import searchIcon from "@/assets/images/HomePage/header/search-icon.svg";
import imageArrowDown from "@/assets/images/HomePage/header/arrow-down.svg";
import {useDebounce} from "@uidotdev/usehooks";
import $api from "@/utils/interceptors.ts";
import toast from "react-hot-toast";

const languages = ["English", "Russian", "Ukrainian", "German"];

const languageCodes: { [key: string]: string } = {
    English: "en",
    Russian: "ru",
    Ukrainian: "ua",
    German: "de",
};

export const HeaderBar = () => {
    const [openLanguageModal, setOpenLanguageModal] = useState<boolean>(false);
    const [language, setLanguage] = useState<string>("English");
    const [searchTerm, setSearchTerm] = useState('');

    const debouncedSearchTerm = useDebounce(searchTerm, 500);


    const searchProductHandler = async (value: string) => {
        if(value) {
            try{
                const response = await $api.get(`/search?query=${value}`);
                console.log(response.data);
            } catch (e) {
                toast.error(`Item does not exist!`);
            }
        }
    };

    useEffect(() => {
        searchProductHandler(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    const changeLanguage = (newLanguage: string): void => {
        i18n.changeLanguage(languageCodes[newLanguage]);
        setLanguage(newLanguage);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="px-[20px] bg-white py-[50px]">
            <div className="flex max-w-[1255px] mx-auto items-center justify-between gap-[16px]">
                <Link to="/">
                    <img src={imageLogoURL} alt="Logo" className={'min-w-[60px] min-h-[40px]'}/>
                </Link>
                <div
                    className="py-[7px] w-[540px] px-[20px] flex items-center justify-between gap-[5px] bg-[#F5F5F5] rounded">
                    <input onChange={event => handleChange(event)} placeholder={t("What are you looking for?")}
                           type="text"
                           className={'w-full py-[3px] px-0 sm:px-[10px] bg-[#F5F5F5] outline-none'}/>
                    <img src={searchIcon} alt={'search icon'} className={'w-[24px] h-[24px] block max-[507px]:hidden'}/>
                </div>
                <button
                    onClick={() => setOpenLanguageModal((prev) => !prev)}
                    className="flex items-center gap-[5px] max-[480px]:hidden"
                >
                    <span>{language}</span>
                    <img src={imageArrowDown} alt="arrow down"/>
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
                </button>
            </div>
        </div>
    )
}