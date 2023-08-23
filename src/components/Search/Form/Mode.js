import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Mode({mode, handleChange}) {
    return (
        <>
            <ToggleButtonGroup value={mode} onChange={handleChange} color="primary" exclusive aria-label="mode">
                <ToggleButton value="foot">By foot</ToggleButton>
                <ToggleButton value="bicyle">By bicyle</ToggleButton>
            </ToggleButtonGroup>
        </>
    );
}