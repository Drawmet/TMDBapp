import React from 'react';
import injectStyles from 'react-jss';

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

export default injectStyles(styles)(Card);
