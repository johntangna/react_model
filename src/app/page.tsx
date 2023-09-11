import * as React from 'react'
import Box from '@mui/material/Box'
import Catalog from '@/components/catalog'
import CatalogHeader from '@/components/catalogHeader'
import Banner from '@/components/banner'
import Recommand from '@/components/recommand'
import Footer from '@/components/footer'
import ConvinceBrandEntrance from '@/components/convinceBrandEntrance'
import Special from '@/components/special'
import Channel from '@/components/channel'
import OmsCenter from '@/components/omsCenter'
import Advance from '@/components/advance'

// export const metadata = {
//   title: '欧美斯商城-专业美妆护肤，只为最美的你',
//   description: 'onmouse,欧美斯，美妆',
// };

export default function HomePage() {
  return (
    <Box>
      <Box
        sx={{
          '> *:not(:first-child)': { margin: '15px 0', overflow: 'hidden' },
        }}
      >
        <CatalogHeader></CatalogHeader>
        <Catalog></Catalog>
        <Banner bannerImg="/banner.jpg"></Banner>
        <Recommand></Recommand>
        <ConvinceBrandEntrance></ConvinceBrandEntrance>
        <OmsCenter></OmsCenter>
        <Special></Special>
        <Channel></Channel>
      </Box>
    </Box>
  )
}
