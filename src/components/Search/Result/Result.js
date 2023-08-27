import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import List from './List'
import Map from './Map'
import Button from '@mui/material/Button';

export default function Result({ bars, resetResult }) {
    const [view, setView] = React.useState("list");

    const handleView = (event, newValue) => {
        setView(newValue);
    };

    return (
        <>
            <Button onClick={resetResult} sx={{mt:1}} variant="outlined">
                <ArrowBackIcon /> Back to search
            </Button>
                
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={view} onChange={handleView} aria-label="view">
                    <Tab value="list" label="List" />
                    <Tab value="map" label="Map" />
                </Tabs>
            </Box>
            
            {(view == "list" && <List bars={bars} />)}
            {(view == "map" && <Map bars={bars} />)}

        </>

    );
}