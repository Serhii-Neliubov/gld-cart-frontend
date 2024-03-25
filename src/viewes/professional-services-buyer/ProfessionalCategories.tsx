import React, { FC } from "react";
import styles from "./ProfessionalCategories.module.scss";
import Footer from "../../components/footer/Footer.tsx";
import { Link } from "react-router-dom";
import useDefaultScrollPosition from "../../hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";

const categories = [
    {
        name: "Cleaning",
        image: "src/assets/images/professional-services/img1.png",
        category: "cleaning",
    },
    {
        name: "Repairing",
        image: "src/assets/images/professional-services/img2.png",
        category: "repairing",
    },
    {
        name: "Gardening",
        image: "src/assets/images/professional-services/img3.png",
        category: "gardening",
    },
    {
        name: "Tree Cutting",
        image: "src/assets/images/professional-services/img4.png",
        category: "treeCutting",
    },
    {
        name: "Lawn Services",
        image: "src/assets/images/professional-services/img5.png",
        category: "lawnServices",
    },
    {
        name: "Handyman",
        image: "src/assets/images/professional-services/img6.png",
        category: "handyman",
    },
    {
        name: "Snow Removal",
        image: "src/assets/images/professional-services/img7.png",
        category: "snowRemoval",
    },
    {
        name: "Pest Control",
        image: "src/assets/images/professional-services/img8.png",
        category: "pestControl",
    },
    {
        name: "Electrical",
        image: "src/assets/images/professional-services/img9.png",
        category: "electrical",
    },
]

const ProfessionalCategories: FC = () => {
  useDefaultScrollPosition();

  return (
    <React.Fragment>
      <div className="__container">
        <h1 className={styles.title}>
          Select <span>PROFESSIONAL SERVICES</span> Category
        </h1>
        <div className={styles.blocks}>
            {categories.map((category, index) => (
                <Link key={index} to={`/professional-services/${category.category}`} className={styles.block}>
                <div className={styles.image}>
                    <img src={category.image} alt="Image" />
                </div>
                <span>{category.name}</span>
                </Link>
            ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ProfessionalCategories;
