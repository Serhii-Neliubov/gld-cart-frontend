import React from 'react';
import styles from "./Layout.module.scss";
import RentingStage from "../renting-stages/RentingStage.tsx";

type LayoutProps = {
    children: React.ReactNode,
    stage: number,
    subtitle: string,
    title: string,
    setStage: (value: (prev: number) => number) => void
}

export const Layout = ({setStage, title, children, stage, subtitle}: LayoutProps) => {

    return (
        <div className='__container'>
            <div className={styles.container}>
                <RentingStage coloredStage={stage}/>
                <h1 className={styles.title}>{title}</h1>
                <form className={styles.content}>
                    <h2 className={styles.subtitle}>{subtitle}</h2>
                    {children}
                </form>
                <div className={styles.actionButtons}>
                    <div className={styles.closeButton} onClick={() => setStage((prev: number) => prev - 1)}>Back</div>
                    <div className={styles.nextButton} onClick={() => setStage((prev: number) => prev + 1)}>Next</div>
                </div>
            </div>
        </div>
    )
}