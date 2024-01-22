import React from 'react';
import styles from './ModalWindow.module.scss'

type ModalWindowProps = {
    children: React.ReactNode,
    closeModal: () => void
}

export const ModalWindow = ({children, closeModal}: ModalWindowProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.window}>
                {children}
                <button onClick={() => {
                    closeModal();
                }} className={styles.closeButton}>&times;</button>
            </div>
        </div>
    )
}