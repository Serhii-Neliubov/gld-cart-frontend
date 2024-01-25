import React from 'react';
import styles from './PhotoAndVideoClothing.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const PhotoAndVideoClothing = () => {
    return (
        <Layout title='Clothing PRODUCTS Form' subtitle='Photo and video'
                nextLink='/products-category-page/clothing/basic-information/photo-and-video/specifications' backLink='/products-category-page/clothing/basic-information' stage={3}>
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
                    <label>Promo Video</label>
                    <input placeholder='Youtube link here' />
                </div>
            </div>
        </Layout>
    )
}