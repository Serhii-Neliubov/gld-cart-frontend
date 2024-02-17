import React, {useState} from 'react';
import styles from './IdConfirmationStage.module.scss'

type ProfilePictureStageProps = {
    setStage: (value: (prev: number) => number) => void
}

export const IdConfirmationStage = ({setStage}: ProfilePictureStageProps) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const selectedFile: File | null = event.target.files ? event.target.files[0] : null;

        if (selectedFile) {
            if (selectedFile.type.startsWith('image/')) {
                const reader = new FileReader();

                reader.onloadend = (): void => {
                    setFile(reader.result as null);
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
                        <span className={styles.subtitle}>ID Confirmation</span>
                        <div className={styles.userImage}>
                            <img src={file ? file : '/DriverLicense/verificationExamplePhoto.jpeg'} alt='image'/>
                        </div>
                        <button className={styles.imageBoxButton}>
                            Add a photo
                            <input type='file' onChange={handleFileChange}/>
                        </button>
                    </div>
                    <div className={styles.guideLines}>
                        <span>Guide Lines</span>
                        <div>Bring the driver's license in front of you and take a photo as an example:</div>
                        <div>The photo should clearly show the face and your driver's license</div>
                        <div>The photo must be taken in good light and in good quality</div>
                        <div>Photos in sunglasses are not allowed</div>
                        <button onClick={() => setStage((prev) => prev + 1)}>Save and Continue</button>
                    </div>
                </div>
                <span className={styles.tipMessage}>If you have questions, please contact our customer support</span>
            </div>
        </div>
    )
}