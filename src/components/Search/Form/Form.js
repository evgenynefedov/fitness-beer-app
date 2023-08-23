import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BarsQuantity from './BarsQuantity';
import Difficulty from './Difficulty';
import Mode from './Mode';
import Submit from './Submit';
import { findBarsAroundMe } from './../../../utils/findBarsAroundMe'

export default function Form() {

    const [difficulty, setDifficulty] = React.useState(50);
    const [barsQuantity, setBarsQuantity] = React.useState(2);
    const [mode, setMode] = React.useState('walking');

    const handleDistance = (event, newValue) => {
        setDifficulty(newValue);
    };

    const handleBarsQuantity = (event, newValue) => {
        if(newValue < 2){
            setBarsQuantity(2);
        } else {
            setBarsQuantity(newValue);
        }
    };

    const handleMode = (event, newValue) => {
        if (newValue !== null) {
            setMode(newValue);
        }
    };

    const handleSubmit = async (event) => {
        const minRatings = 100;
        const ratingWeight = 50; 
        const distanceWeight = difficulty; 
        const numberOfBars = barsQuantity; 
    
        const bars = await findBarsAroundMe(minRatings, ratingWeight, distanceWeight, numberOfBars);
        console.log("Found bars:", bars);
    }

    useEffect(() => {
        console.log(`difficulty: ${difficulty}, barsQuantity ${barsQuantity}, mode ${mode}`)
    }, [difficulty, barsQuantity, mode])

    return (
        <Container component="main" maxWidth="xs">
            <Typography variant="h5" align="center" sx={{mt:2, mb:3}} component="h1">Search Your Fitness Beer Route</Typography>
            
            <Stack spacing={3} direction="column" alignItems="center">
                <Difficulty difficulty={difficulty} handleChange={handleDistance}/>
                <BarsQuantity barsQuantity={barsQuantity} handleChange={handleBarsQuantity} />
                <Mode mode={mode} handleChange={handleMode} />
                <Submit handleChange={handleSubmit} />
            </Stack>
        </Container>
    );
}