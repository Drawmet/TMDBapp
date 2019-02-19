import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '../containers/MainPageContainer';
import DetailsMovie from '../containers/DetailsMovieContainer';
import DetailsSeries from '../containers/DetailsSeriesContainer';
import Video from '../components/Video';
import Header from '../components/Header';
import Search from '../containers/SearchContainer';

const Router = ({ children }) => (
  <BrowserRouter>
    <Header>
      <Switch>
        <Route exact path="/tmdb-app/" component={MainPage} />
        <Route path="/search" component={Search} />
        <Route exact path="/movie/:id" component={DetailsMovie} />
        <Route exact path="/tv/:id" component={DetailsSeries} />
        <Route path="/watch/tv/:id" component={Video} />
        <Route path="/watch/movie/:id" component={Video} />
      </Switch>
    </Header>
  </BrowserRouter>
);

export default Router;
