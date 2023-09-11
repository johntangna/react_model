'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import {
  Button,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material'
import Round from '../round'
import { CommonProductType, CoinDataType, PostType } from '@/app/utils/types'
import { hot } from './data'
import { coinData } from './coinData'
import { postData } from './postData'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'

const ProductItem = (item: CommonProductType, index: number) => {
  return (
    <Box
      key={index}
      minWidth={190.5}
      display={'flex'}
      sx={{ '&:hover': { color: '#ed6c02' }, cursor: 'pointer' }}
    >
      <Box component={'img'} src={item.img} width={90} height={90}></Box>
      <Stack marginLeft={'5px'}>
        <Typography
          fontWeight={'700'}
          fontSize={'15px'}
          sx={{
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': 2,
            'word-break': 'break-all',
            overflow: 'hidden',
            'text-overflow': 'ellipsis',
          }}
        >
          {item.name}
        </Typography>
        <Stack direction={'row'} alignItems={'center'} spacing={0.5}>
          <Typography variant="caption" color={'#ed6c02'} fontSize={'15px'}>
            {item.price}
          </Typography>
          <Typography variant="caption">积分/次</Typography>
        </Stack>
        <Typography
          variant="caption"
          display={'block'}
          sx={{ textDecoration: 'line-through', color: '#999' }}
        >
          20元/次
        </Typography>
      </Stack>
    </Box>
  )
}

const CoinDataItem = (item: CoinDataType, index: number) => {
  return (
    <Stack
      direction={'row'}
      spacing={1}
      key={index}
      alignItems={'center'}
      sx={{ padding: '10px 0' }}
    >
      <Box component={'img'} src={item.img} width={50} height={50}></Box>
      <Box flex={1}>
        <Typography fontSize={14} fontWeight={'bold'}>
          {item.title}
        </Typography>
        <Typography variant="caption">
          <span>奖励</span>
          <span style={{ color: '#ad773e' }}>{item.price}积分</span>
        </Typography>
      </Box>
      <Button
        variant="outlined"
        size="small"
        sx={{
          color: '#ad773e',
          borderColor: '#ad773e',
          width: '72px',
          '&:hover': {
            borderColor: '#ad773e',
            backgroundColor: 'rgba(173,119,62, 0.1)',
          },
        }}
        onClick={($event) => item.bindAction()}
      >
        {item.btnName}
      </Button>
    </Stack>
  )
}

const postDataItem = (item: PostType, index: number) => (
  <Stack key={index} sx={{ padding: '10px 0' }}>
    <Typography
      sx={{
        fontSize: '15px',
        fontWeight: 'bold',
        '&:hover': { color: '#ed6c02', cursor: 'pointer' },
        marginBottom: 1
      }}
    >
      {item.title}
    </Typography>
    <Stack direction={'row'} spacing={3}>
      <Typography variant='caption' sx={{color: '#999'}}>
        <AccessTimeOutlinedIcon></AccessTimeOutlinedIcon>
        {item.time}
      </Typography>
      <Typography variant='caption' sx={{color: '#999'}}>
        <ContactSupportOutlinedIcon></ContactSupportOutlinedIcon>
        {item.commentCount}
      </Typography>
      <Typography variant='caption' sx={{color: '#999'}}>
        <RemoveRedEyeOutlinedIcon></RemoveRedEyeOutlinedIcon>
        {item.viewCount}
      </Typography>
    </Stack>
  </Stack>
)

