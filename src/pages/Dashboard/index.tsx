// import {useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {Title} from '@/components';
// import {useBreadCrumbs} from '@/hooks';
// import {getDashboard, usersSelector} from '@/store';
// import {dashboardBreadcrumb} from './constants';
// import {dashboardDictionary} from './dictionary';
// import {Statistics} from './Statistics';

export const Dashboard = () => {
  // const dispatch = useDispatch();
  // const {data: {dashboard}} = useSelector(usersSelector);

  // const getData = async () => dispatch(getDashboard());

  // useEffect(() => {
  //   getData();
  // }, []);

  // useBreadCrumbs(dashboardBreadcrumb);

  return (
    <>
    <h1>Dashboard</h1>
      {/* <Title>{dashboardDictionary.title}</Title> */}
      {/* <Statistics statistics={dashboard} /> */}
    </>
  );
};
