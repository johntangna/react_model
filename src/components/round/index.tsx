import { Box } from '@mui/material'
import * as React from 'react'

type Props = {
  radius: number
}

export default function Round(props: Props) {
  return (
    <Box sx={{
      borderRadius: '50%',
      width: props.radius,
      height: props.radius,
      background: '#999',
      opacity: 0.6,
      marginRight: '5px'
    }}>
      
    </Box>
  )
}