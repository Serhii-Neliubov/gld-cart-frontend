import React from 'react'
import styles from "./ContactUsPage.module.scss";
import { IMessageData } from "../../interfaces/interfaces";

type ContactInputProps = {
    title: string,
    placeholder: string,
    value: string,
    messageData: IMessageData,
    setMessageData: (data: IMessageData) => void,
}
export const ContactInput = ({title, placeholder, value, messageData, setMessageData}: ContactInputProps) => {
    return (
        <div className={styles.input}>
            <span>{title}</span>
            <input
                value={messageData.value}
                onChange={(e) =>
                    setMessageData({...messageData, [value]: e.target.value})
                }
                type="text"
                placeholder={placeholder}
            />
        </div>
    )
}