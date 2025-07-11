'use client';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

 function Ratings() {
  const [value, setValue] = useState(4);

  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}
export default Ratings;