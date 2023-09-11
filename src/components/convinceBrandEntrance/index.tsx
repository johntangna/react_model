'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grow from '@mui/material/Grow'
import { brandData } from './data'
import ProductItem from './ProductItem'
import { Grid, Skeleton, Typography } from '@mui/material'
import { BrandDataType } from '@/app/utils/types'

const product = (item: BrandDataType) => {
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

export default function ConvinceBrandEntrance() {
  const [data, setData] = React.useState<BrandDataType[]>([])

  React.useEffect(() => {
    setData(brandData)
  }, [])

  return (
    <Box className="relative">
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
