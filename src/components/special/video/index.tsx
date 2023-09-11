import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material'
import { tabData } from './tabData'
import { TabDataType } from '@/app/utils/types'
import VideoItem from './VideoItem'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="flex-1 overflow-auto"
    >
      {value === index && <Stack direction={'row'}>{children}</Stack>}
    </div>
  )
}

export default function Video() {
  const [tabList, setTabList] = React.useState<TabDataType[]>([])
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  React.useEffect(() => {
    setTabList(tabData)
  }, [])

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Tabs
        value={value}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{ minHeight: '32px !important', position: 'absolute', right: '0px !important', top: '-60px !important' }}
      >
        {!tabList.length ? (
          <Stack
            spacing={1}
            direction={'row'}
            sx={{ paddingTop: '10px' }}
            className="flex-1 overflow-auto"
          >
            {Array.from({ length: 4 }).map((item, index) => (
              <Skeleton
                key={index}
                animation="wave"
                variant="rounded"
                width={60}
                height={30}
              />
            ))}
          </Stack>
        ) : (
          tabList.map((item, index) => (
            <Tab
              key={index}
              label={item.title}
              sx={{ padding: '2px !important', minHeight: '32px !important', fontSize: '12px !important' }}
              onMouseEnter={($event) => handleChange($event, item.value)}
            />
          ))
        )}
      </Tabs>
      {!tabList.length ? (
        <Stack
          spacing={1}
          direction={'row'}
          sx={{ paddingTop: '10px' }}
          className="flex-1 overflow-auto"
        >
          {Array.from({ length: 4 }).map((item, index) => (
            <Skeleton
              key={index}
              animation="wave"
              variant="rounded"
              width={163}
              height={191}
            />
          ))}
        </Stack>
      ) : (
        tabList.map((item, index) => (
          <CustomTabPanel key={item.value} value={value} index={index}>
            {item.list.map((subItem, subIndex) => (
              <VideoItem key={subIndex} item={subItem}></VideoItem>
            ))}
          </CustomTabPanel>
        ))
      )}
    </Box>
  )
}
