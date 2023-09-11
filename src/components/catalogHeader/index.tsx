import { Box, Stack, Typography } from '@mui/material'
import * as React from 'react'

export default function Catalog() {
  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ borderBottom: '2px solid #ed6c02' }}
      >
        <Typography
          className="w-52"
          sx={{
            p: '6px 15px 6px 15px',
            background: '#ed6c02',
            color: '#fff',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
          }}
        >
          商品分类
        </Typography>

        <Typography
          className="!ml-8 cursor-pointer"
          sx={{ '&:hover': { color: '#ed6c02' } }}
        >
          福利团购
        </Typography>

        <Typography
          className="!ml-8 cursor-pointer"
          sx={{ '&:hover': { color: '#ed6c02' } }}
        >
          团购定制
        </Typography>

        <Typography
          className="!ml-8 cursor-pointer"
          sx={{ '&:hover': { color: '#ed6c02' } }}
        >
          限时特惠
        </Typography>
      </Stack>
    </Box>
  )
}
