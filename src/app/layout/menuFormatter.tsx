import * as React from 'react'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import { Popper } from '@mui/material'
import { Grow } from '@mui/material'
import { Paper } from '@mui/material'
import { MenuItem } from '@mui/material'
import { MenuList } from '@mui/material'
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined'
import { pointIsOutside } from '../utils/util'

export default function LINKS() {
  const router = useRouter()
  return [
    {
      text: '主页',
      formatterComponent: () => {
        return <Button sx={{color: '#fff'}} onClick={() => router.push('/')}>主页</Button>
      },
    },
    {
      text: '欧美斯中心',
      formatterComponent: () => {
        return <Button sx={{color: '#fff'}}>欧美斯中心</Button>
      },
    },
    {
      text: '欧美斯简介',
      formatterComponent: () => {
        return <Button sx={{color: '#fff'}}>欧美斯简介</Button>
      },
    },
    {
      text: '产品与服务',
      formatterComponent: () => {
        const [open, setOpen] = React.useState(false)
        const anchorRef = React.useRef<HTMLButtonElement>(null)

        const onMouseMove = ($event: any) => {
          console.dir($event.clientX)
          console.dir($event.clientY)
          setOpen(true)
        }

        const onMouseLeave = ($event: any) => {
          // 当移出目标体时，当前事件的xy坐标与元素和宽高比较。超过即隐藏
          if (!pointIsOutside($event)) {
            setOpen(false)
          }
        }

        const handleClose = (event: Event | React.SyntheticEvent) => {
          if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
          ) {
            return
          }

          setOpen(false)
        }

        function handleListKeyDown(event: React.KeyboardEvent) {
          if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
          } else if (event.key === 'Escape') {
            setOpen(false)
          }
        }
        return (
          <div className="helpcenter">
            <Button
              ref={anchorRef}
              sx={{color: '#fff'}}
              id="composition-button"
              aria-controls={open ? 'composition-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onMouseMove={($event: any) => onMouseMove($event)}
              onMouseLeave={($event: any) => onMouseLeave($event)}
              onClick={() => router.push('/pages/help')}
            >
              产品与服务
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom"
              transition
              disablePortal
              onMouseLeave={($event: any) => onMouseLeave($event)}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom-start' ? 'left top' : 'left bottom',
                  }}
                >
                  <Paper>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem
                        className="!bg-white hover:!bg-black/5 !justify-center"
                        onClick={() => router.push('/pages/helpCollect')}
                      >
                        一件代发
                      </MenuItem>
                      <MenuItem
                        className="!justify-center"
                        onClick={() => router.push('/pages/help')}
                      >
                        供应商
                      </MenuItem>
                      <MenuItem
                        className="!justify-center"
                        onClick={() => router.push('/pages/feedback')}
                      >
                        微信服务
                      </MenuItem>
                    </MenuList>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        )
      },
    },
    {
      text: '交流中心',
      formatterComponent: () => {
        return <Button sx={{color: '#fff'}}>交流中心</Button>
      },
    },
    {
      text: '招商加盟',
      formatterComponent: () => {
        return <Button sx={{color: '#fff'}}>招商加盟</Button>
      },
    },
    {
      text: '小程序',
      formatterComponent: () => {
        return <Button sx={{color: '#fff'}}>小程序</Button>
      },
    },
    {
      text: '平台规则',
      formatterComponent: () => {
        return <Button sx={{color: '#fff'}}>平台规则</Button>
      },
    },
    {
      text: '帮助中心',
      formatterComponent: () => {
        const [open, setOpen] = React.useState(false)
        const anchorRef = React.useRef<HTMLButtonElement>(null)

        const onMouseMove = ($event: any) => {
          console.dir($event.clientX)
          console.dir($event.clientY)
          setOpen(true)
        }

        const onMouseLeave = ($event: any) => {
          // 当移出目标体时，当前事件的xy坐标与元素和宽高比较。超过即隐藏
          if (!pointIsOutside($event)) {
            setOpen(false)
          }
        }

        const handleClose = (event: Event | React.SyntheticEvent) => {
          if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
          ) {
            return
          }

          setOpen(false)
        }

        function handleListKeyDown(event: React.KeyboardEvent) {
          if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
          } else if (event.key === 'Escape') {
            setOpen(false)
          }
        }
        return (
          <div className="helpcenter">
            <Button
              ref={anchorRef}
              sx={{color: '#fff'}}
              id="composition-button"
              aria-controls={open ? 'composition-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onMouseMove={($event: any) => onMouseMove($event)}
              onMouseLeave={($event: any) => onMouseLeave($event)}
              onClick={() => router.push('/pages/help')}
            >
              <HelpCenterOutlinedIcon
                className="helpcentericon"
                sx={{ color: 'white' }}
                fontSize="small"
              />
              帮助中心
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom"
              transition
              disablePortal
              onMouseLeave={($event: any) => onMouseLeave($event)}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom-start' ? 'left top' : 'left bottom',
                  }}
                >
                  <Paper>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem
                        className="!bg-white hover:!bg-black/5 !justify-center"
                        onClick={() => router.push('/pages/help')}
                      >
                        帮助首页
                      </MenuItem>
                      <MenuItem
                        className="!justify-center"
                        onClick={() => router.push('/pages/helpCollect')}
                      >
                        问题汇总
                      </MenuItem>
                      <MenuItem
                        className="!justify-center"
                        onClick={() => router.push('/pages/feedback')}
                      >
                        需求反馈
                      </MenuItem>
                    </MenuList>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        )
      },
    },
  ]
}
