import React, {useState} from 'react';
import styles from './ProfilePictureStage.module.scss'

import imageCircle from '@assets/images/DriverLicense/greenCircle.png'

type ProfilePictureStageProps = {
    setStage: (value: (prev: number) => number) => void
}

export const ProfilePictureStage = ({setStage}: ProfilePictureStageProps) => {
    const [file, setFile] = useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const selectedFile: File | null = event.target.files ? event.target.files[0] : null;

        if (selectedFile) {
            if (selectedFile.type.startsWith('image/')) {
                const reader = new FileReader();

                reader.onloadend = (): void => {
                    setFile(reader.result as string);
                };

                reader.readAsDataURL(selectedFile);
            }
        }
    };

    return (
        <div className={styles.body}>
            <h1 className={styles.title}>Profile Picture</h1>
            <div className={styles.content}>
                <div className={styles.imageBoxContent}>
                    <div className={styles.imageBox}>
                        <div className={styles.userImage}>
                            <img src={file ? file : imageCircle} alt='image'/>
                        </div>
                        <span className={styles.imageBoxTip}>Please provide a clear photo of your face host can recognize you.</span>
                    </div>
                    <div className={styles.imageBoxButtons}>
                        <button className={styles.imageBoxButton}>
                            Upload
                            <input type='file' onChange={handleFileChange}/>
                        </button>
                        <button className={styles.imageBoxButton}>
                            Take a photo
                        </button>
                        <button
                            onClick={() => {
                                setStage((prev: number) => prev + 1);
                            }}
                            className={`${styles.imageBoxButton} ${styles.imageBoxButton_bg}`}
                        >
                            Save and Continue
                        </button>
                    </div>
                </div>
                <span className={styles.tipMessage}>If you have questions, please contact our customer support</span>
            </div>
        </div>
    )
}