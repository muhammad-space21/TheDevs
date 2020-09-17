import React, {lazy, Suspense} from 'react';
import { Switch, Route } from "react-router-dom";

import { Container } from './App.styles';

import ErrorBoundary from './components/ErrorBoundary';
import Spinner from './components/Spinner';
import ScrollTop from './hooks/useScrollToTop';
import { LanguageProvider } from './containers/Languages';

const Homepage = lazy(() => import('./pages/Homepage'));
const CoursePage = lazy(() => import('./pages/CoursePage'));
const CoursesContainer = lazy(() => import('./containers/CoursesContainer'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
// const SignUpPage = lazy(() => import('./pages/SignUpPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const PricingPlanPage = lazy(() => import('./pages/PricingPlanPage'));
const Auth = lazy(() => import('./containers/Auth'));

const App = () => {
  return (
    <LanguageProvider>

      <Container>
        <ScrollTop>
          <Switch>
            <ErrorBoundary>
              <Suspense fallback={<Spinner />}>
                <Auth>
                  <Route exact key='r-1' path='/' component={Homepage} />
                  <Route exact key='r-2' path='/courses/:id' component={CoursePage} />
                  <Route exact key='r-3' path='/about' component={AboutPage} />
                  {/* <Route exact key='r-4' path='/sign-up' component={SignUpPage} /> */}
                  {/* <Route exact key='r-5' path='/login' component={LoginPage} /> */}
                  <Route exact key='r-6' path='/how-it-works' component={HowItWorks} />
                  <Route exact key='r-7' path='/article/:title' component={ArticlePage} />
                  <Route exact key='r-8' path='/prices/:id' component={PricingPlanPage} />
                </Auth>
              </Suspense>
            </ErrorBoundary>
          </Switch>
        </ScrollTop>
      </Container>
    </LanguageProvider>
  );
};

export default App;
