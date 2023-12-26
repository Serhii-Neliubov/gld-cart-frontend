import React, { FC } from 'react';
import styles from './JobApplicationForm.module.scss';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro';
import { Textarea} from '@mui/joy';
import Footer from '../Footer.tsx'
import { DragAndDropWindow } from "../JobApplicationForm/DragAndDropWindow.tsx";
const JobApplicationForm: FC = () => {
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
                                <MultiInputTimeRangeField slotProps={{
                                    textField: ({position}) => ({
                                        label: position === 'start' ? 'From' : 'To',
                                    }),
                                }} />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <Textarea className={styles.textarea} minRows={8} placeholder="Any Detail Here" />
                    <DragAndDropWindow />
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