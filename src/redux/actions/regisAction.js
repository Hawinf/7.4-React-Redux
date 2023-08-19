import axios from "axios";
import API from "../../const/endpoint";

 export const regisAction = (payload) => (dispatch) => {
    axios
            .post(API.REGISTER, payload)
            .then((res) => {
                // console.log(res)
                dispatch({
                    type: 'REGIS',
                    payload: res.statusText
                })
            })
            .catch((err) => console.log(err))
}

// export default regisAction;