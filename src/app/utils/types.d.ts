export interface pointerPosition {
  clientX: Number
  clientY: Number
  borderLeft: Number
  borderRight: Number
  borderTop: Number
  borderBottom: Number
}

export interface NavSubjectChildren {
  navSubjectChildrenItem: string,
}

export interface NavSubject {
  navSubjectItem: string,
  navSubjectChildren: NavSubjectChildren[],
}

export interface NavListType {
  navItem: string
  navSubject: NavSubject[]
}

export interface TabDataListType {
  title: string
  href?: string
  img?: string
}

export interface TabDataType {
  value: number,
  title: string,
  list: TabDataListType[]
}

export interface MenuItemType {
  iconColor: SystemStyleObject<Theme> | CssVariableType | ((theme: Theme) => string | number | SystemStyleObject<Theme>) | ResponsiveStyleValue<Color | string[] | undefined> | ((theme: Theme) => ResponsiveStyleValue<Color | string[] | undefined>)
  title: string,
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  }
}

export interface MenuDataType {
  leftMenu: MenuItemType[]
  rightMenu: MenuItemType[]
}

export interface ProductDataType {
  image: string,
  name: string,
  price?: number
}

export interface RecommandDataType extends ProductDataType {
  title: string,
  subTitle: string,
}

export interface BrandDataType {
  logo: string,
  img: string
}

export interface CommonProductType {
  img: string,
  name: string,
  price?: number
}

export interface RankDataDetailsType extends CommonProductType {

}
export interface RankDataType {
  catalog: string,
  details: RankDataDetailsType[],
}

export interface CoinDataType {
  img: string,
  title: string,
  price: number,
  btnName: string,
  bindAction: Function
}

export interface PostType {
  title: string,
  time: string,
  commentCount: number,
  viewCount: number
}

export interface ChannelType {
  img: string
  href: string
  title?: string
}