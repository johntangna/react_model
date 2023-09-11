import { Box, Typography } from '@mui/material'
import * as React from 'react'

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        width: '100%',
        height: 69,
        textAlign: 'center',
        display: 'table',
      }}
    >
      <Typography
        sx={{
          color: '#666',
          fontSize: '13px',
          display: 'table-cell',
          verticalAlign: 'middle',
        }}
      >
        Copyright© ALL Rights Reserved 连云港亚菲尔网络科技有限公司 版权所有
        苏ICP备20046058号-1
      </Typography>
    </Box>
  )
}
