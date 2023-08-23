import * as React from 'react';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

export default function Difficulty({difficulty, handleChange}) {
    return (
        <>
            <Typography component="legend">Difficulty of your route</Typography>
            <Slider aria-label="Volume" value={difficulty} onChange={handleChange} />
        </>
    );
}