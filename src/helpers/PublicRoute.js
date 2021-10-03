import { Route,Redirect } from 'react-router-dom';
import AuthCtx from '../store/auth-ctx';
import { useContext } from 'react';

const PublicRoute = ({component:Component, restricted, ...rest})=> {
    const isLoggedIn = useContext(AuthCtx).isLoggedIn;

    return(
        <Route {...rest} render={props =>(
            isLoggedIn && restricted ? 
                <Redirect to="dashboard" />
            :  <Component {...props} />
        )}/>
    )
}

export default PublicRoute;

