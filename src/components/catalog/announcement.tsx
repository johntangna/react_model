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
      {value === index && <Box sx={{ p: '10px 0' }}>{children}</Box>}
    </div>
  )
}

export default function ColorTabs() {
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
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{ minHeight: '32px !important' }}
      >
        {!tabList.length
          ? Array.from({ length: 2 }).map((item, index) => (
              <Stack key={index} direction={'row'} sx={{paddingRight: '10px'}}>
                <Skeleton
                  key={index}
                  variant="rectangular"
                  width={90}
                  height={32}
                ></Skeleton>
              </Stack>
            ))
          : tabList.map((item, index) => (
              <Tab
                key={index}
                label={item.title}
                sx={{ padding: '2px !important', minHeight: '32px !important' }}
              />
            ))}
      </Tabs>
      {!tabList.length ? (
        <Stack
          spacing={1}
          sx={{ paddingTop: '10px' }}
          className="flex-1 overflow-auto"
        >
          {Array.from({ length: 4 }).map((item, index) => (
            <Skeleton
              key={index}
              animation="wave"
              variant="rounded"
              width={315}
              height={46}
            />
          ))}
        </Stack>
      ) : (
        tabList.map((item, index) => (
          <CustomTabPanel key={item.value} value={value} index={index}>
            <List
              className="h-full menuList"
              sx={{
                bgcolor: 'background.paper',
                padding: '0px !important',
                borderRadius: '5px',
                overflow: 'auto',
              }}
            >
              {item.list.map((item, index) => (
                <ListItem
                  aria-describedby="mouse-over-popover"
                  disablePadding
                  dense
                  sx={{
                    padding: '5px',
                    '&:hover': {
                      color: '#ED6C02',
                      '&:mouseout': { color: 'inherit' },
                    },
                  }}
                  key={index}
                >
                  <ListItemButton
                    dense
                    sx={{ '&:hover': { background: 'rgba(237,108,2, 0.1)' } }}
                  >
                    <ListItemText
                      primary={item.title}
                      sx={{ fontSize: '13px' }}
                    />
                    <ListItemIcon sx={{ pl: 4 }}>
                      <ArrowForwardIosIcon
                        sx={{
                          color: 'rgba(0,0,0,0.6)',
                          fontSize: '12px !important',
                        }}
                      />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </CustomTabPanel>
        ))
      )}
      <Typography
        className="cursor-pointer"
        variant="caption"
        sx={{
          position: 'absolute',
          right: '5px',
          top: '5px',
          '&:hover': {
            color: '#ED6C02',
          },
        }}
      >
        查看全部
      </Typography>
    </Box>
  )
}
