import { Router } from '@/router';
import { GlobalStyles } from '@/styles';
import { history } from '@/utils';
import { HistoryRouter } from './history-router';

export const App = () => {
  return (
    <HistoryRouter history={history}>
      <GlobalStyles />
      <Router />
    </HistoryRouter>
  );
};
