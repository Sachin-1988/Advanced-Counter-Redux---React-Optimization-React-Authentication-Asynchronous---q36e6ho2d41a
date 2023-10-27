export const increment = () =>{
    return {
        type: 'INCREMENT',
    }
}

export const decrement = () =>{
    return {
        type: 'DECREMENT',
    }
}

export const incrementByamount = (nr) =>{
    return {
        type: 'INCREMENTBYAMOUNT',
        payload: nr,
    }
}

export const login = () =>{
    return {
        type: 'SIGN_IN'
    }
}

export const logout = () =>{
    return {
        type: 'SIGN_OUT'
    }
}
