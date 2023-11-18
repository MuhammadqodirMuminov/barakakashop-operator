import CountUp from "react-countup"

export const dashboardBreadcrumb = [{ label: "Dashboard" }]

export const formatter = (value: any) => <CountUp end={value} separator="," />
