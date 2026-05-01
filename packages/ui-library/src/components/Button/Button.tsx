import React from 'react';
import { tokens } from '@cc-ecommerce/design-tokens';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant/style */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Button content */
  children: React.ReactNode;
  /** Loading state */
  loading?: boolean;
  /** Icon to display before text */
  iconLeft?: React.ReactNode;
  /** Icon to display after text */
  iconRight?: React.ReactNode;
  /** Full width button */
  fullWidth?: boolean;
}

/**
 * Button component - Primary interactive element
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      loading = false,
      iconLeft,
      iconRight,
      fullWidth = false,
      disabled = false,
      className = '',
      ...props
    },
    ref,
  ) => {
    const buttonClass = [
      styles.button,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      fullWidth && styles.fullWidth,
      disabled && styles.disabled,
      loading && styles.loading,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={buttonClass}
        disabled={disabled || loading}
        {...props}
      >
        {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
        {children}
        {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
      </button>
    );
  },
);

Button.displayName = 'Button';
