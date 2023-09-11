import { Skeleton, Stack } from '@mui/material'
import * as React from 'react'

type SkeletonType = {
  length: number
  variant: 'text' | 'rectangular' | 'rounded' | 'circular'
  width: number
  height: number
}

export default function SkeletonLoad(props: SkeletonType) {
  return (
    <Stack direction={'row'} spacing={2} sx={{margin: 1}}>
      {Array.from({ length: props.length }).map((item, index) => (
        <Skeleton
          key={index}
          variant={props.variant}
          className="skeleton"
          width={props.width}
          height={props.height}
        ></Skeleton>
      ))}
    </Stack>
  )
}
