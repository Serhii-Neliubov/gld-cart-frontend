import React, {ChangeEvent, useState} from 'react';
import styles from "../pages/vehicle/NewVehicle.module.scss";
import {useDispatch} from "react-redux";
import {setProductImages} from "../../../redux/slices/vendorProductInfoSlice.ts";

export const PhotoAndVideoBlock: React.FC = () => {
    const [files, setFiles] = useState<File[]>(new Array(6).fill(null));
    const dispatch = useDispatch();

    const getFile = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const selectedFiles = event.target.files;

        if (selectedFiles && selectedFiles.length > 0) {
            setFiles(prevFiles =>
                prevFiles.map((file, i) => i === index ? selectedFiles[0] : file)
            );
        }
    };

    dispatch(setProductImages(files));

    return (
        <div className={styles.photoBlocksContent}>
            <span className={styles.uploadPhotosTitle}>
                UPLOAD UP TO 06 PHOTOS
            </span>
            <div className={styles.photoBlocks}>
                {files.map((file, index) => (
                    <div className={styles.photoBlock} key={index}>
                        <img
                            className={file && styles.choosedImage}
                            src={file ? URL.createObjectURL(file) : '/photo-and-video-icon.svg'}
                            alt="icon"
                            onClick={() => {
                                const fileInput = document.getElementById(
                                    `fileInput-${index}`
                                ) as HTMLInputElement;
                                fileInput?.click();
                            }}
                        />
                        <input
                            type="file"
                            id={`fileInput-${index}`}
                            onChange={(e) => getFile(e, index)}
                            style={{ display: 'none' }}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.inputBlock}>
                <label>Promo Video</label>
                <input placeholder="Youtube link here" />
            </div>
        </div>
    );
};
