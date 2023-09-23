import { FC } from "react";
import "./Explore.scss";

const Explore: FC = () => {
  return (
    <div className="page__explore explore">
      <div className="explore__container">
        <div className="explore__text">
          <h2 className="explore__title">explore</h2>

          <a href="#" className="explore__all-btn">
            See All
          </a>
        </div>
        <div className="explore__blocks">
          <div className="explore__blocks-column">
            <a href="#" className="explore__block-fashion">
              <h3 className="explore__block-title">Near By Fashion</h3>
            </a>
            <a href="#" className="explore__block-electronics">
              <h3 className="explore__block-title">Near By Electronics</h3>
            </a>
          </div>
          <div className="explore__blocks-column">
            <a href="#" className="explore__block-shops">
              <h3 className="explore__block-title">Near By All Shops</h3>
            </a>
            <a href="#" className="explore__block-furniture">
              <h3 className="explore__block-title">Near By Furniture</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
