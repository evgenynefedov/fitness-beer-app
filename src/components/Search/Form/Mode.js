import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import Stack from '@mui/material/Stack';

export default function Mode({mode, handleChange}) {
    return (
        <Stack sx={{width: "100%"}} alignItems="center">
            <ToggleButtonGroup value={mode} onChange={handleChange} color="primary" exclusive aria-label="mode">
                <ToggleButton value="walking"><DirectionsRunIcon />Walking </ToggleButton>
                <ToggleButton value="cycling"><DirectionsBikeIcon sx={{mr:1 }} /> Cycling</ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    );
}