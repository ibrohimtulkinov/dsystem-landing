import { Typography } from '@mui/material';
import React from 'react'

 const CardTypography = (props) => (
  <Typography
    {...props}
    sx={{
        fontSize: "22px",
        color: "#1D166C",
        fontFamily: "Josefin Sans sans-serif",
        fontWeight: "600",
        marginBottom: "16px",
        ...props.sx,
      }}
  />
  )
export default CardTypography;