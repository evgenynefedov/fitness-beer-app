import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BarsQuantity from './BarsQuantity';
import Difficulty from './Difficulty';
import Mode from './Mode';
import Submit from './Submit';

export default function Form({difficulty, handleDifficulty, barsQuantity, handleBarsQuantity, mode, handleMode, handleSubmit}) {
    return (
        <Container component="main" maxWidth="xs">
            <Typography variant="h5" align="center" sx={{mt:2, mb:3}} component="h1">Search Your Fitness Beer Route</Typography>
            
            <Stack spacing={3} direction="column" alignItems="center">
                <Difficulty difficulty={difficulty} handleChange={handleDifficulty}/>
                <BarsQuantity barsQuantity={barsQuantity} handleChange={handleBarsQuantity} />
                <Mode mode={mode} handleChange={handleMode} />
                <Submit handleChange={handleSubmit} />
            </Stack>
        </Container>
    );
}