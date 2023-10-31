import styles from "./RentingElectronicsPage.module.scss";
import Footer from "../../components/UI/Footer";
import { FC } from "react";

const RentingElectronicsPage: FC = () => {
  return (
    <>
      <div className={styles.body}>
        <div className="__container">
          <h1 className={styles.title}>Rental Listings</h1>
          <div className={styles.content}>
            <div className={styles.filter}>
              <div className={styles.filter_content}>
                <h5 className={styles.filter_title}>Price Filter</h5>
                <div className={styles.filter_label} />
                <div className={styles.filter_price}>
                  <div className={styles.filter_price_text}>
                    <p>$0</p>
                    <p>$1199</p>
                  </div>

                  <button>Filter</button>
                </div>
                <div className={styles.filter_blocks}>
                  <button className={styles.filter_block}>
                    <img src="RentingCar/Vector-5.svg" alt="Img" />
                    <p>Select Location</p>
                  </button>
                  <button className={styles.filter_block}>
                    <img src="RentingCar/Vector-1.svg" alt="Img" />
                    <p>Pik-up Date</p>
                  </button>
                  <button className={styles.filter_block}>
                    <img src="RentingCar/Vector-2.svg" alt="Img" />
                    <p>Pik-up Time</p>
                  </button>
                  <button className={styles.filter_block}>
                    <img src="RentingCar/Vector-3.svg" alt="Img" />
                    <p>Drop-off Date</p>
                  </button>
                  <button className={styles.filter_block}>
                    <img src="RentingCar/Vector-4.svg" alt="Img" />
                    <p>Drop-off Time</p>
                  </button>
                </div>
                <div className={styles.reset}>
                  <span className={styles.reset_text}>Reset Filter</span>
                  <button className={styles.reset_button}>Reset Filter</button>
                </div>
              </div>
              <button className={styles.filter_button}>FIND MY RENTALS</button>
            </div>
            <div className={styles.items}>
              <div className={styles.item}>
                <div className={styles.image}>
                  <img src="RentingElectronicsPage/image1.png" alt="Image" />
                </div>
                <div className={styles.item_text}>
                  <h2 className={styles.item_title}>headphones</h2>
                  <div className={styles.item_prices}>
                    <div className={styles.item_price}>$180/Day</div>
                    <div className={styles.item_price}>$925/Week</div>
                    <div className={styles.item_price}>$3,100/Month</div>
                  </div>
                  <div className={styles.advantages}>
                    <span className={styles.advantage}>
                      Luxury Limousine Selectiont
                    </span>
                    <span className={styles.advantage}>
                      High Safety and Nurity
                    </span>
                    <span className={styles.advantage}>
                      Fixed Price & Bonus System
                    </span>
                    <span className={styles.advantage}>
                      100% Luxurious Fleet
                    </span>
                    <span className={styles.advantage}>
                      Clean, Polite & Knowledgeable
                    </span>
                    <span className={styles.advantage}>
                      Luxury Limousine Selectiont
                    </span>
                  </div>
                </div>
                <div className={styles.total}>
                  <div className={styles.total_price}>
                    <h3>Total Rental Price</h3>
                    <p>Incl.taxes</p>
                    <span>$230</span>
                  </div>
                  <button>Reserve</button>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.image}>
                  <img src="RentingElectronicsPage/image2.png" alt="Image" />
                </div>
                <div className={styles.item_text}>
                  <h2 className={styles.item_title}>i-phone 14</h2>
                  <div className={styles.item_prices}>
                    <div className={styles.item_price}>$180/Day</div>
                    <div className={styles.item_price}>$925/Week</div>
                    <div className={styles.item_price}>$3,100/Month</div>
                  </div>
                  <div className={styles.advantages}>
                    <span className={styles.advantage}>
                      Luxury Limousine Selectiont
                    </span>
                    <span className={styles.advantage}>
                      High Safety and Nurity
                    </span>
                    <span className={styles.advantage}>
                      Fixed Price & Bonus System
                    </span>
                    <span className={styles.advantage}>
                      100% Luxurious Fleet
                    </span>
                    <span className={styles.advantage}>
                      Clean, Polite & Knowledgeable
                    </span>
                    <span className={styles.advantage}>
                      Luxury Limousine Selectiont
                    </span>
                  </div>
                </div>
                <div className={styles.total}>
                  <div className={styles.total_price}>
                    <h3>Total Rental Price</h3>
                    <p>Incl.taxes</p>
                    <span>$230</span>
                  </div>
                  <button>Reserve</button>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.image}>
                  <img src="RentingElectronicsPage/image3.png" alt="Image" />
                </div>
                <div className={styles.item_text}>
                  <h2 className={styles.item_title}>MacBook</h2>
                  <div className={styles.item_prices}>
                    <div className={styles.item_price}>$180/Day</div>
                    <div className={styles.item_price}>$925/Week</div>
                    <div className={styles.item_price}>$3,100/Month</div>
                  </div>
                  <div className={styles.advantages}>
                    <span className={styles.advantage}>
                      Luxury Limousine Selectiont
                    </span>
                    <span className={styles.advantage}>
                      High Safety and Nurity
                    </span>
                    <span className={styles.advantage}>
                      Fixed Price & Bonus System
                    </span>
                    <span className={styles.advantage}>
                      100% Luxurious Fleet
                    </span>
                    <span className={styles.advantage}>
                      Clean, Polite & Knowledgeable
                    </span>
                    <span className={styles.advantage}>
                      Luxury Limousine Selectiont
                    </span>
                  </div>
                </div>
                <div className={styles.total}>
                  <div className={styles.total_price}>
                    <h3>Total Rental Price</h3>
                    <p>Incl.taxes</p>
                    <span>$230</span>
                  </div>
                  <button>Reserve</button>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.image}>
                  <img src="RentingElectronicsPage/image4.png" alt="Image" />
                </div>
                <div className={styles.item_text}>
                  <h2 className={styles.item_title}>iPad</h2>
                  <div className={styles.item_prices}>
                    <div className={styles.item_price}>$180/Day</div>
                    <div className={styles.item_price}>$925/Week</div>
                    <div className={styles.item_price}>$3,100/Month</div>
                  </div>
                  <div className={styles.advantages}>
                    <span className={styles.advantage}>
                      Luxury Limousine Selectiont
                    </span>
                    <span className={styles.advantage}>
                      High Safety and Nurity
                    </span>
                    <span className={styles.advantage}>
                      Fixed Price & Bonus System
                    </span>
                    <span className={styles.advantage}>
                      100% Luxurious Fleet
                    </span>
                    <span className={styles.advantage}>
                      Clean, Polite & Knowledgeable
                    </span>
                    <span className={styles.advantage}>
                      Luxury Limousine Selectiont
                    </span>
                  </div>
                </div>
                <div className={styles.total}>
                  <div className={styles.total_price}>
                    <h3>Total Rental Price</h3>
                    <p>Incl.taxes</p>
                    <span>$230</span>
                  </div>
                  <button>Reserve</button>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.image}>
                  <img src="RentingElectronicsPage/image5.png" alt="Image" />
                </div>
                <div className={styles.item_text}>
                  <h2 className={styles.item_title}>digital watch</h2>
                  <div className={styles.item_prices}>
                    <div className={styles.item_price}>$180/Day</div>
                    <div className={styles.item_price}>$925/Week</div>
                    <div className={styles.item_price}>$3,100/Month</div>
                  </div>
                  <div className={styles.advantages}>
                    <span className={styles.advantage}>
                      Luxury Limousine Selectiont
                    </span>
                    <span className={styles.advantage}>
                      High Safety and Nurity
                    </span>
                    <span className={styles.advantage}>
                      Fixed Price & Bonus System
                    </span>
                    <span className={styles.advantage}>
                      100% Luxurious Fleet
                    </span>
                    <span className={styles.advantage}>
                      Clean, Polite & Knowledgeable
                    </span>
                    <span className={styles.advantage}>
                      Luxury Limousine Selectiont
                    </span>
                  </div>
                </div>
                <div className={styles.total}>
                  <div className={styles.total_price}>
                    <h3>Total Rental Price</h3>
                    <p>Incl.taxes</p>
                    <span>$230</span>
                  </div>
                  <button>Reserve</button>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.image}>
                  <img src="RentingElectronicsPage/image6.png" alt="Image" />
                </div>
                <div className={styles.item_text}>
                  <h2 className={styles.item_title}>vr glasses</h2>
                  <div className={styles.item_prices}>
                    <div className={styles.item_price}>$180/Day</div>
                    <div className={styles.item_price}>$925/Week</div>
                    <div className={styles.item_price}>$3,100/Month</div>
                  </div>
                  <div className={styles.advantages}>
                    <span className={styles.advantage}>
                      Luxury Limousine Selectiont
                    </span>
                    <span className={styles.advantage}>
                      High Safety and Nurity
                    </span>
                    <span className={styles.advantage}>
                      Fixed Price & Bonus System
                    </span>
                    <span className={styles.advantage}>
                      100% Luxurious Fleet
                    </span>
                    <span className={styles.advantage}>
                      Clean, Polite & Knowledgeable
                    </span>
                    <span className={styles.advantage}>
                      Luxury Limousine Selectiont
                    </span>
                  </div>
                </div>
                <div className={styles.total}>
                  <div className={styles.total_price}>
                    <h3>Total Rental Price</h3>
                    <p>Incl.taxes</p>
                    <span>$230</span>
                  </div>
                  <button>Reserve</button>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.image}>
                  <img src="RentingElectronicsPage/image7.png" alt="Image" />
                </div>
                <div className={styles.item_text}>
                  <h2 className={styles.item_title}>airpods</h2>
                  <div className={styles.item_prices}>
                    <div className={styles.item_price}>$180/Day</div>
                    <div className={styles.item_price}>$925/Week</div>
                    <div className={styles.item_price}>$3,100/Month</div>
                  </div>
                  <div className={styles.advantages}>
                    <span className={styles.advantage}>
                      Luxury Limousine Selectiont
                    </span>
                    <span className={styles.advantage}>
                      High Safety and Nurity
                    </span>
                    <span className={styles.advantage}>
                      Fixed Price & Bonus System
                    </span>
                    <span className={styles.advantage}>
                      100% Luxurious Fleet
                    </span>
                    <span className={styles.advantage}>
                      Clean, Polite & Knowledgeable
                    </span>
                    <span className={styles.advantage}>
                      Luxury Limousine Selectiont
                    </span>
                  </div>
                </div>
                <div className={styles.total}>
                  <div className={styles.total_price}>
                    <h3>Total Rental Price</h3>
                    <p>Incl.taxes</p>
                    <span>$230</span>
                  </div>
                  <button>Reserve</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RentingElectronicsPage;
