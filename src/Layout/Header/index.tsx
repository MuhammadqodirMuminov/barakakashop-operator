import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Layout as AntdLayout, Button, Col, Row } from "antd"
import classnamesBind from "classnames/bind"
import { Breadcrumb } from "../../components/Breadcrumb/"
import { Account } from "../Account"
import styles from "./header.module.scss"

const cn = classnamesBind.bind(styles)

export const Header = ({ collapsed, onCollapsedClick }: any) => (
  <AntdLayout.Header className={cn("header")}>
    <Row align="middle">
      <Col span={1}>
        <Button type="primary" onClick={onCollapsedClick} className={cn("header__menu")}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </Col>

      <Col span={10}>
        <Breadcrumb />
      </Col>

      <Col span={6} offset={7}>
        <Account />
      </Col>
    </Row>
  </AntdLayout.Header>
)
