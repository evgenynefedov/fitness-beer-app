import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Item({ name, photo, rating }) {
    return (
        <Grid item xs={1} md={1} key={name}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
                <CardMedia component="div" sx={{ pt: '56.25%' }} image={photo} />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography>
                        {name} ({rating})
                    </Typography>
                </CardContent>
            </Card>

        </Grid>
    );
}