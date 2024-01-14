const getItem = (label: string, key: string, icon: any, children: any) => ({
  key,
  icon,
  label,
  children
})

const generateFooterItem = (_: string, key: string, icon: any, children: any) => ({
  key,
  icon,
  children
})

export const generateAllMenuItems = (list: any) =>
  list?.map((item: any) =>
    getItem(
      item.label,
      item.key,
      (item.icon && item.icon) || undefined,
      (item.children && generateAllMenuItems(item.children)) || undefined
    )
  )

export const generateFooterItems = (list: any) =>
  list?.map((item: any) =>
    generateFooterItem(
      item.label,
      item.key,
      (item.icon && item.icon) || undefined,
      (item.children && generateAllMenuItems(item.children)) || undefined
    )
  )
