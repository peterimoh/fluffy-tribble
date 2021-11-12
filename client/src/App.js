import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Styled from 'styled-components';
import { routes, privateRoutes } from './route';
import PrivateRoute from './screens/dashboard/PrivateRoute';


const App = () => {
  return (
    <Router>
      <Switch>
        <Wrapper id='App--container'>
          {routes.map((x) => {
            const { id, path, component } = x;
            return <Route key={id} path={path} exact component={component} />;
          })}

          {privateRoutes.map((x) => {
            const { id, path, component } = x;
            return <PrivateRoute path={path} exact component={component} key={id}/>;
          })}
        </Wrapper>
      </Switch>
    </Router>
  );
};

const Wrapper = Styled.div`
`;
// max-width: 95%;
// margin: 0 auto;
export default App;