export default function OmsCenter() {
  const [hotData, setHotData] = React.useState<CommonProductType[]>([])
  const [coin, setCoin] = React.useState<CoinDataType[]>([])
  const [post, setPost] = React.useState<PostType[]>([])

  React.useEffect(() => {
    setHotData(hot)
    setCoin(coinData)
    setPost(postData)
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
          欧美斯中心
        </Typography>
        <Round radius={4}></Round>
        <Round radius={8}></Round>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          background: '#fff',
          marginTop: 1,
          paddingBottom: '15px',
        }}
      >
        <Grid item xs={2}>
          <Box
            component={'img'}
            src="/1100840750054113280.jpg"
            height={350}
          ></Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
                sx={{ borderBottom: '1px solid #ed6c02' }}
              >
                <Typography
                  sx={{
                    p: '6px 15px 6px 15px',
                    background: '#ed6c02',
                    color: '#fff',
                    borderTopLeftRadius: '5px',
                    borderTopRightRadius: '5px',
                  }}
                >
                  热销权益
                </Typography>

                <Typography
                  variant="caption"
                  className="!ml-8 cursor-pointer"
                  sx={{ '&:hover': { color: '#ed6c02' }, color: '#999' }}
                >
                  查看全部&gt;&gt;
                </Typography>
              </Stack>
              <Stack spacing={2} direction="row" margin={'10px 0'}>
                {!hotData.length ? (
                  Array.from({ length: 2 }).map((item, index) => (
                    <Stack direction={'row'} spacing={2} minWidth={190.5} key={index}>
                      <Skeleton
                        variant="rounded"
                        width={90}
                        height={90}
                      ></Skeleton>
                      <Box>
                        {Array.from({ length: 3 }).map((item, index) => {
                          return (
                            <Skeleton
                              key={index}
                              width={100}
                              sx={{ fontSize: '1rem', display: 'block' }}
                            />
                          )
                        })}
                      </Box>
                    </Stack>
                  ))
                ) : (
                  <Stack direction="row" spacing={2} overflow={'hidden'}>
                    {hotData.map((item, index) => ProductItem(item, index))}
                  </Stack>
                )}
              </Stack>
            </Stack>
            <Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
                sx={{ borderBottom: '1px solid #ed6c02' }}
              >
                <Typography
                  sx={{
                    p: '6px 15px 6px 15px',
                    background: '#ed6c02',
                    color: '#fff',
                    borderTopLeftRadius: '5px',
                    borderTopRightRadius: '5px',
                  }}
                >
                  积分获取
                </Typography>

                <Typography
                  variant="caption"
                  className="!ml-8 cursor-pointer"
                  sx={{ '&:hover': { color: '#ed6c02' }, color: '#999' }}
                >
                  查看全部&gt;&gt;
                </Typography>
              </Stack>
              {!coin.length ? (
                Array.from({ length: 2 }).map((item, index) => (
                  <Stack paddingTop={1} key={index}>
                    <Skeleton
                      variant="rounded"
                      width={'100%'}
                      height={70}
                    ></Skeleton>
                  </Stack>
                ))
              ) : (
                <Stack>
                  {coin.map((item, index) => CoinDataItem(item, index))}
                </Stack>
              )}
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            component={'img'}
            src="/1143565040847159296.jpg"
            height={350}
          ></Box>
        </Grid>
        <Grid item xs={4} sx={{paddingRight: '10px'}}>
          <Box>
            <Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
                sx={{ borderBottom: '1px solid #ed6c02' }}
              >
                <Typography
                  sx={{
                    p: '6px 15px 6px 15px',
                    background: '#ed6c02',
                    color: '#fff',
                    borderTopLeftRadius: '5px',
                    borderTopRightRadius: '5px',
                  }}
                >
                  反馈有奖
                </Typography>

                <Typography
                  variant="caption"
                  className="!ml-8 cursor-pointer"
                  sx={{ '&:hover': { color: '#ed6c02' }, color: '#999' }}
                >
                  查看全部&gt;&gt;
                </Typography>
              </Stack>
              <Stack spacing={2} direction="row" margin={'10px 0'}>
                {!post.length ? (
                  Array.from({ length: 1 }).map((item, index) => (
                    <Stack key={index} direction={'row'} spacing={2} minWidth={190.5}>
                      <Skeleton
                        variant="rounded"
                        width={353}
                        height={70}
                      ></Skeleton>
                    </Stack>
                  ))
                ) : (
                  <Stack direction="row" spacing={2} overflow={'hidden'}>
                    {postDataItem(post[0], 0)}
                  </Stack>
                )}
              </Stack>
            </Stack>
            <Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
                sx={{ borderBottom: '1px solid #ed6c02' }}
              >
                <Typography
                  sx={{
                    p: '6px 15px 6px 15px',
                    background: '#ed6c02',
                    color: '#fff',
                    borderTopLeftRadius: '5px',
                    borderTopRightRadius: '5px',
                  }}
                >
                  精贴推荐
                </Typography>

                <Typography
                  variant="caption"
                  className="!ml-8 cursor-pointer"
                  sx={{ '&:hover': { color: '#ed6c02' }, color: '#999' }}
                >
                  查看全部&gt;&gt;
                </Typography>
              </Stack>
              {!post.length ? (
                Array.from({ length: 2 }).map((item, index) => (
                  <Stack key={index} paddingTop={1}>
                    <Skeleton
                      variant="rounded"
                      width={'100%'}
                      height={70}
                    ></Skeleton>
                  </Stack>
                ))
              ) : (
                <Stack>
                  {post.map((item, index) => postDataItem(item, index))}
                </Stack>
              )}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
