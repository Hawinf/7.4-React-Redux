import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import rootReducer from "../redux/reducers";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../const/endpoint";
import { regisAction } from "../redux/actions/regisAction";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {regisReducer} = useSelector(rootReducer => rootReducer);
    console.log(regisReducer.message)

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleRegister = () => {
        const payload = {
            email: email,
            password: password,
            role: 'Admin',
        }
        // console.log(payload)
        dispatch(regisAction(payload))
    }

    return (
        <div>
            <Navbar />
            <h1>Register</h1>
            <input placeholder="Email" onChange={handleEmail} />
            <input placeholder="Password" onChange={handlePassword} />
            <button onClick={handleRegister}>Register</button>
            {
                regisReducer.message.length ? 
                    <h1>{regisReducer.message}</h1> : <h1></h1>
            }
        </div>
    );
};

export default Register