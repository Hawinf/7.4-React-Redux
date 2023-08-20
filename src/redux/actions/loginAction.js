import axios from "axios";
import API from "../../const/endpoint";

export const handleLogin = (payload) => (dispatch) => {
    axios
        .post(API.LOGIN, payload)
        .then((res) => {
            // alert('success login')
            localStorage.setItem('token', res.data.access_token)
            console.log(res)
            dispatch({
                type: 'LOGIN',
                payload : res.statusText,
            })
        })
        .catch((err) => console.log(err))
}