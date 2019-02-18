import React from 'react';
import injectStyles from 'react-jss';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import Img from '../components/Img';
import { H1 } from '../components/Title';

const styles = theme => ({
  container: {
    ...theme.row,
    justifyContent: 'center',
  },
  details: {
    ...theme.breakpoints.sm,
  },
  img: {
    ...theme.breakpoints.sm,
    overflow: 'hidden',
    padding: '2em',
  },
  button: {
    textAlign: 'center',
  },
});

const Details = ({ classes, data, match: { url }, processed }) =>
  processed ? (
    <div />
  ) : (
    <div className={classes.container}>
      <div className={classes.details}>
        <H1>{data.title}</H1>
        <div>{data.description}</div>
        <div className={classes.button}>
          <Link to={`/watch${url}`}>
            <Button color="primary">Watch Movie</Button>
          </Link>
        </div>
      </div>
      <Img className={classes.img} src={data.src} />
    </div>
  );

export default injectStyles(styles)(Details);
