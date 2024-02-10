import React from 'react';
import styles from './RentingProductPage.module.scss';
import Footer from "../../../../components/Footer/Footer.tsx";

export const RentingProductPage = () => {
    return (
        <React.Fragment>
            <div className='__container'>
                <div className={styles.body}>
                    <div className={styles.title}>
                        <h1>Rental <span>Profile</span></h1>
                        <button>See profile</button>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.productInfo}>
                            <div className={styles.imagesList}>
                                <img src='/RentingProductPage/rentingProductImage.jpeg' alt=''/>
                                <div className={styles.bottomImages}>
                                    <img src='/RentingProductPage/rentingProductImage.jpeg' alt=''/>
                                    <img src='/RentingProductPage/rentingProductImage.jpeg' alt=''/>
                                    <img src='/RentingProductPage/rentingProductImage.jpeg' alt=''/>
                                    <img src='/RentingProductPage/rentingProductImage.jpeg' alt=''/>
                                </div>
                            </div>
                            <div className={styles.productMainInfo}>
                                <div className={styles.productTitle}>
                                    <div>
                                        <h2>8 Room big house</h2>
                                        <div className={styles.productPrice}>
                                            <span>$288</span>
                                            <span>$48</span>
                                            <span>2 hrs</span>
                                        </div>
                                    </div>
                                    <button>
                                        <img src='/RentingProductPage/shareIcon.svg' alt=''/>
                                        Share
                                    </button>
                                </div>
                                <div className={styles.productInfoActionButtons}>
                                    <button>Description</button>
                                    <button>Reviews</button>
                                    <button>Specifications</button>
                                </div>
                            </div>
                            <div className={styles.whatThisPlaceOffers}>
                                <h3>What this place offers</h3>
                                <div className={styles.offers}>
                                    <div>
                                        <img src='/RentingProductPage/garden-view.svg' alt=''/>
                                        <span>Garden View</span>
                                    </div>
                                    <div>
                                        <img src='/RentingProductPage/dedicated-workspace.svg' alt=''/>
                                        <span>Dedicated Workspace</span>
                                    </div>
                                    <div>
                                        <img src='/RentingProductPage/private-outdoor.svg' alt=''/>
                                        <span>Private outdoor pool - available all year, open specific hours</span>
                                    </div>
                                    <div>
                                        <img src='/RentingProductPage/free-washer.svg' alt=''/>
                                        <span>Free Washer</span>
                                    </div>
                                    <div>
                                        <img src='/RentingProductPage/carbon-monoxide.svg' alt=''/>
                                        <span>Carbon monoxide alarm</span>
                                    </div>
                                    <div>
                                        <img src='/RentingProductPage/wi-fi.svg' alt=''/>
                                        <span>Wi-fi</span>
                                    </div>
                                    <div>
                                        <img src='/RentingProductPage/free-parking.svg' alt=''/>
                                        <span>Free Parking on premises</span>
                                    </div>
                                    <div>
                                        <img src='/RentingProductPage/tv.svg' alt=''/>
                                        <span>TV</span>
                                    </div>
                                    <div>
                                        <img src='/RentingProductPage/security-cameras.svg' alt=''/>
                                        <span>Security cameras on property</span>
                                    </div>
                                    <div>
                                        <img src='/RentingProductPage/smoke-alarm.svg' alt=''/>
                                        <span>Smoke alarm</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.alertMessages}>
                                <div>
                                    <img src='/RentingProductPage/clock.svg' alt=''/>
                                    <div>
                                        <span>Prices are likely to go up the closer you get to the pick up date.</span>
                                        <span><p>Tip:</p> We recommend you book today to secure your first choice at today's price.</span>
                                    </div>
                                </div>
                                <div>
                                    <img src='/RentingProductPage/tick.svg' alt=''/>
                                    <div>
                                        <span><p>Cancellation:</p> check-in with building staff</span>
                                    </div>
                                </div>
                                <div>
                                    <img src='/RentingProductPage/return.svg' alt=''/>
                                    <div>
                                        <span>Instant Confirmation:</span>
                                        <span>This Headphone is available now. You will get your confirmation immediately.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.productActions}>
                            <div className={styles.bookBox}>
                                <h5>8 room bih house</h5>
                                <span>Reviews 5.0 * * * * * (20)</span>
                                <p><span>Introduction: </span> My focus is to provide the highest quality of services to
                                    my clients and keep them worry free!</p>
                                <button>Book Now</button>
                                <button>Chat</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.relatedServices}>
                        <h4>Related Services</h4>
                        <div className={styles.relatedItems}>
                            <div className={styles.relatedItem}>
                                <div className={styles.relatedImage}>
                                    <img src='/RentingProductPage/house1.jpeg' alt="Image"/>
                                </div>
                                <span>Family House</span>
                            </div>
                            <div className={styles.relatedItem}>
                                <div className={styles.relatedImage}>
                                    <img src='/RentingProductPage/house2.jpeg' alt="Image"/>
                                </div>
                                <span>Family House</span>
                            </div>
                            <div className={styles.relatedItem}>
                                <div className={styles.relatedImage}>
                                    <img src='/RentingProductPage/house3.jpeg' alt="Image"/>
                                </div>
                                <span>Family House</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}