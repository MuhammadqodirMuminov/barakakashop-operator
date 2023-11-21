import { Col, Row, Statistic, Typography } from "antd"
import classnameBind from "classnames/bind"
import { formatter } from "../constants"
import styles from "../dashboard.module.scss"

const cn = classnameBind.bind(styles)

export const StatisticsCard = ({ statistics }) => (
  <Col>
    <Typography.Text style={{ fontSize: "24px", marginBottom: "20px" }}>
      Orders info
    </Typography.Text>
    <Row
      className={cn("dashboard__block")}
      style={{ justifyContent: "space-between", flexWrap: "wrap" }}
    >
      <Col className={cn("dashboard__block__col")} style={{ maxWidth: "180px", width: "100%" }}>
        <Statistic
          style={{ alignItems: "center", padding: "0px 20px" }}
          title="Orders new"
          value={10}
          formatter={formatter}
        />
      </Col>
      <Col
        className={cn("dashboard__block__col")}
        style={{ maxWidth: "180px", width: "100%", backgroundColor: "#3FA34D" }}
      >
        <Statistic
          style={{ alignItems: "center", padding: "0px 20px" }}
          title="Orders accepted"
          value={2}
          formatter={formatter}
        />
      </Col>
      <Col
        className={cn("dashboard__block__col")}
        style={{ maxWidth: "180px", width: "100%", backgroundColor: "#d00000" }}
      >
        <Statistic
          style={{ alignItems: "center", padding: "0px 20px" }}
          title="Orders rejected"
          value={29}
          formatter={formatter}
        />
      </Col>
      <Col
        className={cn("dashboard__block__col")}
        style={{ maxWidth: "180px", width: "100%", backgroundColor: "#dedbd2" }}
      >
        <Statistic
          style={{ alignItems: "center", padding: "0px 20px" }}
          title="Orders hold"
          value={29}
          formatter={formatter}
        />
      </Col>
      <Col
        className={cn("dashboard__block__col")}
        style={{ maxWidth: "180px", width: "100%", backgroundColor: "#fcbf49" }}
      >
        <Statistic
          style={{ alignItems: "center", padding: "0px 20px" }}
          title="Orders sended"
          value={19}
          formatter={formatter}
        />
      </Col>
      <Col
        className={cn("dashboard__block__col")}
        style={{ maxWidth: "180px", width: "100%", backgroundColor: "#4cc9f0" }}
      >
        <Statistic
          style={{ alignItems: "center", padding: "0px 20px" }}
          title="Orders comeback"
          value={19}
          formatter={formatter}
        />
      </Col>
    </Row>

    <Typography.Text style={{ fontSize: "24px", marginBottom: "20px" }}>
      Personal info
    </Typography.Text>

    <Row
      className={cn("dashboard__block")}
      style={{ justifyContent: "space-between", flexWrap: "wrap" }}
    >
      <Col
        className={cn("dashboard__block__col")}
        style={{ maxWidth: "350px", width: "100%", backgroundColor: "#3FA34D" }}
      >
        <Statistic
          style={{ alignItems: "center", padding: "0px 20px" }}
          title="Payment"
          value={0}
          formatter={formatter}
        />
      </Col>
      <Col
        className={cn("dashboard__block__col")}
        style={{ maxWidth: "350px", width: "100%", backgroundColor: "#3FA34D" }}
      >
        <Statistic
          style={{ alignItems: "center", padding: "0px 20px" }}
          title="Balance"
          value={"adults"}
          formatter={formatter}
        />
      </Col>
      <Col
        className={cn("dashboard__block__col")}
        style={{ maxWidth: "350px", width: "100%", backgroundColor: "#3FA34D" }}
      >
        <Statistic
          style={{ alignItems: "center", padding: "0px 20px" }}
          title="Hold balance"
          value={"adults"}
          precision={2}
          formatter={formatter}
        />
      </Col>
    </Row>
  </Col>
)
