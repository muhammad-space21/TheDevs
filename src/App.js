import React, {lazy, Suspense} from 'react';
import { Switch, Route } from "react-router-dom";

import { Container } from './App.styles';

import ErrorBoundary from './components/ErrorBoundary';
import Spinner from './components/Spinner';
import ScrollTop from './hooks/useScrollToTop';

const Homepage = lazy(() => import('./pages/Homepage'));
const CoursePage = lazy(() => import('./pages/CoursePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

const App = () => {
  return (
    <Container>
      <ScrollTop>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact key='r-1' path='/' component={Homepage} />
              <Route exact key='r-2' path='/course' component={CoursePage} />
              <Route exact key='r-3' path='/about' component={AboutPage} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </ScrollTop>
    </Container>
  );
};

export default App;
