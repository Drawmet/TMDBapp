import React from 'react';
import InjectStyles from 'react-jss';

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

const Img = ({ alt, className, classes, src, onClick, size }) => (
  <div className={classes.container || className} onClick={onClick}>
    <img src={src} alt={alt} className={`${classes.img} ${size}`} />
  </div>
);

export default InjectStyles(styles)(Img);
