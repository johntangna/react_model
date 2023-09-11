'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grow from '@mui/material/Grow'
import { recommandData } from './data'
import { RecommandDataType } from '@/app/utils/types'
import ProductItem from './ProductItem'
import { Grid, Skeleton, Stack, Typography } from '@mui/material'
import Round from '../round'

const product = (item: RecommandDataType) => {
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

export default function Recommand() {
  const [data, setData] = React.useState<RecommandDataType[]>([])

  React.useEffect(() => {
    setData(recommandData)
  }, [])

  return (
    <Box sx={{ height: 382 }} className="relative">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <Round radius={4}></Round>
        <Round radius={8}></Round>
        <Typography variant="h4" sx={{ textAlign: 'center', margin: '0 8px' }}>
          精选联盟
        </Typography>
        <Round radius={4}></Round>
        <Round radius={8}></Round>
      </Box>
      <Typography
        variant="overline"
        className="cursor-pointer hover:text-orange-500 absolute right-0 top-0"
        sx={{ color: '#999' }}
      >
        查看全部&gt;&gt;
      </Typography>
      <Box sx={{ display: 'flex' }}>
        {!data.length ? (
          <Grid container wrap="nowrap">
            {Array.from({ length: 5 }).map((item, index) => (
              <Box key={index} sx={{ width: 232, marginRight: '16px' }}>
                {<Skeleton variant="rectangular" width={232} height={318} />}
              </Box>
            ))}
          </Grid>
        ) : (
          data.map((item, index) => (
            <Grow
              key={index}
              in={true}
              style={{ transformOrigin: '0 0 0' }}
              {...(true ? { timeout: index * 1000 } : {})}
            >
              {product(item)}
            </Grow>
          ))
        )}
      </Box>
    </Box>
  )
}
