import * as React from 'react';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';

export default function Difficulty({difficulty, handleChange}) {
    return (
        <Stack spacing={0.5} sx={{width: "100%"}} alignItems="center">
            <Typography component="legend">Difficulty of your route: <b>{difficulty}%</b></Typography>
            <Slider aria-label="Volume" value={difficulty} onChange={handleChange} />
        </Stack>
    );
}