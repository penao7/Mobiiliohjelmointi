import React from 'react';
import Text from './Text';
import theme from '../theme';

const Heading = ({ children, style, ...props }) => {

  const headingStyle = [
    style,
    theme.headerMargin
  ];

  return (
    <Text style={headingStyle} fontSize='heading' color='heading' fontWeight='bold' {...props}>{children}</Text>
  );
};

export default Heading;