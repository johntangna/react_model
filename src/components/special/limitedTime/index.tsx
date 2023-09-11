import * as React from 'react'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import Paper from '@mui/material/Paper'
import Zoom from '@mui/material/Zoom'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Theme } from '@mui/material/styles'
import { ProductDataType } from '@/app/utils/types'
import ProductItem from './ProductItem'
import { Grid, Skeleton } from '@mui/material'
import { limitedData } from './data'

const product = (item: ProductDataType) => {
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

export default function LimitedTime() {
  const [data, setData] = React.useState<ProductDataType[]>([])
  React.useEffect(() => {
    setData(limitedData);
  }, [])

  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        {!data.length ? (
          <Grid container wrap="nowrap">
            {Array.from({ length: 3 }).map((item, index) => (
              <Box key={index} sx={{ width: 165, marginRight: '16px' }}>
                {<Skeleton variant="rectangular" width={165} height={234} />}
              </Box>
            ))}
          </Grid>
        ) : (
          data.map((item, index) => (
            <Zoom
              key={index}
              in={true}
              style={{ transformOrigin: '0 0 0' }}
              {...(true ? { timeout: index * 1000 } : {})}
            >
              {product(item)}
            </Zoom>
          ))
        )}
      </Box>
    </Box>
  )
}
