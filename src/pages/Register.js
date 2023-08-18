import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import rootReducer from "../redux/reducers";

const Register = () => {
    const {regisReducer} = useSelector(rootReducer => rootReducer);
    console.log(regisReducer.message)

    return (
        <div>
            <Navbar />
            <h1>Register</h1>
        </div>
    );
};

export default Register