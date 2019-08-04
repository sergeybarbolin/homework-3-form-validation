import React, { Component } from 'react';

class Field extends Component {
    state = {
        inputValue: ''
    }

    newValue = e => {
        this.setState({inputValue: e.target.value})
        this.props.chandgeInputValue()
    }

    render() {
        const {name, type, labelText, msg} = this.props

        return (
            <p className="field">
                <label className="field__label" htmlFor={name}>
                    <span className="field-label">{labelText}</span>
                </label>
                <input 
                    className={`field__input field-input t-input-${name}`} 
                    type={type} 
                    name={name} 
                    value={this.props.value}
                    onChange={this.newValue}
                />
                <span className={`field__error field-error t-error-${name}`}>{msg}</span>
            </p>
        )
    }
}

export default Field;