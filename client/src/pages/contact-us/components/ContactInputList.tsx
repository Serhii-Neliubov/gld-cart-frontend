import React, { FC } from 'react';
import { ContactInput } from './ContactInput.tsx'
import styles from "../ContactUsPage.module.scss";
import { IMessageData } from "../../../models/IMessageData";

const inputsList: inputsListType[] = [
    {
        title: 'Your Name',
        placeholder: 'Cameron Williamson',
        value: 'name',
    },
    {
        title: 'Your Email',
        placeholder: 'Gldcart@gmail.com',
        value: 'email',
    },
    {
        title: 'Subject',
        placeholder: 'Write your subject',
        value: 'subject',
    },
];


type inputsListType = {
    title: string;
    placeholder: string;
    value: string;
};

type ContactInputListProps = {
    messageData: IMessageData;
    setMessageData: (data: IMessageData) => void;
};
export const ContactInputList: FC<ContactInputListProps> = ({ setMessageData, messageData }) => {
    return (
        <div className={styles.inputs}>
            {inputsList.map((object) => (
                <ContactInput
                    value={object.value}
                    title={object.title}
                    placeholder={object.placeholder}
                    messageData={messageData}
                    setMessageData={setMessageData}
                />
            ))}
            <div className={styles.textarea}>
                <span>Your Message</span>
                <textarea
                    value={messageData.message}
                    onChange={(e) =>
                        setMessageData({
                            ...messageData,
                            message: e.target.value,
                        })
                    }
                />
            </div>
        </div>
    );
};
