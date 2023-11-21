import { Typography } from "antd"
import { ReactNode } from "react"

export const Title = ({ children }: { children: ReactNode }) => (
  <Typography.Title>{children}</Typography.Title>
)
