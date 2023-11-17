// import { Loader } from '@/components';
// import { useBootstrap } from '@/hooks';

import { Routes } from './router';

export const Router = () => {
  // const { isAuth, isInitiated } = useBootstrap();

  // if (isInitiated) {
  // 	return <Loader />;
  // }

  return <Routes isAuth={false} />;
};
