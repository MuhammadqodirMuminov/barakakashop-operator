import { Loader } from '@/components';
import loadable from '@loadable/component';
const handleCatchChunkError = () => {
  return { default: Loader };
};

export const Home = loadable(
  () => import('@/pages').then(({ Home }) => ({ default: Home })).catch(handleCatchChunkError),
  { fallback: <Loader /> },
);

export const UssdLayout = loadable(
  () =>
    import('@/pages')
      .then(({ UssdLayout }) => ({ default: UssdLayout }))
      .catch(handleCatchChunkError),
  { fallback: <Loader /> },
);
