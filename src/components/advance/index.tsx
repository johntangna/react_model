import { Box, Stack, Typography } from '@mui/material'
import * as React from 'react'

const info = [
  {
    title: '关于我们',
    children: [
      {
        title: '欧美斯简介',
        component: 'a',
        href: '',
      },
      {
        title: '招商加盟',
        component: 'a',
        href: '',
      },
      {
        title: '服务协议',
        component: 'a',
        href: '',
      },
      {
        title: '平台声明',
        component: 'a',
        href: '',
      },
    ],
  },
  {
    title: '新手指南',
    children: [
      {
        title: '注册成为采购商',
        component: 'a',
        href: '',
      },
      {
        title: '注册成为供应商',
        component: 'a',
        href: '',
      },
      {
        title: '常见问题',
        component: 'a',
        href: '',
      },
    ],
  },
  {
    title: '公司站点',
    children: [
      {
        title: '欧美斯集团',
        component: 'a',
        href: '',
      },
      {
        title: '欧美斯集团加盟',
        component: 'a',
        href: '',
      },
      {
        title: '新零售系统',
        component: 'a',
        href: '',
      },
      {
        title: '智慧云仓',
        component: 'a',
        href: '',
      },
      {
        title: '交流中心',
        component: 'a',
        href: '',
      },
      {
        title: '欧美斯',
        component: 'a',
        href: '',
      },
    ],
  },
  {
    title: '联系我们',
    children: [
      {
        title: '15951735153',
        component: 'a',
        href: '',
      },
      {
        title: '欧美斯简介',
        component: 'img',
        src: '/code.png',
      },
    ],
  },
  {
    title: '关注我们',
    children: [
      {
        title: '微信公众号',
        component: 'a',
        href: '',
      },
      {
        title: '欧美斯简介',
        component: 'img',
        src: '/code.png',
      },
    ],
  },
]

export default function Advance() {
  return (
    <Stack
      direction={'row'}
      spacing={3}
      justifyContent={'space-between'}
      alignItems={'flex-start'}
      sx={{
        backgroundColor: '#232733',
        width: '100%',
        padding: '103px 200px',
        color: '#ccc',
      }}
    >
      {info.map((item, index) => {
        return (
          <Box key={index}>
            <Typography color={'#fff'} variant="h6" marginBottom={2}>
              {item.title}
            </Typography>
            {item.children.map((subItem, index) =>
              subItem.component == 'img' ? (
                <Box
                  key={index}
                  display={'block'}
                  width={'100px'}
                  height={'100px'}
                >
                  <Box component={'img'} src={subItem.src}></Box>
                </Box>
              ) : (
                <Box
                  key={index}
                  component={`${subItem.component}` as React.ElementType}
                  display={'block'}
                  href={subItem.href}
                  marginBottom={1}
                  sx={{
                    '&:hover': {
                      color: '#ED6C02',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {subItem.title}
                </Box>
              )
            )}
          </Box>
        )
      })}
    </Stack>
  )
}
