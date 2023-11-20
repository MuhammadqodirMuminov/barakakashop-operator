import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Layout as AntdLayout, Button, Col, Row } from "antd"
import classnamesBind from "classnames/bind"
import { Account } from "../Account"
import styles from "./header.module.scss"

const cn = classnamesBind.bind(styles)

export const Header = ({ collapsed, onCollapsedClick }: any) => (
  <AntdLayout.Header className={cn("header")}>
    <Row align="middle" justify={"space-between"}>
      <Col>
        <Button type="primary" onClick={onCollapsedClick} className={cn("header__menu")}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </Col>

      <Col>{collapsed ? <Account /> : null}</Col>
    </Row>
  </AntdLayout.Header>
)
