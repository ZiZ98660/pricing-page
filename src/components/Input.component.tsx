import React from "react";
// import React from 'react';
import { Input, InputProps } from '@chakra-ui/react';

interface Props extends InputProps {
  placeholder?: string;
  size?: string;
  color?: string;
  style?: any
}

function CustomInput(props: Props) {
  const { placeholder, size, color, style, ...rest } = props;

  return (
    <Input placeholder={placeholder || 'Enter text...'} size={size || 'md'} color={color || 'blue'} style = {style} {...rest} />
  );
}

export default CustomInput;