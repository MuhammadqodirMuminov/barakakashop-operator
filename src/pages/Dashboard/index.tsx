import { Title } from "@/components"
import { dashboardDictionary } from "./dictionary"
import { StatisticsCard } from "./statisticscard"

export const Dashboard = () => {
  // const {data: {dashboard}} = useSelector(usersSelector);

  // const getData = async () => dispatch(getDashboard());

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <Title>{dashboardDictionary.title}</Title>
      <StatisticsCard statistics={{}} />
    </>
  )
}
