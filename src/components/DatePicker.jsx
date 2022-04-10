import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ptBR } from "date-fns/locale";

function BasicDatePicker() {
    const [value, setValue] = React.useState(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
            <DatePicker
                label="Buscar por data"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}

export default BasicDatePicker;