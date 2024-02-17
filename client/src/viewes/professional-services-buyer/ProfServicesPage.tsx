import React, { FC } from "react";
import styles from "./ProfServicesPage.module.scss";
import Footer from "../../components/footer/Footer.tsx";
import { Link } from "react-router-dom";
import useDefaultScrollPosition from "../../hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";

const categories = [
    {
        name: "Cleaning",
        image: "/professional-services/img1.png",
        link: "/cleaning-page",
    },
    {
        name: "Repairing",
        image: "/professional-services/img2.png",
        link: "/repairing-page",
    },
    {
        name: "Gardening",
        image: "/professional-services/img3.png",
        link: "/gardening-page",
    },
    {
        name: "Tree Cutting",
        image: "/professional-services/img4.png",
        link: "/tree-cutting-page",
    },
    {
        name: "Lawn Services",
        image: "/professional-services/img5.png",
        link: "/lawn-services-page",
    },
    {
        name: "Handyman",
        image: "/professional-services/img6.png",
        link: "/handyman-page",
    },
    {
        name: "Snow Removal",
        image: "/professional-services/img7.png",
        link: "/snow-removal-page",
    },
    {
        name: "Pest Control",
        image: "/professional-services/img8.png",
        link: "/pest-control-page",
    },
    {
        name: "Electrical",
        image: "/professional-services/img9.png",
        link: "/electrical-page",
    },
]

const ProfServicesPage: FC = () => {
  useDefaultScrollPosition();

  return (
    <React.Fragment>
      <div className="__container">
        <h1 className={styles.title}>
          Select <span>PROFESSIONAL SERVICES</span> Category
        </h1>
        <div className={styles.blocks}>
            {categories.map((category) => (
                <Link to={category.link} className={styles.block}>
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

export default ProfServicesPage;
