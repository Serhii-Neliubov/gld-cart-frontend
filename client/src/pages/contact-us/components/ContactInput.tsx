import React from 'react';
import styles from "../ContactUsPage.module.scss";
import { IMessageData } from '../../../interfaces/interfaces.ts';

type ContactInputProps = {
    title: string;
    placeholder: string;
    value: keyof IMessageData;
    messageData: IMessageData;
    setMessageData: (data: IMessageData) => void;
};

export const ContactInput = ({ title, placeholder, value, messageData, setMessageData }: ContactInputProps) => {
    return (
        <div className={styles.input}>
            <span>{title}</span>
            <input
                value={messageData[value]}  // Use the value prop as a key to access the property in messageData
                onChange={(e) => setMessageData({ ...messageData, [value]: e.target.value })}
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
};
