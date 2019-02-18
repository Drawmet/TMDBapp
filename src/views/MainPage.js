import React from 'react';
import injectStyles from 'react-jss';

import { H1 } from '../components/Title';

import MoviesCategory from '../containers/MoviesCategoryContainer';
import SeriesCategory from '../containers/SeriesCategoryContainer';
import DocumentaryCategory from '../containers/DocumentaryCategoryContainer';
import FamilyCategory from '../containers/FamilyCategoryContainer';

const styles = theme => ({
  app: {
    fontFamily: theme.fonts.main,
    fontSize: theme.fonts.defaultSize,
    padding: '4em 2em',
  },
});

const MainPage = ({ classes, processed }) =>
  processed ? (
    <div />
  ) : (
    <div className={classes.app}>
      <H1>App Title</H1>
      <MoviesCategory />
      <SeriesCategory />
      <FamilyCategory />
      <DocumentaryCategory />
    </div>
  );

export default injectStyles(styles)(MainPage);
