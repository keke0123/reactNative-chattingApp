// import

// actions
const Login = 'Login';
const Logout = 'Logout';
const SetId = 'SetId';

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
function setId(text){
    return{
        type:SetId,
        text:text
    };
}

// reducer
const initialState = {
    isLogin : false,
    loginId : '',
}
function reducer(state=initialState, action){
    switch(action.type){
        case Login:
            return applyLogin(state);
        case Logout:
            return applyLogout(state);
        case SetId:
            return settingId(state, action.text);
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
function settingId(state,text){
    return{
        ...state,
        loginId:text
    }
}

// export action creation
const actionCreators = {
    logIn,
    logOut,
    setId
}
export {actionCreators};

// export reducer
export default reducer;