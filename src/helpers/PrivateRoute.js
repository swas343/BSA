import { Route,Redirect } from 'react-router-dom';
import AuthCtx from '../store/auth-ctx';
import { useContext } from 'react';

const PrivateRoute = ({component:Component,...rest})=> {
    const isLoggedIn = useContext(AuthCtx).isLoggedIn;

    return(
        <Route {...rest} render={props =>(
            isLoggedIn ? <Component {...props} />
            : <Redirect to="signin" />
        )}/>
    )
}

export default PrivateRoute;

