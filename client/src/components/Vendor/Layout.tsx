import React from 'react';
import styles from "./BasicInformationVehicle.module.scss";
import {useNavigate} from "react-router-dom";
import RentingStage from "../RentingStage/RentingStage.tsx";

type LayoutProps = {
    children: React.ReactNode,
    nextLink: string,
    stage: number,
    backLink: string,
    subtitle: string,
    title: string,
}

export const Layout = ({title, children, nextLink, stage, backLink, subtitle}: LayoutProps) => {
    const navigate = useNavigate();

    return (
        <div className='__container'>
            <div className={styles.container}>
                <RentingStage coloredStage={stage}/>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.content}>
                    <h2 className={styles.subtitle}>{subtitle}</h2>
                    {children}
                </div>
                <div className={styles.actionButtons}>
                    <div className={styles.closeButton} onClick={() => navigate(backLink)}>Back</div>
                    <div className={styles.nextButton}
                         onClick={() => navigate(nextLink)}>Next
                    </div>
                </div>
            </div>
        </div>
    )
}