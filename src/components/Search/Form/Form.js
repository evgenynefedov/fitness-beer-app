import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import BarsQuantity from './BarsQuantity';
import Difficulty from './Difficulty';
import Mode from './Mode';
import Submit from './Submit';

export default function Form() {

    const [difficulty, setDifficulty] = React.useState(50);
    const [barsQuantity, setBarsQuantity] = React.useState(2);
    const [mode, setMode] = React.useState('foot');

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

    useEffect(() => {
        console.log(`difficulty: ${difficulty}, barsQuantity ${barsQuantity}, mode ${mode}`)
    }, [difficulty, barsQuantity, mode])

    return (
        <Container component="main" maxWidth="xs">
            <Typography variant="h5" align="center" sx={{mt:3, mb:5}} component="h1">Search Your Fitness Beer Route</Typography>
            
            <Stack spacing={2} direction="column" alignItems="center">
                <Difficulty difficulty={difficulty} handleChange={handleDistance}/>
                <BarsQuantity barsQuantity={barsQuantity} handleChange={handleBarsQuantity} />
                <Mode mode={mode} handleChange={handleMode} />
                <Submit />
            </Stack>
        </Container>
    );
}