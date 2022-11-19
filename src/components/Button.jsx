import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type, onClick, children, className,
}) => (
  <button type={type} onClick={onClick} className={className}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  type: 'button',
  onClick: null,
};

export default Button;
