import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Styled from 'styled-components';
import routes from './route';


const App = () => {
  return (
    <Router>
      <Switch>
        <Wrapper id='App--container'>
          {/* <Nav /> */}
          {/* <Navbar/> */}
          {routes.map((x) => {
            const { id, path, component } = x;
            return <Route key={id} path={path} exact component={component} />;
          })}
          {/* <Footer/> */}
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
