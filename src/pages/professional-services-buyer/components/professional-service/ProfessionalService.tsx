import React from 'react';
import styles from './ProfessionalService.module.scss';

export const ProfessionalService = () => {
  return (
    <div className='__container'>
      <h1 className={styles.body}>Handyman <span>Profile</span></h1>
      <div className={styles.productContainer}>
        <div className={styles.leftside}>

        </div>
        <div className={styles.rightside}>
          <div className={styles.profile}>
            <div className={styles.profileBlock}>
              <img src='' alt='profile image'/>
              <div className={styles.profileInfo}>
                <span>Shoaib Khalid</span>
                <p>Member since Jul 2019</p>
                <div></div>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <button>Book Now</button>
              <button>Chat</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}