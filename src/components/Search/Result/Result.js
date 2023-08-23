import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import List from './List'
import Map from './Map'

export default function Result({ bars }) {
    const [view, setView] = React.useState("list");

    const handleView = (event, newValue) => {
        setView(newValue);
    };

    return (
        <>
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