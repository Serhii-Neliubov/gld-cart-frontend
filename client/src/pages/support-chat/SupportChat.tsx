import React, {useState} from 'react';
import styles from './SupportChat.module.scss'
import {Link} from "react-router-dom";

export const SupportChat = () => {
    const [isChatActive, setIsChatActive] = useState(false);
    const [inputValue, setInputValue] = useState('');

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
                        <div className={styles.chatBox}>chat</div> :
                        <div className={styles.chatBox}>
                            <h1>How can I help you?</h1>
                            <div className={styles.questionBoxes}>
                                <div className={styles.questionBoxesColumn}>
                                    <div onClick={() => setIsChatActive(true)} className={styles.questionBox}>
                                        <div>
                                            <span>How do I create an account on the shopping site?</span>
                                        </div>
                                        <img src='/SupportChat/arrow-top.svg' alt='arrow top icon'/>
                                    </div>
                                    <div onClick={() => setIsChatActive(true)} className={styles.questionBox}>
                                        <div>
                                            <span>Checkout or "Place Order" to complete your purchase?</span>
                                        </div>
                                        <img src='/SupportChat/arrow-top.svg' alt='arrow top icon'/>
                                    </div>
                                </div>
                                <div className={styles.questionBoxesColumn}>
                                    <div onClick={() => setIsChatActive(true)} className={styles.questionBox}>
                                        <div>
                                            <span>Add them to your cart or wish list?</span>
                                        </div>
                                        <img src='/SupportChat/arrow-top.svg' alt='arrow top icon'/>
                                    </div>
                                    <div onClick={() => setIsChatActive(true)} className={styles.questionBox}>
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
                        <img src='/SupportChat/emodji-file.svg' className={styles.voiceInput} alt='voice input'/>
                    </button>
                    <button>
                        <img src='/SupportChat/file-input.svg' className={styles.voiceInput} alt='voice input'/>
                    </button>
                    <button>
                        <img src='/SupportChat/send-message-button.svg' className={styles.voiceInput}
                             alt='voice input'/>
                    </button>
                </div>
            </div>

        </div>
    )
}