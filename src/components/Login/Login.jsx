import React, {useEffect} from "react";
import s from './Login.module.css'
import {Formik, Form, Field, ErrorMessage} from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import {useNavigate, Navigate} from 'react-router-dom'

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
            <button disabled={props.isSubmitting} type={'submit'} className={s.loginButton}>Log in</button>
            {props.status ? <div className={s.errorMes}>{props.status}</div> : null}
            {props.captcha ? <img className={s.captcha} src={props.captcha} alt=""/> : null}
        </Form>
    );
}

const Login = (props) => {
    let navigate = useNavigate();
    useEffect(() => {
        if (navigate && props.isAuth) {
            navigate(-1)
        }
    })
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
                onSubmit={(values, actions) => {
                    console.log(values)
                    actions.setSubmitting(true);
                    props.logInUser(values.email, values.password, values.rememberMe, actions.setStatus, actions.setSubmitting)
                }}
                validationSchema={loginFormSchema}>
                {
                    ({status, isSubmitting}) => (
                        status === "0" ?
                            // navigate('/profile', {replace: true})
                            <Navigate to={'/profile'}/>
                            :
                            <LoginForm captcha={props.captchaURL} status={status} isSubmitting={isSubmitting}/>
                    )
                }
            </Formik>
        </div>)
};

export default Login;