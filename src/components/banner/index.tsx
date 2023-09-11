import { Box } from '@mui/material'
import * as React from 'react'

interface BannerImg {
  bannerImg: string
}

export default function Banner(props: BannerImg) {
  return (
    <Box
      component="img"
      src={props.bannerImg}
      alt="banner插图"
      sx={{ width: '100vw', height: '190px', objectFit: 'cover' }}
    ></Box>
  )
}
