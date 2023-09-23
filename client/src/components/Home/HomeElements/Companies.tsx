import { FC } from "react";
import "./Companies.scss";

const Companies: FC = () => {
  return (
    <div className="page__companies companies">
      <div className="companies__container">
        <div className="companies__items">
          <div className="companies__item">
            <img src="HomePage/companies/company1.png" alt="Image company" />
          </div>
          <div className="companies__item">
            <img src="HomePage/companies/company2.png" alt="Image company" />
          </div>
          <div className="companies__item">
            <img src="HomePage/companies/company3.png" alt="Image company" />
          </div>
          <div className="companies__item">
            <img src="HomePage/companies/company4.png" alt="Image company" />
          </div>
          <div className="companies__item">
            <img src="HomePage/companies/company5.png" alt="Image company" />
          </div>
          <div className="companies__item">
            <img src="HomePage/companies/company6.png" alt="Image company" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
