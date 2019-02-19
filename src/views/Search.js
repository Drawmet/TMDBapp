import React from 'react';
import injectStyles from 'react-jss';

import { H1 } from '../components/Title';
import Input from '../components/Input';
import SearchCategory from '../containers/SearchCategoryContainer';

const styles = {
  container: {
    margin: '2em',
  },
};

const Search = ({ classes, value, onChange }) => (
  <div className={classes.container}>
    <H1>Search</H1>
    <div>
      <Input
        type="text"
        placeholder={'Search'}
        onChange={onChange}
        value={value}
      />
      {value && <SearchCategory />}
    </div>
  </div>
);

export default injectStyles(styles)(Search);
