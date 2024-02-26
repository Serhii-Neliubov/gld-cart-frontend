import React from 'react';
import styles from './PaymentCheckout.module.scss';
export const PaymentForm = () => {
  return (
    <React.Fragment>
      <div className={styles.body}>
        <div className={`${styles.content} __container`}>
          <div className={styles.paymentForm}>
            <h1>Checkout</h1>
            <div className={styles.routePath}>
              <span>Home</span>
              <span>Checkout</span>
            </div>
            <form className={styles.form}>
              <h3>Billing Details</h3>
              <div className={styles.inputGroup}>
                <label className={styles.formInput} htmlFor='name'>
                  First Name
                  <input type='text' id='name' name='name' placeholder='First Name' required/>
                </label>
                <label className={styles.formInput} htmlFor='surname'>
                  Last Name
                  <input type='text' id='surnae' name='surname' placeholder='Last Name' required/>
                </label>
              </div>
              <label className={styles.formInput} htmlFor='country'>
                Country
                <input type='text' id='country' name='country' placeholder='United States (US)' required/>
              </label>
              <label className={styles.formInput} htmlFor='street'>
                Street
                <input type='text' id='street' name='street' placeholder='Full address' required/>
              </label>
              <div className={styles.inputGroup}>
                <label className={styles.formInput} htmlFor='town'>
                  Town / City
                  <input type='text' id='town' name='town' placeholder='town' required/>
                </label>
                <label className={styles.formInput} htmlFor='zipcode'>
                  Postcode / ZIP
                  <input type='text' id='zipcode' name='zipcode' placeholder='Zip Code' required/>
                </label>
              </div>
              <label className={styles.formInput} htmlFor='phone'>
                Phone
                <input type='text' id='phone' name='phone' required placeholder='phone number'/>
              </label>
              <label className={styles.formInput} htmlFor='email'>
                Street
                <input type='text' id='email' name='email' required placeholder='email'/>
              </label>
              <label className={styles.formInput} htmlFor='orderNotes'>
                Order Notes
                <textarea name='orderNotes' placeholder='Note about your order'/>
              </label>
            </form>
          </div>
          <div className={styles.yourOrderBlock}>
            <h2>Your Order</h2>
            <div className={styles.orderItem}>
              <div className={styles.itemInfo}>
                <div className={styles.itemName}>Product Name</div>
                <div className={styles.itemPrice}>$100.00</div>
              </div>
              <div className={styles.itemQuantity}>x1</div>
            </div>
            <div className={styles.orderItem}>
              <div className={styles.itemInfo}>
                <div className={styles.itemName}>Product Name</div>
                <div className={styles.itemPrice}>$100.00</div>
              </div>
              <div className={styles.itemQuantity}>x1</div>
            </div>
            <div className={styles.orderItem}>
              <div className={styles.itemInfo}>
                <div className={styles.itemName}>Product Name</div>
                <div className={styles.itemPrice}>$100.00</div>
              </div>
              <div className={styles.itemQuantity}>x1</div>
            </div>
            <div className={styles.orderTotal}>
              <div>Total</div>
              <div>$300.00</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}