import { mainMenuList } from "@/constants"
import { generateFooterItems } from "@/utils/generateAllMenuItems"
import { Menu as AntdMenu } from "antd"
import { useMemo } from "react"
import { useLocation } from "react-router-dom"
import { history } from "../../utils"

export const FooterMenu = () => {
  const { pathname } = useLocation()
  const mainMenuItems = generateFooterItems(mainMenuList)

  const handleClick = ({ key, domEvent }: any) => {
    domEvent.preventDefault()
    domEvent.stopPropagation()
    history.push(key)
  }

  const selectedMenuOpenKeyList = useMemo(() => pathname.split("/"), [pathname])

  const selectedMenuOpenKey = useMemo(
    () => (selectedMenuOpenKeyList.length ? `/${selectedMenuOpenKeyList[1]}` : ""),
    [selectedMenuOpenKeyList]
  )

  return (
    <AntdMenu
      style={{
        flexDirection: "row",
        justifyContent: "center",
        gap : "15px",
        overflow : 'hidden'
      }}
      theme="dark"
      mode="horizontal"
      selectedKeys={[selectedMenuOpenKey]}
      defaultOpenKeys={[selectedMenuOpenKey]}
      defaultSelectedKeys={[pathname]}
      onClick={handleClick}
    >
      {mainMenuItems.map((item: any) => (
        <AntdMenu.Item key={item.key} style={{ borderRadius: "8px" }} className="custom-menu-item">
          <span>{item.icon}</span>
        </AntdMenu.Item>
      ))}
    </AntdMenu>
  )
}
