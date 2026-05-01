import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card content */
  children: React.ReactNode;
  /** Padding level */
  padding?: 'sm' | 'md' | 'lg';
  /** Border variant */
  border?: boolean;
  /** Hover effect */
  hoverable?: boolean;
}

/**
 * Card component - Container for content
 *
 * @example
 * ```tsx
 * <Card padding="md" border hoverable>
 *   <h2>Card Title</h2>
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      padding = 'md',
      border = false,
      hoverable = false,
      className = '',
      ...props
    },
    ref,
  ) => {
    const cardClass = [
      styles.card,
      styles[`padding-${padding}`],
      border && styles.border,
      hoverable && styles.hoverable,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={cardClass} {...props}>
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';
