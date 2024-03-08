import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styles from './PhotoAndVideoBlock.module.scss';
import {IVendorProductData} from '@/utils/models/IVendorProductData.tsx';
import RentingStage from "@/components/renting-stages/RentingStage.tsx";

type PhotoAndVideoBlockProps = {
  formData: IVendorProductData;
  setFormData: Dispatch<SetStateAction<IVendorProductData>>;
  setStage: Dispatch<SetStateAction<number>>;
};

export const PhotoAndVideoBlock = ({ setStage, setFormData, formData }: PhotoAndVideoBlockProps) => {
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
  <div className='__container'>
    <div className={styles.container}>
      <RentingStage coloredStage={4}/>
      <h1 className={styles.title}>Awesome Lip Care PRODUCT Form</h1>
      <form className={styles.content}>
        <h2 className={styles.subtitle}>Basic information</h2>
        <div className={styles.photoBlocksContent}>
          <span className={styles.uploadPhotosTitle}>UPLOAD UP TO 06 PHOTOS</span>
          <div className={styles.photoBlocks}>
            {Array.from({length: 6}, (_, index) => (
              <div className={styles.photoBlock} key={index} onClick={() => {
                const fileInput = document.getElementById(`fileInput-${index}`) as HTMLInputElement;
                fileInput.click();
              }}>
                <div className={styles.clickableArea}>
                  <img
                    className={styles.choosedImage}
                    src={formData.images[index] ? URL.createObjectURL(formData.images[index]) : '/src/assets/images/photo-and-video-icon.svg'}
                    alt="icon"
                  />
                </div>
                <input
                  type="file"
                  id={`fileInput-${index}`}
                  onChange={handleFileSelection(index)}
                  style={{display: 'none'}}
                />
              </div>
            ))}
          </div>
          <div className={styles.inputBlock}>
            <label>Promo Video</label>
            <input placeholder="Youtube link here"/>
          </div>
        </div>
      </form>
      <div className={styles.actionButtons}>
        <div className={styles.closeButton} onClick={() => setStage((prev: number) => prev - 1)}>Back</div>
        <div className={styles.nextButton} onClick={() => setStage((prev: number) => prev + 1)}>Next</div>
      </div>
    </div>
  </div> )
};
