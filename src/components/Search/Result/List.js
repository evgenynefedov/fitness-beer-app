import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Item from './Item'


export default function List({ bars }) {
    return (
        <Grid sx={{ mt: 1 }} container spacing={2} columns={{ xs: 1, md: 4 }}>
            {bars.map(b => <Item key={b.name} name={b.name} photo={b.photo} rating={b.rating} />)}
        </Grid>
    );
}