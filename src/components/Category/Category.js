import React from 'react';
import injectStyles from 'react-jss';
import { compose, withHandlers, withState } from 'recompose';
import { Link } from 'react-router-dom';

import Arrow from '../Icons';
import Card from '../Card';
import { H2 } from '../Title';

const styles = theme => ({
  container: {
    ...theme.column,
    position: 'relative',
  },
  category: {
    position: 'relative',
    margin: '0 2em',
    height: '25em',
    overflow: 'hidden',
  },
  categoryInner: {
    ...theme.row,
    position: 'absolute',
    top: 0,
    transition: 'left 1s ease-in-out',
  },
  card: {
    paddingRight: '1em',
  },
  arrowPrev: {
    position: 'absolute',
    top: '14em',
    left: '-.4em',
    transform: 'rotate(180deg)',
    '&:hover': {
      fill: theme.colors.primary,
    },
  },
  arrowNext: {
    position: 'absolute',
    top: '14em',
    right: '-.4em',
    transform: 'rotate(0deg)',
    '&:hover': {
      fill: theme.colors.primary,
    },
  },
  link: {
    color: theme.colors.text,
    textDecoration: 'none',
  },
});

const Category = ({
  classes,
  data,
  left,
  type,
  title,
  handleRef,
  handlePrev,
  handleNext,
}) => (
  <div className={classes.container}>
    <H2>{title}</H2>
    <Arrow
      className={`${classes.arrowPrev}`}
      width="2em"
      height="2em"
      onClick={handlePrev}
    />
    <div className={classes.category}>
      <div className={classes.categoryInner} ref={handleRef} style={{ left }}>
        {data.map(item => (
          <Link
            className={classes.link}
            to={`/${type}/${item.id}`}
            key={`${type}_${item.id}`}
          >
            <Card className={classes.card} title={item.title} src={item.src} />
          </Link>
        ))}
      </div>
    </div>
    <Arrow
      className={classes.arrowNext}
      width="2em"
      height="2em"
      onClick={handleNext}
    />
  </div>
);

export default compose(
  withState('offset', 'offsetChange', 0),
  withState('maxOffset', 'maxOffsetChange', 0),
  withState('left', 'leftChange', 0),
  withHandlers(() => {
    let carouselInner = null;
    return {
      handleRef: ({ offsetChange }) => node => {
        if (node) {
          offsetChange(node.parentNode.offsetWidth);
          carouselInner = node;
        }
      },
      handlePrev: ({ left, offset, leftChange }) => () => {
        if (left < 0) {
          leftChange(left + offset - 180);
        }
        if (left - offset > 0) {
          leftChange(0);
        }
      },
      handleNext: ({ left, offset, page, leftChange, getData }) => () => {
        if (!carouselInner) {
          return;
        }

        if (left - offset * 2 < -carouselInner.offsetWidth) {
          getData(page + 1);
        }

        leftChange(left - offset + 180);
      },
    };
  }),
  injectStyles(styles)
)(Category);
