import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators as loginActions} from '../../redux/reducer';

import Container from './container';

function mapStateToProps(state){
    //console.log(state);
    const {isLogin} = state
    return {
        isLogin
    };
}

function mapDispatchToProps(dispatch){
    return {
        logIn:bindActionCreators(loginActions.logIn, dispatch),
        logOut:bindActionCreators(loginActions.logOut, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);