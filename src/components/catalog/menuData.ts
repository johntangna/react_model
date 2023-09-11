import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
export const menuData =
{
  leftMenu: [
    {
      title: '团购下单',
      icon: AppRegistrationOutlinedIcon,
      iconColor: '#f44336'
    },
    {
      title: '我的订单',
      icon: DocumentScannerOutlinedIcon,
      iconColor: '#e91e63'
    },
    {
      title: '售后管理',
      icon: CleanHandsOutlinedIcon,
      iconColor: '#9c27b0'

    },
    {
      title: '数据罗盘',
      icon: InsertChartOutlinedSharpIcon,
      iconColor: '#2196f3'

    },
    {
      title: '商品求购',
      icon: ProductionQuantityLimitsOutlinedIcon,
      iconColor: '#3f51b5'

    }
  ],
  RightMenu: [
    {
      title: '我的积分',
      icon: SavingsOutlinedIcon,
      iconColor: '#00bcd4'

    },
    {
      title: '每日签到',
      icon: InventoryOutlinedIcon,
      iconColor: '#009688'

    },
    {
      title: '积分权益',
      icon: SellOutlinedIcon,
      iconColor: '#0091ea'

    },
    {
      title: '获取积分',
      icon: AddTaskOutlinedIcon,
      iconColor: '#00b8d4'

    }
  ]
}
