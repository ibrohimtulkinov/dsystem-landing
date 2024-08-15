import { Typography } from '@mui/material';
import React from 'react'

 const StyledTypography = (props) => (
  <Typography
    {...props}
    sx={{
      fontSize: '40px',
      fontWeight: 'bold',
      color: '#1d155c',
      ...props.sx, 
    }}
  />
  )
export default StyledTypography;