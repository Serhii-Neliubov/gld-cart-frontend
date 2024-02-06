import React, {useState} from 'react';
import styles from './SupportChat.module.scss'
import {Link} from "react-router-dom";

export const SupportChat = () => {
    const [isChatActive, setIsChatActive] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<string[]>([]);

    const sendMessageHandler = () => {
        if(inputValue.length){
            setIsChatActive(true);
        }
        setMessages([...messages, inputValue]);
    }

    return (
        <div className='__container'>
            <div className={styles.content}>
                <div className={styles.actionButtons}>
                    <Link to='/help-and-support'>
                        <button className={styles.backButton}/>
                    </Link>
                    <Link to='/'>
                        <img className={styles.logo} src='/SupportChat/logo.png' alt='logo'/>
                    </Link>
                    <Link to='/faq-s'>
                        <button className={styles.faqsButton}/>
                    </Link>
                </div>
                <div className={styles.chatBoxContainer}>
                    {isChatActive ?
                        <div className={styles.chatBox}>
                            <div className={styles.messages}>
                                {messages.map((message) =>
                                    <div className={styles.message}>{message}</div>
                                )}
                            </div>
                        </div>
                            :
                            <div className={styles.noActiveChatBox}>
                                <h1>How can I help you?</h1>
                                <div className={styles.questionBoxes}>
                                    <div className={styles.questionBoxesColumn}>
                                        <div onClick={() => {
                                            setInputValue('How do I create an account on the shopping site?')
                                            setIsChatActive(true)
                                        }} className={styles.questionBox}>
                                            <div>
                                                <span>How do I create an account on the shopping site?</span>
                                            </div>
                                            <img src='/SupportChat/arrow-top.svg' alt='arrow top icon'/>
                                        </div>
                                        <div onClick={() => {
                                            setInputValue('Checkout or "Place Order" to complete your purchase?')
                                            setIsChatActive(true)
                                        }} className={styles.questionBox}>
                                            <div>
                                                <span>Checkout or "Place Order" to complete your purchase?</span>
                                            </div>
                                            <img src='/SupportChat/arrow-top.svg' alt='arrow top icon'/>
                                        </div>
                                    </div>
                                    <div className={styles.questionBoxesColumn}>
                                        <div onClick={() => {
                                            setInputValue('Add them to your cart or wish list?')
                                            setIsChatActive(true)
                                        }} className={styles.questionBox}>
                                            <div>
                                                <span>Add them to your cart or wish list?</span>
                                            </div>
                                            <img src='/SupportChat/arrow-top.svg' alt='arrow top icon'/>
                                        </div>
                                        <div onClick={() => {
                                            setInputValue('How do I apply a promo code or discount during checkout?')
                                            setIsChatActive(true)
                                        }} className={styles.questionBox}>
                                            <div>
                                                <span>How do I apply a promo code or discount during checkout?</span>
                                            </div>
                                            <img src='/SupportChat/arrow-top.svg' alt='arrow top icon'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                        <div className={styles.chatAreaInput}>
                        <button>
                        <img src='/SupportChat/voice-input.svg' className={styles.voiceInput} alt='voice input'/>
                    </button>
                    <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className={styles.textInput} placeholder='Write here anything...'/>
                    <button>
                        <img src='/SupportChat/emodji-file.svg' className={styles.voiceInput} alt='emodji input'/>
                    </button>
                    <button>
                        <img src='/SupportChat/file-input.svg' className={styles.voiceInput} alt='file input'/>
                    </button>
                    <button onClick={sendMessageHandler}>
                        <img src='/SupportChat/send-message-button.svg' className={styles.voiceInput}
                             alt='send message'/>
                    </button>
                </div>
            </div>

        </div>
    )
}