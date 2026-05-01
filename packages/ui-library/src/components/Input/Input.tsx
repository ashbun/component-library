import React from 'react';
import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Input label */
  label?: string;
  /** Helper text below input */
  helper?: string;
  /** Error message */
  error?: string;
  /** Input size */
  size?: 'sm' | 'md' | 'lg';
  /** Icon component before input */
  iconLeft?: React.ReactNode;
  /** Icon component after input */
  iconRight?: React.ReactNode;
}

/**
 * Input component - Text input field
 *
 * @example
 * ```tsx
 * <Input
 *   type="email"
 *   placeholder="Enter your email"
 *   label="Email"
 *   error={emailError}
 * />
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helper,
      error,
      size = 'md',
      iconLeft,
      iconRight,
      className = '',
      ...props
    },
    ref,
  ) => {
    const inputClass = [
      styles.input,
      styles[`size-${size}`],
      iconLeft && styles.hasIconLeft,
      iconRight && styles.hasIconRight,
      error && styles.error,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={styles.wrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.container}>
          {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
          <input ref={ref} className={inputClass} {...props} />
          {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
        </div>
        {error && <span className={styles.errorText}>{error}</span>}
        {helper && !error && <span className={styles.helperText}>{helper}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input';
