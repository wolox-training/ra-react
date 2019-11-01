import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  dataFor: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  initialValue: PropTypes.string,
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string,
  textClassName: PropTypes.string
};

InputLabel.defaultProps = {
  className: '',
  initialValue: '',
  inputClassName: '',
  placeholder: '',
  textClassName: ''
};

export default InputLabel;
