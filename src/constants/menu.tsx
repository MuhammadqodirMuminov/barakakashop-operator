import {
  BarChartOutlined,
  CreditCardOutlined,
  ProfileOutlined,
  ShoppingOutlined
} from "@ant-design/icons"
import { constantsDictionary } from "./dictionary"
import { ROUTES } from "./routes"

export const mainMenuList = [
  {
    label: constantsDictionary.dashboard,
    key: ROUTES.dashboard,
    icon: <ProfileOutlined />
  },
  {
    label: constantsDictionary.shop,
    key: ROUTES.shop,
    icon: <ShoppingOutlined />
  },
  {
    label: constantsDictionary.statistics,
    key: ROUTES.statistics,
    icon: <BarChartOutlined />
  },
  {
    label: constantsDictionary.payment,
    key: ROUTES.payment,
    icon: <CreditCardOutlined />
  }
]
