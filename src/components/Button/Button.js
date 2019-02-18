import React from 'react';
import injectStyles from 'react-jss';

const styles = theme => ({
  btn: {
    background: 'transparent',
    border: '1px solid transparent',
    borderRadius: '.25em',
    outline: 'none',
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

const Button = ({ classes, children, color, outline }) => (
  <button
    className={
      outline ? `${classes.outline[color]}` : `${classes.btn} ${classes[color]}`
    }
  >
    {children}
  </button>
);

export default injectStyles(styles)(Button);
