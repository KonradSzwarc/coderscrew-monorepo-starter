import { ChangeEvent, FocusEvent, ForwardedRef, forwardRef, VoidFunctionComponent } from 'react';

import type { StyledCallback } from '@/types';
import { styled } from '@/utils';

type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type InputVariant = 'filled' | 'outline';

interface BaseInputProps {
  size?: InputSize;
  variant?: InputVariant;
  disabled?: boolean;
  invalid?: boolean;
  className?: string;
  placeholder?: string;
  value?: string;
  ref?: ForwardedRef<HTMLInputElement>;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
}

interface StyledInputProps extends BaseInputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface InputProps extends BaseInputProps {
  onChange?: (value: string) => void;
}

const sizesMap = {
  xs: { padding: '0 8px', height: 24, typographyKey: 'xs' },
  sm: { padding: '0 12px', height: 32, typographyKey: 'sm' },
  md: { padding: '0 16px', height: 40, typographyKey: 'md' },
  lg: { padding: '0 16px', height: 48, typographyKey: 'lg' },
  xl: { padding: '0 20px', height: 56, typographyKey: 'xl' },
} as const;

const sizeStyles: StyledCallback<StyledInputProps> = ({ theme, size = 'md' }) => {
  const { typographyKey, ...properties } = sizesMap[size];

  return { ...theme.typography[typographyKey], ...properties };
};

type VariantFunction = StyledCallback<{ invalid: StyledInputProps['invalid'] }>;

const filledVariant: VariantFunction = ({ theme, invalid }) => ({
  backgroundColor: theme.colors.gray[100],
  borderColor: invalid ? theme.colors.error[500] : 'transparent',
  boxShadow: invalid ? `0 0 0 1px ${theme.colors.error[500]}` : 'none',

  '&:hover:enabled': {
    backgroundColor: theme.colors.gray[200],
  },

  '&:focus:enabled': {
    backgroundColor: 'transparent',
    borderColor: theme.colors.primary[500],
    boxShadow: `0 0 0 1px ${theme.colors.primary[500]}`,
  },
});

const outlineVariant: VariantFunction = ({ theme, invalid }) => ({
  backgroundColor: 'inherit',
  borderColor: invalid ? theme.colors.error[500] : theme.colors.gray[300],
  boxShadow: invalid ? `0 0 0 1px ${theme.colors.error[500]}` : 'none',

  '&:hover:enabled:not(:focus)': {
    borderColor: invalid ? theme.colors.error[600] : theme.colors.gray[400],
  },

  '&:focus:enabled': {
    borderColor: theme.colors.primary[500],
    boxShadow: `0 0 0 1px ${theme.colors.primary[500]}`,
  },
});

const variantsMap = { filled: filledVariant, outline: outlineVariant };

const variantStyles: StyledCallback<StyledInputProps> = ({ theme, variant = 'filled', invalid }) =>
  variantsMap[variant]({ theme, invalid });

const baseStyles: StyledCallback<StyledInputProps> = ({ theme }) => ({
  width: '100%',
  minWidth: 0,
  position: 'relative',
  appearance: 'none',
  boxSizing: 'border-box',
  border: '1px solid',
  color: theme.colors.gray[800],
  fontWeight: theme.fontWeights.normal,
  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.225s ease-out',
  outline: 'none',

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

const StyledInput = styled.input<StyledInputProps>(
  baseStyles,
  sizeStyles,
  variantStyles
) as VoidFunctionComponent<StyledInputProps>;

const InnerInput = ({ onChange, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return <StyledInput {...props} onChange={handleChange} ref={ref} />;
};

export const Input = forwardRef(InnerInput);
