import React, { FC } from "react";
import "./Featured.scss";

const Featured: FC = () => {
  return (
    <div className="page__featured featured">
      <div className="featured__container">
        <div className="featured__label">
          <h5 className="featured__label-text">Featured</h5>
        </div>
        <h3 className="featured__title">New Arrival</h3>
        <div className="featured__items">
          <div className="featured__block-1 block-1">
            <div className="block-1__text">
              <h3 className="block-1__items-title">PlayStation 5</h3>
              <p className="block-1__items-desc">
                Black and White version of the PS5 coming out on sale.
              </p>
              <a href="#" className="block-1__items-button">
                Shop Now
              </a>
            </div>
          </div>
          <div className="featured__columm">
            <div className="featured__block-2 block-2">
              <div className="block-2__text">
                <h3 className="block-2__items-title">Women’s Collections</h3>
                <p className="block-2__items-desc">
                  Featured woman collections that give you another vibe.
                </p>
                <a href="#" className="block-2__items-button">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="featured__column-wrap">
              <div className="featured__block-3 block-3">
                <div className="block-3__text">
                  <h3 className="block-3__items-title">Speakers</h3>
                  <p className="block-3__items-desc">
                    Amazon wireless speakers
                  </p>
                  <a href="#" className="block-3__items-button">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="featured__block-4 block-4">
                <div className="block-4__text"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
