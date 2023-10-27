import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {login, logout} from '../actions'

export default function Login() {
    const islogged = useSelector(state => state.islogged)
    const dispatch = useDispatch();
    return (
        <div>
            {islogged? <button onClick={() => dispatch(logout())}>Logout</button>: <button onClick={() => dispatch(login())}>Login</button>}
        </div>
    )
}
