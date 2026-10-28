// Accessible labelled field. Pass `as="select"` and <option> children for a dropdown.
export default function FormField({
  id,
  label,
  error,
  as = 'input',
  children,
  ...controlProps
}) {
  const errorId = `${id}-error`;
  const Control = as;

  return (
    <div className={`field${error ? ' field--invalid' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <Control
        id={id}
        name={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? errorId : undefined}
        {...controlProps}
      >
        {children}
      </Control>
      {error && (
        <p id={errorId} className="field__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
