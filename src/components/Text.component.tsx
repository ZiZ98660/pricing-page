import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

interface Props extends TextProps {
  children: React.ReactNode;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  textAlign?: any;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: any;
}

function CustomText(props: Props) {
  const {
    children,
    fontSize,
    fontWeight,
    color,
    textAlign,
    lineHeight,
    letterSpacing,
    textTransform,
    ...rest
  } = props;

  return (
    <Text
      fontSize={fontSize || 'md'}
      fontWeight={fontWeight || 'normal'}
      color={color || 'gray.800'}
      textAlign={textAlign || 'left'}
      lineHeight={lineHeight || 'normal'}
      letterSpacing={letterSpacing || 'normal'}
      textTransform={textTransform || 'none'}
      {...rest}
    >
      {children}
    </Text>
  );
}

export default CustomText;
