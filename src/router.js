import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage';
import DetailPage from "./routes/DetailPage";

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage}/>
        <Route path="/ai/detail/:id" exact component={DetailPage}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
