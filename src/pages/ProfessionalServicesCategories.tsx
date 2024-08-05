import React from "react";
import {t} from "i18next";
import {Link} from "react-router-dom";

import useDefaultScrollPosition from "hooks/useDefaultScrollPosition.tsx";

import cleaningImg from "assets/images/professional-services/img1.png";
import repairingImg from "assets/images/professional-services/img2.png";
import gardeningImg from "assets/images/professional-services/img3.png";
import treeCuttingImg from "assets/images/professional-services/img4.png";
import lawnServicesImg from "assets/images/professional-services/img5.png";
import handymanImg from "assets/images/professional-services/img6.png";
import snowRemovalImg from "assets/images/professional-services/img7.png";
import pestControlImg from "assets/images/professional-services/img8.png";
import electricalImg from "assets/images/professional-services/img9.png";

const categories = [
    {
        name: t("Cleaning"),
        image: cleaningImg,
        category: "cleaning",
    },
    {
        name: t("Repairing"),
        image: repairingImg,
        category: "repairing",
    },
    {
        name: t("Gardening"),
        image: gardeningImg,
        category: "gardening",
    },
    {
        name: t("Tree Cutting"),
        image: treeCuttingImg,
        category: "treeCutting",
    },
    {
        name: t("Lawn Services"),
        image: lawnServicesImg,
        category: "lawnServices",
    },
    {
        name: t("Handyman"),
        image: handymanImg,
        category: "handyman",
    },
    {
        name: t("Snow Removal"),
        image: snowRemovalImg,
        category: "snowRemoval",
    },
    {
        name: t("Pest Control"),
        image: pestControlImg,
        category: "pestControl",
    },
    {
        name: t("Electrical"),
        image: electricalImg,
        category: "electrical",
    },
]

const ProfessionalServicesCategories = () => {
  useDefaultScrollPosition();

  return (
    <div className="max-w-[1240px] pb-[50px] sm:pb-[130px] px-[20px] justify-center items-center mx-auto">
        <h1 className={'text-[36px] mt-[25px] flex-wrap justify-center mb-[50px] font-medium flex gap-4'}>
            {t('Select')}
            <span className={'uppercase text-[#02A0A0] text-center'}>{t('professional services')}</span>
            {t('Category')}
        </h1>
        <div className={'flex flex-wrap gap-[40px] justify-center'}>
          {categories.map((category, index) => (
            <Link key={index} to={`/professional-services/${category.category}`} className={'bg-[#F2F2F2] w-full min-[846px]:max-w-[350px] rounded-[15px] flex flex-col justify-center items-center gap-[10px] p-[15px]'}>
              <div className={'min-[350px]:h-[250px] min-[400px]:h-[326px] h-[200px] w-full px-[20px] rounded-[15px] flex items-center justify-center  bg-white'}>
                <img src={category.image} alt="Image" className={'max-h-[200px]'} />
              </div>
              <span className={'mb-[5px] text-[24px] sm:text-[32px] font-medium'}>{category.name}</span>
            </Link>
            ))}
        </div>
      </div>
  );
};

export default ProfessionalServicesCategories;
