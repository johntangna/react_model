'use client'
import * as React from 'react'
import Script from 'next/script'
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
import { useRouter } from 'next/navigation'
import LINKS from './layout/menuFormatter'
import SelectComponent from '@/components/select'
import InputAdornments from '@/components/input'
import Footer from '@/components/footer'
import Advance from '@/components/advance'
import { Stack, Typography, styled } from '@mui/material'

const TypographyStyled = styled((props: any) => {
  return (
    <Typography
      variant="h6"
      display={'block'}
      borderRadius={'50%'}
      border={'2px solid #F65730'}
      width={'38px'}
      height={'38px'}
      textAlign={'center'}
      lineHeight={'38px'}
    >
      {props.title}
    </Typography>
  )
})(({ theme }) => ({}))


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

  const omsProtect = [
    {
      title: '多',
      children: [
        {
          title: '现货多',
        },
        {
          title: '品牌众多 现货充足',
        },
      ],
    },
    {
      title: '快',
      children: [
        {
          title: '发货快',
        },
        {
          title: '自有仓储 下单即发',
        },
      ],
    },
    {
      title: '正',
      children: [
        {
          title: '正品保障',
        },
        {
          title: '正规保证 严格把控',
        },
      ],
    },
  ]
  

  return (
    <html lang="en">
      <head>
        <script src="/amfe-flexible/index.js"></script>
        <title>欧美斯商城-专业美妆护肤，只为最美的你</title>
        <meta name='description' content='onmouse,欧美斯，美妆，商城'></meta>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="192x192"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"></meta>
      </head>
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar variant="dense" sx={{ backgroundColor: '#323232' }}>
              <Box
                component={'img'}
                src={'/logo.png'}
                alt={'公司logo'}
                width={54}
                height={64}
                sx={{ objectFit: 'scale-down' }}
              ></Box>
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
              mt: ['64px'],
            }}
          >
            <Box className="flex" sx={{ background: '#fff', p: '2px' }}>
              <Box className="flex-1" paddingLeft={'9.5rem'}>
                <Stack
                  direction={'row'}
                  spacing={2}
                  height={'100%'}
                  alignItems={'center'}
                  color={'#F65730'}
                >
                  {omsProtect.map((item, index) => (
                    <Stack
                      direction={'row'}
                      spacing={2}
                      alignItems={'center'}
                      key={index}
                    >
                      <TypographyStyled title={item.title}></TypographyStyled>
                      <Box>
                        <Typography>{item.children[0].title}</Typography>
                        <Typography variant="caption">
                          {item.children[1].title}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </Box>
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
                p: `0 10rem`,
                mt: ['28px'],
              }}
            >
              {children}
            </Box>
          </Box>
          <Advance></Advance>
          <Footer></Footer>
        </ThemeRegistry>
      </body>
    </html>
  )
}

