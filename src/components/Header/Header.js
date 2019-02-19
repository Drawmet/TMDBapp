import React from 'react';
import { compose } from 'recompose';
import { Link, withRouter } from 'react-router-dom';
import injectStyles from 'react-jss';

const styles = theme => ({
  header: {
    ...theme.row,
    justifyContent: 'space-between',
    width: '',
    background: theme.colors.header,
    padding: '1em',
  },
  link: {
    color: theme.colors.text,
    textDecoration: 'none',
  },
  active: {
    fontWeight: 500,
  },
});

const Header = ({ classes, children, match: { url } }) => (
  <div>
    <header className={classes.header}>
      <Link
        className={`${classes.link} ${url === '/' && classes.active}`}
        to="/"
      >
        Home
      </Link>
      <Link
        className={`${classes.link} ${url === '/search' && classes.active}`}
        to="/search"
      >
        Search
      </Link>
    </header>
    {children}
  </div>
);

export default compose(
  injectStyles(styles),
  withRouter
)(Header);
