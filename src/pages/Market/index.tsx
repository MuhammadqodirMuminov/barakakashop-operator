import { Card, Col, Row } from "antd"
import classnamesBind from "classnames/bind"
import styles from "./market.module.scss"

const cn = classnamesBind.bind(styles)

export const Market = () => {
  return (
    <Row className={cn("market")}>
      <Col>
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: "100%" }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col>
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: "100%" }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col>
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: "100%" }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col>
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: "100%" }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col>
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: "100%" }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col>
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: "100%" }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col>
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: "100%" }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col>
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: "100%" }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col>
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: "100%" }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
    </Row>
  )
}
