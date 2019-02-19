import React from 'react';
import injectStyles from 'react-jss';
import PropTypes from 'prop-types';

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

H1.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
};

export default injectStyles(styles)(H1);
