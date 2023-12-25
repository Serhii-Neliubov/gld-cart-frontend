import React, {ChangeEvent, FC, useState} from 'react';
import styles from './JobApplicationForm.module.scss';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro';
import { styled, Textarea} from '@mui/joy';
import Button from '@mui/material/Button';
import Footer from '../UI/Footer.tsx'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const JobApplicationForm: FC = () => {
    const [, setIsDragOver] = useState(false);

    const handleDragOver = (e: React.DragEventHandler<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);

        const files = e.dataTransfer.files;
        handleFiles(files);
    };

    const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        handleFiles(files);
    };

    const handleFiles = (files: FileList | null) => {
        // Обработайте загрузку файлов здесь
        console.log('Selected/Dropped files:', files);
    };

    return (
        <React.Fragment>
            <div className="__container">
                <h1 className={styles.title}>Job Application Form</h1>
                <div className={styles.content}>
                    <div className={styles.column_row}>
                        <TextField className={styles.input} id="outlined-basic" label="First Name" variant="outlined"/>
                        <TextField className={styles.input} id="outlined-basic" label="Last Name" variant="outlined"/>
                    </div>
                    <div className={styles.column_row}>
                        <TextField className={styles.input} id="outlined-basic" label="Email" variant="outlined"/>
                        <TextField className={styles.input} id="outlined-basic" label="Phone Number"
                                   variant="outlined"/>
                    </div>
                    <div className={styles.column_row}>
                        <TextField className={styles.input} id="outlined-basic" label="Phone Number"
                                   variant="outlined"/>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker sx={{width: '467px'}} label="Earliest Possible Start Date"/>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className={styles.column_row}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker sx={{width: '467px'}} label="Preferred Interview Date"/>
                            </DemoContainer>
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={['MultiInputTimeRangeField']}
                            >
                                <MultiInputTimeRangeField
                                    slotProps={{
                                        textField: ({position}) => ({
                                            label: position === 'start' ? 'From' : 'To',
                                        }),
                                    }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <Textarea className={styles.textarea} minRows={8} placeholder="Any Detail Here" />
                    {/* Заменить кнопку */}
                    <Button
                        className={styles.upload_file}
                        component="label"
                        variant="contained"
                        startIcon={ <svg
                        xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">
                        <path
                            d="M11.8314 14.341C13.1894 6.20537 20.3586 0 29 0C37.6414 0 44.8105 6.2054 46.1686 14.341C52.8047 14.9464 58 20.4469 58 27.1429C58 34.2437 52.1574 40 44.95 40H13.05C5.84269 40 0 34.2437 0 27.1429C0 20.4469 5.1955 14.9464 11.8314 14.341Z"
                            fill="#B3BCCD"/>
                        <path
                            d="M29.7071 11.2929C29.3166 10.9024 28.6834 10.9024 28.2929 11.2929L21.9289 17.6569C21.5384 18.0474 21.5384 18.6805 21.9289 19.0711C22.3195 19.4616 22.9526 19.4616 23.3431 19.0711L29 13.4142L34.6569 19.0711C35.0474 19.4616 35.6805 19.4616 36.0711 19.0711C36.4616 18.6805 36.4616 18.0474 36.0711 17.6569L29.7071 11.2929ZM30 32L30 12L28 12L28 32L30 32Z"
                            fill="white"/>
                    </svg> }
                        onDragOver={handleDragOver}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <span className={styles.upload_title}>Upload a file</span>
                        <span className={styles.upload_subtitle}>Drag and drop files here</span>
                        <VisuallyHiddenInput onChange={handleFileSelect} draggable type="file"/>
                    </Button>
                    <div className={styles.button}>
                        <button>Submit you Application</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>

    )
}

export default JobApplicationForm;