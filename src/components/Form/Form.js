import React, { Component } from 'react'
import Field from './../Field';
import './Form.css';
import bondApprove from './assets/bond_approve.jpg';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstnameStatus: 'await',
            lastnameStatus: 'await',
            passwordStatus: 'await'
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        const trueValue = {
            firstname: 'james',
            lastname: 'bond',
            password: '007'
        }

        this.setState({
            firstnameStatus: this.checkInput(e.target.firstname.value, trueValue.firstname),
            lastnameStatus: this.checkInput(e.target.lastname.value, trueValue.lastname),
            passwordStatus: this.checkInput(e.target.password.value, trueValue.password),
        })
    }

    checkInput = (targetValue, trueValue) => (
        targetValue === '' 
            ? 'empty' 
            : targetValue.toLowerCase() === trueValue.toLowerCase()
                ? 'sucssess'
                : 'err'
    )

    chandgeInputValue = () => {
        this.setState({
            firstnameStatus: 'await',
            lastnameStatus: 'await',
            passwordStatus: 'await'
        })
    }

    render() {
        const messages = {
            firstname: {
                err: 'Имя указано не верно',
                empty: 'Нужно указать имя'
            },
            lastname: {
                err: 'Фамилия указана не верно',
                empty: 'Нужно указать фамилию'
            },
            password: {
                err: 'Пароль указан не верно',
                empty: 'Нужно указать пароль'
            },
        }
        const {firstnameStatus, lastnameStatus, passwordStatus} = this.state
        const renderForm = (
            <form className="form" onSubmit={this.handleSubmit}>
                <h1>Введите свои данные, агент</h1>
                <Field 
                    type="text" 
                    name="firstname" 
                    labelText="Имя" 
                    msg={messages.firstname[firstnameStatus] || '' }
                    chandgeInputValue={this.chandgeInputValue} 
                />
                <Field 
                    type="text" 
                    name="lastname" 
                    labelText="Фамилия"  
                    msg={messages.lastname[lastnameStatus] || '' }
                    chandgeInputValue={this.chandgeInputValue}
                />
                <Field 
                    type="password" 
                    name="password" 
                    labelText="Пароль"
                    msg={messages.password[passwordStatus] || ''}
                    chandgeInputValue={this.chandgeInputValue} 
                />

                <div className="form__buttons">
                    <input type="submit" className="button t-submit" value="Проверить"/>
                </div>
            </form>
        )
        return (firstnameStatus === 'sucssess' && 
                lastnameStatus === 'sucssess' && 
                passwordStatus === 'sucssess') 
                    ? <img src={bondApprove} alt="bond approve" className="t-bond-image" />
                    : renderForm;
    }
}

export default Form;