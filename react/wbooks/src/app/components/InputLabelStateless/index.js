import React from 'react';
import { string, bool, object, shape } from 'prop-types';

function InputLabelStateless({
  className,
  textClassName,
  dataFor,
  label,
  inputClassName,
  placeholder,
  inputId,
  inputType,
  disabled,
  input,
  meta: { touched, error }
}) {
  return (
    <div className={`column start ${className}`}>
      <label className={`${textClassName} m-bottom-1`} htmlFor={dataFor}>
        {label}
      </label>
      <input
        {...input}
        className={inputClassName}
        name={name}
        placeholder={placeholder}
        id={inputId}
        type={inputType}
        disabled={disabled}
      />
      {touched && error && <span>{error}</span>}
    </div>
  );
}

InputLabelStateless.propTypes = {
  dataFor: string.isRequired,
  input: object.isRequired, // eslint-disable-line react/forbid-prop-types
  inputId: string.isRequired,
  label: string.isRequired,
  meta: shape({
    touched: bool.isRequired,
    error: string
  }).isRequired,
  className: string,
  disabled: bool,
  inputClassName: string,
  inputType: string,
  placeholder: string,
  textClassName: string
};

InputLabelStateless.defaultProps = {
  className: '',
  inputClassName: '',
  inputType: 'text',
  placeholder: '',
  textClassName: ''
};

export default InputLabelStateless;
