import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import rootReducer from "../redux/reducers";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../const/endpoint";

const Register = () => {
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
        axios
            .post(API.REGISTER, payload)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <Navbar />
            <h1>Register</h1>
            <input placeholder="Email" onChange={handleEmail} />
            <input placeholder="Password" onChange={handlePassword} />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register