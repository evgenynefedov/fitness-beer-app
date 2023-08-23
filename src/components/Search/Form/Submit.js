import * as React from 'react';
import Button from '@mui/material/Button';

export default function Submit({handleChange}) {
    return (
        <Button onClick={handleChange} type="submit" fullWidth variant="contained">Search route</Button>
    );
}