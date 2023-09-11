import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { pink } from '@mui/material/colors'

export default function SelectComponent() {
  const [selectValue, setSelectValue] = React.useState('0')

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value)
  }

  return (
    <FormControl
      sx={{ m: 1, minWidth: 60, minHeight: 30 }}
      size="small"
      variant="standard"
    >
      <InputLabel
        sx={{ color: '#d32f2f' }}
        id="demo-simple-select-error-label"
        color="error"
      >
        类型
      </InputLabel>
      <Select
        labelId="demo-simple-select-error-label"
        id="demo-select-small"
        displayEmpty={true}
        value={selectValue}
        label="类型"
        error
        onChange={handleChange}
      >
        <MenuItem value={0}>所有</MenuItem>
        <MenuItem value={10}>商品</MenuItem>
        <MenuItem value={20}>货源</MenuItem>
      </Select>
    </FormControl>
  )
}
