import React from 'react';
import { string, bool } from 'prop-types';

function InputLabelStateless({
  className,
  textClassName,
  dataFor,
  label,
  inputClassName,
  name,
  placeholder,
  inputId,
  inputType,
  disabled,
  meta: { touched, error }
}) {
  return (
    <div className={`column start ${className}`}>
      <label className={`${textClassName} m-bottom-1`} htmlFor={dataFor}>
        {label}
      </label>
      <input
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
  inputId: string.isRequired,
  label: string.isRequired,
  name: string.isRequired,
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
