import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Reusable Industrial Button Component
 * Supports React Router Link (`to`), external hyperlinks (`href`), or standard `<button>`
 * 
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'outline' | 'nav-cta' | 'icon'} [props.variant='primary']
 * @param {'sm' | 'md' | 'lg'} [props.size='md']
 * @param {string} [props.to]
 * @param {string} [props.href]
 * @param {Function} [props.onClick]
 * @param {React.ReactNode} [props.icon]
 * @param {boolean} [props.iconPosition='right']
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
  ...rest
}) {
  const baseClasses = `industrial-btn btn-${variant} btn-${size} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon btn-icon-left">{icon}</span>}
      <span className="btn-text">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon btn-icon-right">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}

