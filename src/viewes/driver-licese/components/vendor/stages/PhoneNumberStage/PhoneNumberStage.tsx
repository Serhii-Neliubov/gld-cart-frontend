import React from 'react';
import styles from "./PhoneNumberStage.module.scss";

type PhoneNumberStageProps = {
    setStage: (value: (prev: number) => number) => void
}

export const PhoneNumberStage = ({setStage}: PhoneNumberStageProps) => {
    return (
        <div className={styles.body}>
            <h1 className={styles.title}>Phone Number</h1>
            <div className={styles.content}>
                <div className={styles.regionBoxTitle}>
                    <span>Enter your mobile number and we'll text you a verification code</span>
                </div>
                <div className={styles.messageBoxContent}>
                    <div className={styles.regionBox}>
                        <input placeholder='e.g +1584 5484 4598'/>
                        <button>Get OTP Code</button>
                    </div>
                    <div className={styles.messageBox}>
                    <span>OTP Code</span>
                        <input placeholder='Enter OTP Code here'/>
                        <button onClick={() => setStage((prev) => prev + 1)}>Submit</button>
                    </div>
                </div>
                <span className={styles.tipMessage}>If you have questions, please contact our customer support</span>
            </div>
        </div>
    )
}