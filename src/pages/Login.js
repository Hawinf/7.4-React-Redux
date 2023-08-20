import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import rootReducer from "../redux/reducers";
import { handleLogin } from "../redux/actions/loginAction";
import loginReducer from "../redux/reducers/loginReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {loginReducer} = useSelector(rootReducer => rootReducer);
    console.log(loginReducer);

    const inputEmail = (e) => {
        setEmail(e.target.value)
    };
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    const onLogin = () => {
        const payload = {
            email: email,
            password: password,
        }
        // console.log(payload)
        dispatch(handleLogin(payload))
    }

    return (
        <div>
            <Navbar />
            <h1>Login</h1>
            <input onChange={inputEmail} placeholder="email" />
            <input onChange={inputPassword} placeholder="password" />
            <button onClick={onLogin}>Login</button>
            {
                loginReducer.message.length ?
                <h1>Success Login</h1> : <h1>Welcome to login page</h1>
            }
        </div>
    );
};

export default Login;