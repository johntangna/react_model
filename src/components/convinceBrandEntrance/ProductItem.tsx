import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { BrandDataType, RecommandDataType } from '@/app/utils/types'
import { Box } from '@mui/material'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'

interface PropsType {
  item: BrandDataType
}

export default function ProductItem(props: PropsType) {
  const [show, setShow] = React.useState(false)
  const showDetails = (flag: boolean) => {
    setShow(flag)
  }
  return (
    <Card
      sx={{
        width: 232,
        fontSize: '15px !important',
        cursor: 'pointer',
        position: 'relative'
      }}
      onMouseEnter={($event: any) => showDetails(true)}
      onMouseLeave={($event: any) => showDetails(false)}
    >
      <CardMedia
        component="img"
        image={props.item.img}
        sx={{ width: 232, height: 330, margin: '0 auto' }}
      />
      <CardContent
        sx={{
          p: '0 !important',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: show ? '100%' : 'auto',
          transition: 'all 0.5s'
        }}
      >
        {
          <Box
            sx={{
              background: show
                ? 'rgba(255, 255, 255, 0.8)'
                : 'rgba(255, 255, 255, 0.5)',
              width: '100%',
              height: '100%',
              p: show ? '110px 0' : 1.2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'all 0.5s'
            }}
          >
            <Box
              component="img"
              src={props.item.logo}
              sx={{ height: 35, objectFit: 'scale-down', width: '100%' }}
            ></Box>
            {show && (
              <Typography variant='h6' sx={{'&:hover': {color: '#ED6C02'}}}>
                进入品牌
                <ExpandCircleDownIcon sx={{ transform: 'rotate(-90deg)', verticalAlign: 'text-top !important', marginLeft: 1.5 }} />
              </Typography>
            )}
          </Box>
        }
      </CardContent>
    </Card>
  )
}
