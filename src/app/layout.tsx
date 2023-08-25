'use client'
import * as React from 'react'
import '../css/global.css'
import '../css/menu.scss'
import '../css/btn.scss'
import '../css/list.scss'
import '../css/popover.scss'
import '../css/card.scss'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import Button from '@mui/material/Button'
import { Metadata } from 'next'
import { useRouter } from 'next/navigation'
import LINKS from './layout/menuFormatter'
import Image from 'next/image'
import SelectComponent from '@/components/select'
import InputAdornments from '@/components/input'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: '欧美斯商城-专业美妆护肤，只为最美的你',
  description: 'onmouse,欧美斯，美妆',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const buttonElementType = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {LINKS().map((item) => (
          <div key={item.text} className="mx-4 header">
            {item.formatterComponent()}
          </div>
        ))}
      </Box>
    )
  }
  const Login = () => {
    router.push('/pages/login')
  }
  const searchProduct = (productName: string) => {
    router.push(`/pages/product/${productName}`)
  }
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar variant="dense" sx={{ backgroundColor: '#323232' }}>
              <Image
                src={'/logo.png'}
                alt={'公司logo'}
                width="54"
                height="64"
              />
              <div className="flex-1"></div>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {buttonElementType()}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: '158px',
                }}
              >
                <Button variant="text" color="error" onClick={Login}>
                  登录
                </Button>
                <Button variant="contained" color="error">
                  注册
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              mt: ['48px'],
            }}
          >
            <Box className="flex" sx={{ background: '#fff', p: '2px' }}>
              <div className="flex-1"></div>
              <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <SelectComponent></SelectComponent>
                <InputAdornments
                  onProductNameChange={searchProduct}
                ></InputAdornments>
              </Box>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                p: `0 152px`,
                mt: ['28px'],
              }}
            >
              {children}
            </Box>
          </Box>
          <Footer></Footer>
        </ThemeRegistry>
      </body>
    </html>
  )
}
