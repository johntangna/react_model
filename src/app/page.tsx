import * as React from 'react'
import Box from '@mui/material/Box'
import Catalog from '@/components/catalog'
import CatalogHeader from '@/components/catalogHeader'
import Banner from '@/components/banner'
import Recommand from '@/components/recommand'
import Footer from '@/components/footer'
import ConvinceBrandEntrance from '@/components/convinceBrandEntrance'
import Special from '@/components/special'

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
        <Special></Special>
      </Box>
    </Box>
  )
}
