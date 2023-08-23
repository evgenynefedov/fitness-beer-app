import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import SportsBarOutlined from '@mui/icons-material/SportsBar';

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
        <>
            <Typography component="legend">Bars for today</Typography>
            <StyledRating
                value={barsQuantity}
                onChange={handleChange}
                sx={{fontSize: "2.5rem"}}
                name="quantity"
                precision={1}
                defaultValue={2}
                max={7}
                
                icon={<SportsBarIcon fontSize="inherit" />}
                emptyIcon={<SportsBarOutlined fontSize="inherit" />}
            />
        </>
    );
}

{
    //getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
}