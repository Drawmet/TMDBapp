import React from 'react';
import injectStyles from 'react-jss';
import PropTypes from 'prop-types';

const styles = theme => ({
  btn: {
    background: 'transparent',
    border: '1px solid transparent',
    borderRadius: '.25em',
    cursor: 'pointer',
    outline: 'none',
    margin: '1em',
    padding: '.5em 1em',
    '&:hover': {
      transform: 'translateY(-1px)',
      boxShadow: '0 2px 2px 0 rgba(0,0,0,.24)',
    },
  },
  primary: {
    background: theme.colors.primary,
    color: theme.colors.inverseText,
  },
  secondary: {
    background: theme.colors.secondary,
    color: theme.colors.inverseText,
  },
  success: {
    background: theme.colors.success,
    color: theme.colors.inverseText,
  },
  info: {
    background: theme.colors.info,
    color: theme.colors.inverseText,
  },
  warning: {
    background: theme.colors.warning,
    color: theme.colors.inverseText,
  },
  danger: {
    background: theme.colors.danger,
    color: theme.colors.inverseText,
  },
  outline: {
    primary: {
      color: theme.colors.primary,
      borderColor: theme.colors.primary,
    },
    secondary: {
      color: theme.colors.secondary,
      borderColor: theme.colors.secondary,
    },
    success: {
      color: theme.colors.success,
      borderColor: theme.colors.success,
    },
    info: {
      color: theme.colors.info,
      borderColor: theme.colors.info,
    },
    warning: {
      color: theme.colors.warning,
      borderColor: theme.colors.warning,
    },
    danger: {
      color: theme.colors.danger,
      borderColor: theme.colors.danger,
    },
  },
});

const Button = ({ classes, children, color, outline, onClick }) => (
  <button
    className={
      outline ? `${classes.outline[color]}` : `${classes.btn} ${classes[color]}`
    }
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  color: PropTypes.string,
  outline: PropTypes.bool,
  onClick: PropTypes.func,
};

export default injectStyles(styles)(Button);
