import React from 'react';

import injectStyles from 'react-jss';

const styles = theme => ({
  h2: {
    fontWeight: 'bold',
    width: '100%',
    fontSize: '1.5em',
    margin: '.5em 0',
  },
});

const H2 = ({ children, classes }) => (
  <h2 className={classes.h2}>{children}</h2>
);

export default injectStyles(styles)(H2);
