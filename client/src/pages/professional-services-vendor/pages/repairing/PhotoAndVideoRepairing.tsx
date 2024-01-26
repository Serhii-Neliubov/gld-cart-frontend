import React from 'react';
import styles from './PhotoAndVideoRepairing.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const PhotoAndVideoRepairing = () => {
    return (
        <Layout title='Repairing SERVICES Form' subtitle='Photo and video' nextLink='/professional-services/repairing/basic-information/photo-and-video/specifications' backLink='/professional-services/repairing/basic-information' stage={3}>
            <div className={styles.photoBlocksContent}>
                <span className={styles.uploadPhotosTitle}>UPLOAD UP TO 06 PHOTOS</span>
                <div className={styles.photoBlocks}>
                    <div className={styles.photoBlock}>
                        <img src='/photo-and-video-icon.svg' alt='icon'/>
                    </div>
                    <div className={styles.photoBlock}>
                        <img src='/photo-and-video-icon.svg' alt='icon'/>
                    </div>
                    <div className={styles.photoBlock}>
                        <img src='/photo-and-video-icon.svg' alt='icon'/>
                    </div>
                    <div className={styles.photoBlock}>
                        <img src='/photo-and-video-icon.svg' alt='icon'/>
                    </div>
                    <div className={styles.photoBlock}>
                        <img src='/photo-and-video-icon.svg' alt='icon'/>
                    </div>
                </div>
                <div className={styles.inputBlock}>
                    <label>Promo Video (Optional)</label>
                    <input placeholder='Youtube link here'/>
                </div>
                <span className={styles.uploadPhotosTitle}>UPLOAD RECENTLY WORK PHOTOS</span>
                <div className={styles.photoBlocks}>
                    <div className={styles.photoBlock}>
                        <img src='/photo-and-video-icon.svg' alt='icon'/>
                    </div>
                    <div className={styles.photoBlock}>
                        <img src='/photo-and-video-icon.svg' alt='icon'/>
                    </div>
                    <div className={styles.photoBlock}>
                        <img src='/photo-and-video-icon.svg' alt='icon'/>
                    </div>
                    <div className={styles.photoBlock}>
                        <img src='/photo-and-video-icon.svg' alt='icon'/>
                    </div>
                    <div className={styles.photoBlock}>
                        <img src='/photo-and-video-icon.svg' alt='icon'/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}