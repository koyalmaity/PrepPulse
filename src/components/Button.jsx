import { Link } from 'react-router-dom';

// One button for the whole app.
//  - `to`   -> renders a router <Link>
//  - `href` -> renders a plain <a> (used for same-page scrolling)
//  - neither -> renders a <button>
export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  type = 'button',
  fullWidth = false,
  className = '',
  ...rest
}) {
  const classes = `btn btn--${variant}${fullWidth ? ' btn--full' : ''} ${className}`.trim();

  if (to) return <Link to={to} className={classes} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={classes} {...rest}>{children}</a>;
  return <button type={type} className={classes} {...rest}>{children}</button>;
}
