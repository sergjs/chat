import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../components/formcontrols/formcontrols';
import { login } from '../redux/auth-reducer';
import { maxLengthCreator, requiredField } from '../utils/validation';
import style from './Login.module.css';

let maxLength11 = maxLengthCreator(110);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} 
                validate = {[requiredField ]}
                name={'email'} placeholder={'email'} />
            </div>
            <div>
                <Field component={Input} validate = {[requiredField ]}
                name={'password'} placeholder={'password'} type={'password'}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe '} type={'checkbox'} /> remember me
            </div>
            {props.error && <div className={style.error}>
                {props.error}
            </div>}
            <button>Login</button>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={'/Profile'} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div> 
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);