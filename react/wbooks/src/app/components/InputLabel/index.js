import React, { Component } from 'react';
import { string, bool, func } from 'prop-types';

class InputLabel extends Component {
  state = { inputValue: this.props.initialValue };

  handleUpdateInputValue = evt => {
    this.setState({
      inputValue: evt.target.value
    });

    if (this.props.handleChange) {
      this.props.handleChange(evt.target.value);
    }
  };

  render() {
    const {
      className,
      textClassName,
      dataFor,
      label,
      inputClassName,
      name,
      placeholder,
      inputId,
      inputType,
      disabled
    } = this.props;
    const { inputValue } = this.state;

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
          onChange={this.handleUpdateInputValue}
          disabled={disabled}
          value={inputValue}
        />
      </div>
    );
  }
}

InputLabel.propTypes = {
  dataFor: string.isRequired,
  inputId: string.isRequired,
  label: string.isRequired,
  name: string.isRequired,
  className: string,
  disabled: bool,
  handleChange: func,
  initialValue: string,
  inputClassName: string,
  inputType: string,
  placeholder: string,
  textClassName: string
};

InputLabel.defaultProps = {
  className: '',
  initialValue: '',
  inputClassName: '',
  inputType: 'text',
  placeholder: '',
  textClassName: ''
};

export default InputLabel;
