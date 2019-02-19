import React from 'react';
import injectStyles from 'react-jss';
import PropTypes from 'prop-types';

const styles = theme => ({
  h3: {
    fontWeight: 'bold',
    width: '100%',
    fontSize: '.75em',
    margin: '.25em 0',
  },
});

const H3 = ({ children, classes }) => (
  <h3 className={classes.h3}>{children}</h3>
);

H3.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
};

export default injectStyles(styles)(H3);
