import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

interface Props extends ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: any
  // hoverColor?: string
}

function CustomButton(props: Props) {
  const { children, variant, size, isLoading, disabled, onClick, style, ...rest } = props;

  let color = 'blue';
  let bg = 'blue.500';
  let hoverBg = 'blue.600';

  if (variant === 'secondary') {
    color = 'gray';
    bg = 'white';
    hoverBg = 'gray.100';
  } 

  return (
    <Button
      colorScheme={color}
      bg={bg}
      _hover={{ bg: hoverBg }}
      size={size || 'md'}
      isLoading={isLoading}
      disabled={disabled}
      onClick={onClick}
      style = {style}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default CustomButton;