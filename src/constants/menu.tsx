import { ProfileOutlined } from "@ant-design/icons"
import { constantsDictionary } from "./dictionary"
import { ROUTES } from "./routes"

export const mainMenuList = [
  {
    label: constantsDictionary.dashboard,
    key: ROUTES.dashboard,
    icon: <ProfileOutlined />
  }
]
