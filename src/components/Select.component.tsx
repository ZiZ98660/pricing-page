import React from 'react';
import { Select, SelectProps, Text } from '@chakra-ui/react';

interface Option {
  label: string;
  value: string;
}

interface Props extends SelectProps {
  options: Option[];
  label?: string;
  helperText?: string;
  error?: string;
}

function CustomSelect(props: Props) {
  const { options, label, helperText, error, ...rest } = props;

  return (
    <div
    style={{
      position: 'relative',
      // zIndex: '2'
    }}
    >

      {label && (
        <Text fontSize="sm" fontWeight="bold" mb={1}>
          {label}
        </Text>
      )}
      <Select
        height = '64px'
        width=' 289px'
        textAlign = 'left'
        borderRadius = '12px'
        fontSize= '20px'
        padding = '10px'
        border = '1px solid rgba(25, 126, 239, 0.4)'
        background = 'white'
        variant="outline"
        // size="md"
        borderColor={error ? 'red.500' : 'blue.400'}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {error && (
        <Text fontSize="sm" color="red.500" mt={1}>
          {error}
        </Text>
      )}
      {helperText && (
        <Text fontSize="sm" color="gray.500" mt={1}>
          {helperText}
        </Text>
      )}
    </div>
  );
}

export default CustomSelect;

