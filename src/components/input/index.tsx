import * as React from 'react'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import { SelectChangeEvent } from '@mui/material'

export default function InputAdornments(props: any) {
  const { onProductNameChange } = props
  const [searchValue, setSearchValue] = React.useState('热门商品')
  const changeSearchValue = ($event: SelectChangeEvent) => {
    setSearchValue($event.target.value)
  }
  const search = () => {
    onProductNameChange(searchValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <FormControl sx={{ m: 1, width: '70%' }} size="small" variant="standard">
        <InputLabel
          htmlFor="standard-adornment-password"
          sx={{ color: '#d32f2f !important' }}
        >
          搜索商品/类别/品牌/季节/性别
        </InputLabel>
        <Input
          id="standard-adornment-password"
          sx={{width: '100%'}}
          value={searchValue}
          color="error"
          error
          onChange={($event: any) => changeSearchValue($event)}
          endAdornment={
            <InputAdornment position="end">
              <ManageSearchIcon
              sx={{ color: '#E35C5C !important', '&:hover': {color: '#d32f2f !important'} }}
                className="cursor-pointer"
                aria-label="toggle password visibility"
                onClick={search}
              ></ManageSearchIcon>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  )
}
