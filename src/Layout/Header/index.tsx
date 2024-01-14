import { logo } from "@/assets"
import { constantsDictionary } from "@/constants"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Layout as AntdLayout, Button, Col, Row } from "antd"
import classnamesBind from "classnames/bind"
import { Account } from "../Account"
import styles from "./header.module.scss"

const cn = classnamesBind.bind(styles)

export const Header = ({ isMobile, collapsed, onCollapsedClick }: any) => (
  <AntdLayout.Header className={cn("header")}>
    <Row align="middle" justify={"space-between"}>
      {isMobile ? (
        <div className={cn("layout__logo")}>
          <img src={logo} alt="Logo" />
          {!collapsed && (
            <span className={cn("layout__logo-text")}>{constantsDictionary.siteTitle}</span>
          )}
        </div>
      ) : (
        <Col>
          <Button type="primary" onClick={onCollapsedClick} className={cn("header__menu")}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </Col>
      )}

      <Col>{collapsed ? <Account /> : null}</Col>
    </Row>
  </AntdLayout.Header>
)
