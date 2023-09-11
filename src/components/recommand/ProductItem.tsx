import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { RecommandDataType } from '@/app/utils/types'

interface PropsType {
  item: RecommandDataType
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function ProductItem(props: PropsType) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card
      sx={{ width: 232, fontSize: '15px !important', cursor: 'pointer' }}
    >
      <CardHeader
        action={<Typography variant="overline">更多&gt;</Typography>}
        sx={{ fontSize: '15px !important', p: '10px' }}
        title={props.item.title}
        subheader={props.item.subTitle}
      />
      <CardMedia
        component="img"
        image={props.item.image}
        alt={props.item.title}
        sx={{ width: '180px', margin: '0 auto' }}
      />
      <CardContent sx={{ padding: '10px !important' }}>
        <Typography
          variant="button"
          sx={{ fontSize: '12px !important', fontWeight: 600 }}
        >
          {props.item.name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: 'center', color: '#ED6C02' }}
        >
          <span>￥</span>
          {1 ? '登录后查看' : props.item.price}
        </Typography>
      </CardContent>
    </Card>
  )
}
