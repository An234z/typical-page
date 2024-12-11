import React, { useState } from 'react';
import './Login.css';

import Card from '../UI/Card';
import Button from '../UI/Button';

const Login = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            console.log('check form is valid')
            setFormIsValid(emailIsValid && passwordIsValid)
            console.log('checked')
        }, 500)
        return () => {
            clearTimeout(timeOut)
        }
    }, [emailIsValid, passwordIsValid])

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const emailValidateHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
    };

    const passwordValidateHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    return (
        <Card className="login">
            <form>
                <div className={`control ${emailIsValid === false ? 'invalid' : ''}`}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={emailValidateHandler}
                    />
                </div>
                <div className={`control ${passwordIsValid === false ? 'invalid' : ''}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={passwordValidateHandler}
                    />
                </div>
                <div className="actions">
                    <Button type="submit"
                    disabled={!formIsValid}
                    >
                        Login
                        </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
