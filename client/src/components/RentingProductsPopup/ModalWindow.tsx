import React from 'react';
import styles from './ModalWindow.module.scss'

type ModalWindowProps = {
    children: React.ReactNode,
}

export const ModalWindow = ({children}: ModalWindowProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.window}>
                {children}
                <button className={styles.closeButton}>&times;</button>
            </div>
        </div>
    )
}