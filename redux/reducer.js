// import

// actions
const Login = 'Login';
const Logout = 'Logout';

// action creators
function logIn(){
    return {
        type:Login
    };
}
function logOut(){
    return {
        type:Logout
    };
}

// reducer
const initialState = {
    isLogin : false
}
function reducer(state=initialState, action){
    switch(action.type){
        case Login:
            return applyLogin(state);
        case Logout:
            return applyLogout(state);
        default:
            return state;
    }
}

// reducer functions
function applyLogin(state){
    return {
        ...state,
        isLogin:true
    }
}
function applyLogout(state){
    return {
        ...state,
        isLogin:false
    }
}

// export action creation
const actionCreators = {
    logIn,
    logOut
}
export {actionCreators};

// export reducer
export default reducer;