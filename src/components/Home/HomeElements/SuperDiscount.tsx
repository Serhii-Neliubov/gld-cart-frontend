import React, { FC } from "react";
import "./SuperDiscount.scss";

const SuperDiscount: FC = () => {
  return (
    <div className="page__super-discount super-discount">
      <div className="super-discount__container">
        <div className="super-discount__text">
          <div className="super-discount__title">
            Super discount on more than 100K Rs
          </div>
          <div className="super-discount__desc">
            Have you ever finally just write dummy info
          </div>
        </div>
        <a href="#" className="super-discount__button">
          Shop now
        </a>
      </div>
    </div>
  );
};

export default SuperDiscount;
