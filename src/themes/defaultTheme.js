const defaultTheme = {
  colors: {
    bg: '#fff',
    header: '#a0a0a0',
    danger: '#db5151',
    info: '#33b5e5',
    primary: '#5173be',
    success: '#007E33',
    secondary: '#aa66cc',
    warning: '#ffbb33',
    inverseText: '#fff',
    text: '#000',
  },
  fonts: {
    main: ['Roboto', 'sans-serif'],
    defaultSize: 16,
  },
  breakpoints: {
    xs: {
      flex: 1,
      minWidth: 244,
      maxWidth: 244,
    },
    sm: {
      flex: 2,
      minWidth: 244,
      maxWidth: 328,
    },
    md: {
      flex: 3,
      minWidth: 244,
      maxWidth: 620,
    },
    lg: {
      minWidth: 244,
      maxWidth: 980,
      flex: 4,
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default defaultTheme;
