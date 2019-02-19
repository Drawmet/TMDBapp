import React from 'react';
import InjectStyles from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
  container: {
    width: '100%',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    objectFit: 'cover',
  },
};

const Img = ({ alt, className, classes, src, size, onClick }) => (
  <div className={className || classes.container} onClick={onClick}>
    <img src={src} alt={alt} className={`${classes.img} ${size}`} />
  </div>
);

Img.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
  src: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

export default InjectStyles(styles)(Img);
