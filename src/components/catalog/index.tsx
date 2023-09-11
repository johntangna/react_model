'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {
  Button,
  Container,
  Grid,
  Popover,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material'
import {
  MenuDataType,
  MenuItemType,
  NavListType,
  NavSubject,
} from '@/app/utils/types'
import { data } from './data'
import { pointerInSpecifyArea } from '@/app/utils/util'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import ImageStepper from './ImageStepper'
import Announcement from './announcement'
import { menuData } from './menuData'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const MenuItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 45,
  lineHeight: '60px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

export default function Catalog() {
  const [anchorPosition, setAnchorPosition] = React.useState({
    top: 0,
    left: 0,
  })
  const [activeIndex, setActiveIndex] = React.useState(-1)
  const [navSubject, setNavSubject] = React.useState<NavSubject[]>([])
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)
  const [navLists, setNavLists] = React.useState<NavListType[]>([])
  const openPopover = (event: any, item: any, index: number) => {
    setActiveIndex(index)
    item && setNavSubject(item.navSubject)
    setAnchorEl(event.currentTarget)
  }
  /**
   * 采用鼠标进入后，判断是否超出指定区域，就要关闭并初始化菜单
   * @param event
   */
  const closePopover = (event: any) => {
    if (!pointerInSpecifyArea(event, document.querySelector('.menuList'))) {
      setActiveIndex(-1)
      setAnchorEl(null)
    }
  }

  const [leftMenu, setLeftMenu] = React.useState<MenuItemType[]>(menuData.leftMenu)
  const [rightMenu, setRightMenu] = React.useState<MenuItemType[]>(menuData.RightMenu)
  const menuPopover = () => {
    const menuList = document.querySelector('.menuList') as HTMLElement
    console.dir(menuList)
    setAnchorPosition({
      top: menuList.offsetTop,
      left: menuList.offsetLeft + menuList.offsetWidth,
    })
  }
  React.useEffect(() => {
    menuPopover()
    setNavLists(data)
    window.addEventListener("resize", (e) => {
      menuPopover()
    })
    // setLeftMenu(menuData.leftMenu)
    // setRightMenu(menuData.RightMenu)
  }, [])

  return (
    <Box
      sx={{
        width: '100%',
        height: '470px',
        display: 'flex',
      }}
    >
      <List
        className="w-52 h-full menuList"
        sx={{
          bgcolor: 'background.paper',
          padding: '0px !important',
          borderRadius: '5px',
          overflow: 'auto',
        }}
      >
        {!navLists.length ? (
          <Stack spacing={1}>
            {Array.from({ length: 12 }).map((item, index) => (
              <Skeleton
                key={index}
                animation="wave"
                variant="rounded"
                width={162}
                height={36}
              />
            ))}
          </Stack>
        ) : (
          navLists.map((item, index) => (
            <div
              key={index}
              onMouseLeave={($event: any) => closePopover($event)}
            >
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
                className={activeIndex == index ? 'activeList' : ''}
                onMouseEnter={($event: any) => openPopover($event, item, index)}
              >
                <ListItemButton
                  dense
                  sx={{
                    '&:hover': { background: 'rgba(237,108,2, 0.1)' },
                    paddingRight: '0 !important',
                  }}
                  className={activeIndex == index ? 'activeListItem' : ''}
                >
                  <ListItemText className="font-bold" primary={item.navItem} />
                  <ListItemIcon sx={{ paddingLeft: '40px' }}>
                    <ArrowForwardIosIcon
                      sx={{ color: 'rgba(0,0,0,0.6)', fontSize: '12px' }}
                    />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              {index !== navLists.length - 1 && <Divider />}
            </div>
          ))
        )}
      </List>
      <Popover
        id="mouse-over-popover"
        sx={{
          marginLeft: '5px',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorReference="anchorPosition"
        anchorPosition={anchorPosition}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onMouseLeave={($event: any) => closePopover($event)}
      >
        <Container
          sx={{
            width: '690px',
            height: '455px !important',
            padding: '16px 10px !important',
          }}
        >
          {navSubject.map((item, index) => (
            <Box key={index} sx={{ marginBottom: '7px' }}>
              <Stack direction="row" className='items-center'>
                <Box
                  sx={{ backgroundColor: '#ED6C02', width: 2, height: 16, marginRight: '3px' }}
                ></Box>
                <Button
                  variant="text"
                  className="!text-base !text-gray-500 !mb-1"
                  sx={{
                    '&:hover': {
                      color: '#ED6C02 !important',
                      background: 'none !important',
                    },
                  }}
                >
                  {item.navSubjectItem}
                </Button>
              </Stack>
              <Divider></Divider>
              <Stack
                direction="row"
                divider={
                  <Divider
                    sx={{ margin: '9px 0 !important' }}
                    orientation="vertical"
                    variant="middle"
                    flexItem
                  />
                }
                className="!flex-wrap"
                spacing={1}
              >
                {item.navSubjectChildren.map((subItem, subIndex) => (
                  <Button
                    key={subIndex}
                    variant="text"
                    className="!text-sm !text-gray-400"
                    sx={{
                      padding: '8px',
                      '&:hover': {
                        color: '#ED6C02 !important',
                        background: 'none !important',
                      },
                      '&.MuiButtonBase-root': {
                        marginLeft: '0 !important',
                      },
                    }}
                  >
                    {subItem.navSubjectChildrenItem}
                  </Button>
                ))}
              </Stack>
            </Box>
          ))}
        </Container>
      </Popover>
      <Grid container spacing={1} sx={{ paddingLeft: '7px' }}>
        <Grid item xs={8}>
          <Item sx={{ padding: 0 }}>
            <ImageStepper></ImageStepper>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item
            sx={{
              height: '110px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2>
              <strong>Hi~欢迎来到欧美斯商城</strong>
            </h2>
            <Stack
              direction="row"
              divider={
                <Divider
                  sx={{ margin: '9px 0 !important' }}
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
              }
              className="!flex-wrap"
              spacing={1}
              sx={{ marginTop: '15px' }}
            >
              <Button variant="text">登录</Button>
              <Button
                variant="text"
                color="error"
                sx={{ marginLeft: '0 !important' }}
              >
                注册
              </Button>
            </Stack>
          </Item>
          <Grid container spacing={1} sx={{ padding: '10px 0' }}>
            <Grid item xs={7}>
              <Item sx={{ height: '130px', display: 'flex' }}>
                <Box
                  className="cursor-pointer"
                  sx={{
                    bgcolor: 'background.default',
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr 1fr' },
                    gap: 2,
                    alignItems: 'center',
                  }}
                >
                  {leftMenu.map((item, index) => (
                    <MenuItem elevation={0} key={index}>
                      <Box
                        component={item.icon}
                        sx={{ color: item.iconColor }}
                      ></Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#666 !important',
                          '&:hover': {
                            color: '#ED6C02 !important',
                          },
                        }}
                      >
                        {item.title}
                      </Typography>
                    </MenuItem>
                  ))}
                </Box>
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item sx={{ height: '130px' }}>
                <Box
                  className="cursor-pointer"
                  sx={{
                    bgcolor: 'background.default',
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr' },
                    gap: 2,
                  }}
                >
                  {rightMenu.map((item, index) => (
                    <MenuItem elevation={0} key={index}>
                      <Box
                        component={item.icon}
                        sx={{ color: item.iconColor }}
                      ></Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#666 !important',
                          '&:hover': {
                            color: '#ED6C02 !important',
                          },
                        }}
                      >
                        {item.title}
                      </Typography>
                    </MenuItem>
                  ))}
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Item sx={{ height: '194px' }}>
            <Announcement></Announcement>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}
