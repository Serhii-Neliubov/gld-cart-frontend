import Footer from "@components/footer/Footer.tsx";
import styles from "./ProfessionalServices.module.scss";
import {useParams} from "react-router-dom";
// import {useGetData} from "@hooks/useGetData/useGetData.tsx";
import {FaTrophy} from "react-icons/fa";
import {FiMessageCircle} from "react-icons/fi";
import {IoLocationOutline} from "react-icons/io5";
import {LuMessagesSquare} from "react-icons/lu";
import useDefaultScrollPosition from "@hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";

const ProfessionalServices = () => {
  useDefaultScrollPosition();

  const {category} = useParams();
  // const {data, loading} = useGetData(`/services?category=${category}`);

  return (
    <>
      <div className={styles.body}>
        <div className="__container">
          <div className={styles.content}>
            <div className={styles.filter}>
              <h5 className={styles.filter_title}>Filters</h5>
              <div className={styles.filter_block}>
                <span>When do you want to start?</span>
                <label>
                  Within 48 hours
                  <input name='whenStart' type="radio"/>
                </label>
                <label>
                  Within a week
                  <input name='whenStart' type="radio"/>
                </label>
                <label>
                  Within a month
                  <input name='whenStart' type="radio"/>
                </label>
                <label>
                  Just browsing
                  <input name='whenStart' type="radio"/>
                </label>
                <label>
                  Specific date(s)
                  <input name='whenStart' type="radio"/>
                </label>
              </div>
              <div className={styles.filter_block}>
                <span>Frequency</span>
                <label>
                  Just one
                  <input name='Frequency' type="radio"/>
                </label>
                <label>
                  Every week
                  <input name='Frequency' type="radio"/>
                </label>
                <label>
                  Every 2 weeks
                  <input name='Frequency' type="radio"/>
                </label>
                <label>
                  Once a month
                  <input name='Frequency' type="radio"/>
                </label>
              </div>
              <div className={styles.filter_block}>
                <span>Number of rooms</span>
                <label>
                  1 bedroom
                  <input name='rooms' type="radio"/>
                </label>
                <label>
                  2 bedrooms
                  <input name='rooms' type="radio"/>
                </label>
                <label>
                  3 bedrooms
                  <input name='rooms' type="radio"/>
                </label>
                <label>
                  4 bedrooms
                  <input name='rooms' type="radio"/>
                </label>
                <label>
                  5 bedrooms
                  <input name='rooms' type="radio"/>
                </label>
              </div>
              <div className={styles.filter_block}>
                <span>Cleaning type</span>
                <label>
                  Standard cleaning
                  <input name='cleaningType' type="radio"/>
                </label>
                <label>
                  Deep cleaning
                  <input name='cleaningType' type="radio"/>
                </label>
                <label>
                  Move-in cleaning
                  <input name='cleaningType' type="radio"/>
                </label>
              </div>
              <div className={styles.filter_block}>
                <span>Number of bathrooms</span>
                <label>
                  1 bathroom
                  <input name='bathrooms' type="radio"/>
                </label>
                <label>
                  2 bathrooms
                  <input name='bathrooms' type="radio"/>
                </label>
                <label>
                  3 bathrooms
                  <input name='bathrooms' type="radio"/>
                </label>
                <label>
                  4 bathrooms
                  <input name='bathrooms' type="radio"/>
                </label>
                <label>
                  5 bathrooms
                  <input name='bathrooms' type="radio"/>
                </label>
              </div>
              <div className={styles.filter_block}>
                <span>Pets</span>
                <label>
                  No pets in home
                  <input name='Pets' type="radio"/>
                </label>
                <label>
                  Pets in home
                  <input name='Pets' type="radio"/>
                </label>
              </div>
              <div className={styles.filter_block}>
                <span>Extra services</span>
                <label>
                  Window cleaning (inside)
                  <input name='extraServices' type="checkbox"/>
                </label>
                <label>
                  Fridge cleaning
                  <input name='extraServices' type="checkbox"/>
                </label>
                <label>
                  Oven cleaning
                  <input name='extraServices' type="checkbox"/>
                </label>
                <label>
                  Laundry
                  <input name='extraServices' type="checkbox"/>
                </label>
              </div>
              <button className={styles.filterReset_button}>Reset</button>
            </div>
            <div className={styles.items}>
              <h1 className={styles.title}>Professional <span>{category}</span> Services</h1>
              <div className={styles.item}>
                <div className={styles.item_image}>
                  <img src="https://via.placeholder.com/150" alt="item"/>
                </div>
                <div className={styles.item_content}>
                  <h2 className={styles.item_title}>Bucket of shine</h2>
                  <div className={styles.item_reviews}>
                    <span>Excellent 4.9</span>
                    <div>* * * * *</div>
                    <span>(36)</span>
                  </div>
                  <div className={styles.item_demand}>
                    <FaTrophy />
                    <span>In high demand</span>
                  </div>
                  <div className={styles.item_features}>
                    <div>
                      <FaTrophy/>
                      76 hires on GLD
                    </div>
                    <div>
                      <IoLocationOutline />
                      1 similar job done near you
                    </div>
                    <div>
                      <LuMessagesSquare />
                      Responds within a day
                    </div>
                  </div>
                  <p className={styles.item_secription}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque excepturi, molestiae odio reiciendis ut veritatis.
                  </p>
                </div>
                <div className={styles.item_actions}>
                  <button className={styles.item_button}>
                    <FiMessageCircle />
                    Contact
                  </button>
                  <button className={styles.item_button}>View Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProfessionalServices;
