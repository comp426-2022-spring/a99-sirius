import React, {useState} from 'react'
import { TextField } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function BasicDateTimePicker() {
    const[value, setValue] = useState(new Date())

    const handleChange = (value) => {
        setValue(value)
    }

    return(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Data and Time"
                value={value}
                onChange={(newValue) => {
                    handleChange(newValue)
                }}
            />
        </LocalizationProvider>
    )
}