import React from 'react';

import injectStyles from 'react-jss';

const styles = theme => ({
  h1: {
    fontWeight: 'bold',
    width: '100%',
    fontSize: '3em',
    margin: '1em 0',
  },
});

const H1 = ({ children, classes }) => (
  <h1 className={classes.h1}>{children}</h1>
);

export default injectStyles(styles)(H1);
