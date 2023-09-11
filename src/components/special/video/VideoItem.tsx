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
import { TabDataListType } from '@/app/utils/types'

interface PropsType {
  item: TabDataListType
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

export default function VideoItem(props: PropsType) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card
      sx={{
        width: 165,
        fontSize: '15px !important',
        cursor: 'pointer',
        boxShadow: 'unset',
        m: 1,
        '&:hover': { color: '#F65730' },
      }}
    >
      <CardMedia
        component="img"
        image={props.item.img}
        alt={props.item.title}
        sx={{
          width: 165,
        }}
      />
      <CardContent
        sx={{
          padding: '10px !important',
          margin: '0 auto',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        <Typography
          variant="button"
          sx={{ fontSize: '12px !important', fontWeight: 600 }}
        >
          {props.item.title}
        </Typography>
      </CardContent>
    </Card>
  )
}
