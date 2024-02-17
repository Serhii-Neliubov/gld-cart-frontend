import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styles from '../pages/vehicle/NewVehicle.module.scss';
import { IVendorProductData } from '../../../utils/models/IVendorProductData.tsx';

type PhotoAndVideoBlockProps = {
    formData: IVendorProductData;
    setFormData: Dispatch<SetStateAction<IVendorProductData>>;
};

export const PhotoAndVideoBlock = ({ setFormData, formData }: PhotoAndVideoBlockProps) => {
    const handleFileSelection = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            setFormData(prevData => {
                const newImages = [...prevData.images];
                newImages[index] = selectedFile;
                return { ...prevData, images: newImages };
            });
        }
    };
    return (
        <div className={styles.photoBlocksContent}>
            <span className={styles.uploadPhotosTitle}>UPLOAD UP TO 06 PHOTOS</span>
            <div className={styles.photoBlocks}>
                {Array.from({ length: 6 }, (_, index) => (
                    <div className={styles.photoBlock} key={index} onClick={() => {
                        const fileInput = document.getElementById(`fileInput-${index}`) as HTMLInputElement;
                        fileInput.click();
                    }}>
                        <div className={styles.clickableArea}>
                            <img
                                className={styles.choosedImage}
                                src={formData.images[index] ? URL.createObjectURL(formData.images[index]) : '/photo-and-video-icon.svg'}
                                alt="icon"
                            />
                        </div>
                        <input
                            type="file"
                            id={`fileInput-${index}`}
                            onChange={handleFileSelection(index)}
                            style={{ display: 'none' }}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.inputBlock}>
                <label>Promo Video</label>
                <input placeholder="Youtube link here"/>
            </div>
        </div>
    );
};
