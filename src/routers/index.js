import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '../containers/MainPageContainer';
import DetailsMovie from '../containers/DetailsMovieContainer';
import DetailsSeries from '../containers/DetailsSeriesContainer';
import Video from '../components/Video/Video';

const Router = ({ children }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/movie/:id" component={DetailsMovie} />
      <Route exact path="/tv/:id" component={DetailsSeries} />
      <Route path="/watch/tv/:id" component={Video} />
      <Route path="/watch/movie/:id" component={Video} />
    </Switch>
  </BrowserRouter>
);

export default Router;
