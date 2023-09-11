'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grow from '@mui/material/Grow'
import {
  ChannelType,
  RankDataDetailsType,
  RankDataType,
} from '@/app/utils/types'
import { Grid, Skeleton, Stack, Typography, styled } from '@mui/material'
import Round from '../round'
import { channelData } from './channelData'
import SkeletonLoad from '../skeleton'

type ChannelAreaType = {
  top: ChannelType[]
  center: ChannelType[]
  bottom: ChannelType[]
}

const BoxItem = styled(Box)(({ theme }) => ({
  '&:hover::after': {
    background: 'rgba(255,255,255,.2) !important',
    content: '""',
    display: 'block',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  cursor: 'pointer',
}))

export default function Channel() {
  const [channel, setChannel] = React.useState<ChannelAreaType>({
    top: [],
    center: [],
    bottom: [],
  })

  React.useEffect(() => {
    setChannel(channelData)
  }, [])
  return (
    <Box className="relative channel">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <Round radius={4}></Round>
        <Round radius={8}></Round>
        <Typography variant="h4" sx={{ textAlign: 'center', margin: '0 8px' }}>
          频道会场
        </Typography>
        <Round radius={4}></Round>
        <Round radius={8}></Round>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
          {!channel.top.length ? (
            <SkeletonLoad
              length={2}
              variant="rectangular"
              width={614}
              height={250}
            ></SkeletonLoad>
          ) : (
            channel.top.map((item, index) => {
              return (
                <Grid item xs={6} className="relative" key={index}>
                  <BoxItem>
                    <Box
                      className="cursor-pointer"
                      component={'img'}
                      src={item.img}
                    ></Box>
                  </BoxItem>
                </Grid>
              )
            })
          )}
          <Grid item xs={12} className="relative">
            <Grid container rowSpacing={2} className="relative">
              {!channel.center.length ? (
                <SkeletonLoad
                  length={2}
                  variant="rectangular"
                  width={614}
                  height={250}
                ></SkeletonLoad>
              ) : (
                channel.center.map((item, index) => {
                  return index == 0 ? (
                    <Grid item xs={6} className="relative" key={index}>
                      <BoxItem>
                        <Box
                          className="cursor-pointer"
                          component={'img'}
                          src={item.img}
                        ></Box>
                      </BoxItem>
                    </Grid>
                  ) : (
                    <Grid item xs={2} className="relative" key={index}>
                      <BoxItem sx={{ position: 'relative' }}>
                        <Box
                          className="cursor-pointer"
                          component={'img'}
                          src={item.img}
                          height={250}
                          sx={{ objectFit: 'cover' }}
                        ></Box>
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            width: 'calc(100% - 20px)',
                            padding: '5px 8px',
                            background: 'rgba(0,0,0,0.3)',
                            textAlign: 'center'
                          }}
                        >
                          <Typography color={'#fff'} fontWeight={700} variant="button">{item.title}</Typography>
                        </Box>
                      </BoxItem>
                    </Grid>
                  )
                })
              )}
            </Grid>
          </Grid>
          {!channel.bottom.length ? (
            <SkeletonLoad
              length={4}
              variant="rectangular"
              width={287}
              height={250}
            ></SkeletonLoad>
          ) : (
            channel.bottom.map((item, index) => {
              return (
                <Grid item xs={3} className="relative" key={index}>
                  <BoxItem>
                    <Box
                      className="cursor-pointer"
                      component={'img'}
                      src={item.img}
                    ></Box>
                  </BoxItem>
                </Grid>
              )
            })
          )}
        </Grid>
      </Box>
    </Box>
  )
}
