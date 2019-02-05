import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators as loginActions} from '../../redux/reducer';

import Container from './container';

function mapStateToProps(state){
    //console.log(state);
    const {isLogin, loginId} = state
    return {
        isLogin,
        loginId
    };
}

function mapDispatchToProps(dispatch){
    return {
        logIn:bindActionCreators(loginActions.logIn, dispatch),
        logOut:bindActionCreators(loginActions.logOut, dispatch),
        setId:bindActionCreators(loginActions.setId, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);