import { Typography } from '@mui/material';
import React from 'react'

 const BodyTypography = (props) => (
  <Typography
    {...props}
    sx={{
        fontSize: "13px",
        color: "#666666",
        textTransform: "uppercase",
        ...props.sx,
      }}
  />
  )
export default BodyTypography;