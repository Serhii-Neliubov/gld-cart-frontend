import React, { FC } from "react";
import "./Companies.scss";

const Companies: FC = () => {
  return (
    <div className="page__companies companies">
      <div className="companies__container">
        <div className="companies__items">
          <div className="companies__item">
            <picture>
              <source srcSet="img/companies/company1.webp" type="image/webp" />
              <img src="img/companies/company1.png" alt="Image company" />
            </picture>
          </div>
          <div className="companies__item">
            <picture>
              <source srcSet="img/companies/company2.webp" type="image/webp" />
              <img src="img/companies/company2.png" alt="Image company" />
            </picture>
          </div>
          <div className="companies__item">
            <picture>
              <source srcSet="img/companies/company3.webp" type="image/webp" />
              <img src="img/companies/company3.png" alt="Image company" />
            </picture>
          </div>
          <div className="companies__item">
            <picture>
              <source srcSet="img/companies/company4.webp" type="image/webp" />
              <img src="img/companies/company4.png" alt="Image company" />
            </picture>
          </div>
          <div className="companies__item">
            <picture>
              <source srcSet="img/companies/company5.webp" type="image/webp" />
              <img src="img/companies/company5.png" alt="Image company" />
            </picture>
          </div>
          <div className="companies__item">
            <picture>
              <source srcSet="img/companies/company6.webp" type="image/webp" />
              <img src="img/companies/company6.png" alt="Image company" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
