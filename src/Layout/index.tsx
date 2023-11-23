import { logo } from "@/assets"
import { constantsDictionary } from "@/constants"
import { useScreenSize } from "@/hooks"
import { Layout as AntdLayout } from "antd"
import classnamesBind from "classnames/bind"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { Content } from "./Content"
import { Header } from "./Header"
import { Menu } from "./Menu"
import styles from "./layout.module.scss"

const cn = classnamesBind.bind(styles)

export const Layout = () => {
  const [value, setValue] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const screenSize = useScreenSize()

  console.log(screenSize)
  useEffect(() => {
    setIsMobile(screenSize.width < 529 ? true : false)
    console.log(isMobile)
  }, [screenSize])

  const sideWidth = value ? 80 : 250
  const toggle = () => setValue(!value)

  return (
    <AntdLayout className={cn("layout")} hasSider>
      {!isMobile ? (
        <AntdLayout.Sider
          trigger={null}
          collapsible
          collapsed={value}
          width={sideWidth}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0
          }}
        >
          <div className={cn("layout__logo")}>
            <img src={logo} alt="Logo" />
            {!value && (
              <span className={cn("layout__logo-text")}>{constantsDictionary.siteTitle}</span>
            )}
          </div>

          <div className="layout__menu">
            <Menu />
          </div>
        </AntdLayout.Sider>
      ) : null}

      <AntdLayout style={{ marginLeft: isMobile ? 0 : sideWidth }}>
        <Header collapsed={value} onCollapsedClick={toggle} />

        <Content>
          <Outlet />
        </Content>

        <AntdLayout.Footer  style={{ position: "fixed", bottom: 0, left: 0, right: 0, background : '#001628' }}>
          Footer
        </AntdLayout.Footer>
      </AntdLayout>
    </AntdLayout>
  )
}
