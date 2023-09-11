'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grow from '@mui/material/Grow'
import { rankData } from './rankData'
import { RankDataDetailsType, RankDataType } from '@/app/utils/types'
import ProductItem from './ProductItem'
import {
  Avatar,
  Divider,
  Fade,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
  styled,
} from '@mui/material'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'
import Round from '../round'
import LimitedTime from './limitedTime'
import GoodStaff from './goodStaff'
import Video from './video'

const product = (item: RankDataDetailsType) => {
  return (
    <Paper
      sx={{ m: 1, '&:first-child': { marginLeft: '0 !important' } }}
      elevation={0}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        <ProductItem item={item}></ProductItem>
      </Box>
    </Paper>
  )
}

const BoxItem = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  return (
    <Box sx={{ background: '#fff', p: 4, height: '100%' }}>
      <Typography
        className="cursor-pointer"
        variant="h6"
        sx={{ '&:hover': { color: '#ED6C02' }, pb: 3 }}
      >
        {title}
        <ExpandCircleDownIcon
          sx={{
            transform: 'rotate(-90deg)',
            verticalAlign: 'text-top !important',
            marginLeft: 1.5,
          }}
        />
      </Typography>
      {children}
    </Box>
  )
}

export default function Special() {
  const [rank, setRank] = React.useState<RankDataType[]>([])
  const [activeIndex, setActiveIndex] = React.useState(0)
  const onMouseEnter = (index: number) => {
    setActiveIndex(index)
  }
  React.useEffect(() => {
    setRank(rankData)
  }, [])

  return (
    <Box className="relative">
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
          特色专区
        </Typography>
        <Round radius={4}></Round>
        <Round radius={8}></Round>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid item xs={6}>
            <BoxItem title="排行榜">
              <Stack direction="row" spacing={2}>
                {!rank.length
                  ? Array.from({ length: 5 }).map((item, index) => {
                      return (
                        <Skeleton
                          key={index}
                          variant="rounded"
                          width={60}
                          height={25}
                        ></Skeleton>
                      )
                    })
                  : rank.map((item, index) => (
                      <Typography
                        className="cursor-pointer"
                        variant="caption"
                        key={index}
                        sx={{
                          borderRadius: 4,
                          backgroundColor:
                            index == activeIndex ? '#F65730' : '#999',
                          color: '#fff',
                          p: '3px 8px',
                        }}
                        onMouseEnter={($event) => onMouseEnter(index)}
                      >
                        {item.catalog}
                      </Typography>
                    ))}
              </Stack>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box className="flex flex-1" sx={{ margin: '16px 0' }}>
                  {rank[activeIndex] ? (
                    <Box
                      width={30}
                      height={30}
                      sx={{
                        background: 'url(/rank.png) no-repeat',
                        width: '30px',
                        height: '30px',
                        backgroundSize: 'cover',
                        backgroundPosition: '0 0',
                      }}
                    ></Box>
                  ) : (
                    <Skeleton variant="circular" width={30} height={30} />
                  )}
                  {rank[activeIndex] ? (
                    <Box className="flex-1 relative" sx={{ marginLeft: 1 }}>
                      <Box
                        component="img"
                        src={rank[activeIndex]?.details[0]?.img}
                      ></Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          width: '100%',
                          background: 'rgba(0,0,0,0.5)',
                          p: '4px 8px',
                        }}
                      >
                        <Typography variant="caption" sx={{ color: '#fff' }}>
                          {rank[activeIndex]?.details[0]?.name}
                        </Typography>
                      </Box>
                    </Box>
                  ) : (
                    <Skeleton
                      sx={{ marginLeft: 1 }}
                      className="flex-1"
                      variant="rounded"
                      height="173px"
                    />
                  )}
                </Box>
                <List
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    flex: 1,
                  }}
                >
                  {rank[activeIndex]
                    ? rank[activeIndex].details.map(
                        (item, index) =>
                          index != 0 && (
                            <ListItem key={index} alignItems="flex-start">
                              <Box
                                width={30}
                                height={30}
                                sx={{
                                  background: 'url(/rank.png) no-repeat',
                                  width: '43px',
                                  height: '30px',
                                  backgroundSize: 'cover',
                                  backgroundPosition:
                                    index == 1 ? '-34px 0' : '-66px 0',
                                }}
                              ></Box>
                              <Box
                                component="img"
                                src={item.img}
                                width={76}
                                height={76}
                                sx={{
                                  objectFit: 'scale-down',
                                  margin: '0 10px',
                                }}
                              ></Box>
                              <Typography
                                sx={{
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  width: '235px',
                                  height: '76px',
                                  whiteSpace: 'nowrap',
                                }}
                                variant="button"
                              >
                                {item.name}
                              </Typography>
                            </ListItem>
                          )
                      )
                    : Array.from({ length: 2 }).map((item, index) => {
                        return (
                          <ListItem key={index} alignItems="flex-start">
                            <Skeleton
                              variant="rounded"
                              width="100%"
                              height={76}
                            ></Skeleton>
                          </ListItem>
                        )
                      })}
                </List>
              </Box>
            </BoxItem>
          </Grid>
          <Grid item xs={6}>
            <BoxItem title="限时特惠">
              <LimitedTime></LimitedTime>
            </BoxItem>
          </Grid>
          <Grid item xs={6}>
            <BoxItem title="视频中心">
              <Video></Video>
            </BoxItem>
          </Grid>
          <Grid item xs={6}>
            <BoxItem title="自营好货">
              <GoodStaff></GoodStaff>
            </BoxItem>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
