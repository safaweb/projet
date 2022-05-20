import { LOGIN, LOGIN_FAIL, LOGIN_SECCESS, REGISTER, REGISTER_FAIL, REGISTER_SECCESS, GET_CLIENT, GET_ORGANISATEUR, GET_CLIENT_SECCESS, GET_ORGANISATEUR_SECCESS, GET_CLIENT_FAIL, GET_ORGANISATEUR_FAIL, REGISTER_ORGANISATEUR, REGISTER_ORGANISATEUR_SECCESS, REGISTER_ORGANISATEUR_FAIL, REGISTER_ADMIN, REGISTER_ADMIN_SECCESS, REGISTER_ADMIN_FAIL, GET_ADMIN, GET_ADMIN_SECCESS, GET_ADMIN_FAIL, GET_USER_INFO, GET_USER_INFO_SECCESS, GET_USER_INFO_FAIL } from "../ActionTypes/ActionTypes"
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

//Action register
export const register = (NewUser) => async (dispatch) => {
    dispatch({
        type: REGISTER
    });
    try {
        let res = await axios.post("user/register", NewUser);
        localStorage.setItem('token', res.data.token)
        dispatch({
            type: REGISTER_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data
        })
    }
}

// Action login
export const login = (User) => async (dispatch) => {
    dispatch({
        type: LOGIN
    });
    try {
        let res = await axios.post("user/login", User);
        localStorage.setItem('token', res.data.token)
        // localStorage.setItem('user', res.data.User)

        dispatch({
            type: LOGIN_SECCESS,
            payload: res.data
        });
        // let navigate = useNavigate()
        // console.log(res.data.User.UserRole)
        // if (res.data.User.UserRole === "Admin") {
        //     navigate('/Admin');
        // }

    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data
        })
    }
}

// Action getClient
export const getclient = (token) => async (dispatch) => {
    dispatch({
        type: GET_CLIENT
    });
    try {
        let res = await axios.get('/user/getclient', {
            headers: {
                'authorization': token
            }
        })
        dispatch({
            type: GET_CLIENT_SECCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_CLIENT_FAIL,
            payload: error.response.data
        })
    }
}

// Action getorganisateur
export const getorganisateur = (token) => async (dispatch) => {
    dispatch({
        type: GET_ORGANISATEUR
    });
    try {
        let res = await axios.get('/user/getorganisateur', {
            headers: {
                'authorization': token
            }
        })
        dispatch({
            type: GET_ORGANISATEUR_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_ORGANISATEUR_FAIL,
            payload: error.response.data
        })
    }
}

export const getAdmin = (token) => async (dispatch) => {
    dispatch({
        type: GET_ADMIN
    });
    try {
        let res = await axios.get('/user/getadmin'
            , {
                headers: {
                    'authorization': token
                }
            })
        dispatch({
            type: GET_ADMIN_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_ADMIN_FAIL,
            payload: error.response.data
        })
    }
}

export const registerorganisateur = (user) => async (dispatch) => {
    dispatch({
        type: REGISTER_ORGANISATEUR
    });
    try {
        let res = await axios.post('/user/registerOrganisateur', user);
        localStorage.setItem('token', res.data.token)

        dispatch({
            type: REGISTER_ORGANISATEUR_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: REGISTER_ORGANISATEUR_FAIL,
            payload: error.response.data
        })
    }
}

export const registeradmin = (user) => async (dispatch) => {
    dispatch({
        type: REGISTER_ADMIN
    });
    try {
        let res = await axios.post('!:user/registerAdmin', user);
        dispatch({
            type: REGISTER_ADMIN_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: REGISTER_ADMIN_FAIL,
            payload: error.response.data
        })
    }
}


//get userinfo
export const getuserinfo = (token) => async (dispatch) => {
    dispatch({
        type: GET_USER_INFO
    });
    try {
        let res = await axios.get('/user/getuserinfo',
            {
                headers: {
                    'authorization': token
                }
            });
        dispatch({
            type: GET_USER_INFO_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_USER_INFO_FAIL,
            payload: error.response.data
        })
    }
}