import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import SportsBarOutlined from '@mui/icons-material/SportsBar';
import Stack from '@mui/material/Stack';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#faaf00',
    },
    '& .MuiRating-iconHover': {
        color: '#ffcb52',
    },
});

export default function BarsQuantity({barsQuantity, handleChange}) {
    return (
        <Stack spacing={0.5} sx={{width: "100%"}} alignItems="center">
            <Typography component="legend">Bars for today: <b>{barsQuantity}</b></Typography>
            <StyledRating
                value={barsQuantity}
                onChange={handleChange}
                sx={{fontSize: "2.7rem"}}
                name="quantity"
                precision={1}
                defaultValue={2}
                max={7}
                
                icon={<SportsBarIcon fontSize="inherit" />}
                emptyIcon={<SportsBarOutlined fontSize="inherit" />}
            />
    </Stack>
    );
}