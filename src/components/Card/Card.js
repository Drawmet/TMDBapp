import React from 'react';
import injectStyles from 'react-jss';
import PropTypes from 'prop-types';

import { H3 } from '../Title';
import Img from '../Img/';

const styles = theme => ({
  container: {
    ...theme.column,
    ...theme.breakpoints.xs,
    textAlign: 'left',
  },
  imgSize: {
    ...theme.breakpoints.xs,
    height: '22em',
  },
  description: {
    fontSize: 12,
  },
});

const Card = ({ classes, className, description, title, src }) => (
  <div className={`${classes.container} ${className || ''}`}>
    <Img src={src} alt={title} size={classes.imgSize} />
    <H3>{title}</H3>
    <div className={classes.description}>{description}</div>
  </div>
);

Card.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
};

export default injectStyles(styles)(Card);
