import React from "react";
import s from './Login.module.css'
import {Formik, Form, Field, ErrorMessage} from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";

const LoginForm = (props) => {
    return (
        <Form className={s.loginForm}>
            <div>
                <label htmlFor={'email'}>Email</label>
                <Field type={'text'} name={'email'}/>
                <ErrorMessage className={s.errorMes} name="email" component="div"/>
            </div>

            <div>
                <label htmlFor={'password'}>Password</label>
                <Field type={'password'} name={'password'}/>
                <ErrorMessage className={s.errorMes} name="password" component="div"/>
            </div>

            <div>
                <Field type={'checkbox'} name={'rememberMe'}/>
                <label htmlFor={'rememberMe'}>Remember me</label>
            </div>
            <button className={s.loginButton} type={'submit'}>Log in</button>
        </Form>
    );
}

const Login = (props) => {
    return (
        <div className={s.loginBlock}>
            <h1>Login</h1>
            <Formik
                initialValues={{email: "", password: "", rememberMe: false}}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    console.log(values)
                    props.logInUser(values.email, values.password, values.rememberMe);
                }}
                validationSchema={loginFormSchema}>
                <LoginForm/>
            </Formik>
        </div>)
};

export default Login;