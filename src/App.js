import React, {lazy, Suspense} from 'react';
import { Switch, Route } from "react-router-dom";

import ErrorBoundary from './components/ErrorBoundary';
import Spinner from './components/Spinner';
import ScrollTop from './hooks/useScrollToTop';

const Homepage = lazy(() => import('./pages/Homepage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

const App = () => {
  return (
    <ScrollTop>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact key='r-1' path='/' component={Homepage} />
            <Route exact key='r-2' path='/about' component={AboutPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </ScrollTop>
  );
};

export default App;
