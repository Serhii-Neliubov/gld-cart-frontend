import React, {ChangeEvent, useState} from 'react';
import styles from "../pages/vehicle/NewVehicle.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {setProductInformation, vendorProductInfo} from "../../../redux/slices/vendorProductInfoSlice.ts";

export const PhotoAndVideoBlock: React.FC = () => {
    const data = useSelector(vendorProductInfo);
    const dispatch = useDispatch();
    const [files, setFiles] = useState<string[]>(new Array(6).fill(null));

    const getFile = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const selectedFiles = event.target.files;

        if (selectedFiles && selectedFiles.length > 0) {
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                const fileDataURL = e.target?.result as string;

                setFiles((prevFiles) =>
                    prevFiles.map((url, i) => (i === index ? fileDataURL : url))
                );

                dispatch(
                    setProductInformation({
                        ...data.info,
                        images: files.map((url, i) => (i === index ? fileDataURL : url)).filter(Boolean),
                    })
                );
            };

            fileReader.readAsDataURL(selectedFiles[0]);
        }
    };

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
                            src={file ? file : '/photo-and-video-icon.svg'}
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
                <input placeholder="Youtube link here"/>
            </div>
        </div>
    )
}