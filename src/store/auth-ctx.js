import React, { useState } from "react";

const AuthCtx = React.createContext({
    login: (token)=>{},
    logout: () =>{},
    isLoggedIn:false,
    token:''
});

export const AuthContextProvider = (props) =>{
    const authData = localStorage.getItem('auth');
    let initialToken = null;
    let profileImg = null;
    if(authData){
        initialToken = JSON.parse(authData).googleId;
        profileImg = JSON.parse(authData)['profileObj']['imageUrl'];
    }
    const [token, setToken] = useState(initialToken);
    const [imageUrl, setImgUrl] = useState(profileImg);

    const isLoggedIn = !!token;
    
    const loginHandler = (authData) =>{
        const parsedData = JSON.stringify({...authData});
        localStorage.setItem('auth',parsedData)
        setToken(authData.googleId);
        setImgUrl(authData['profileObj']['imageUrl'])
    }

    const logoutHandler = ()=>{
        localStorage.removeItem('auth')
        setToken(null)
    }

    const contextValue = {
        login:loginHandler,
        logout:logoutHandler,
        isLoggedIn:isLoggedIn,
        token:token,
        imageUrl:imageUrl
    }

    return <AuthCtx.Provider value={contextValue}>{props.children}</AuthCtx.Provider>
}

export default AuthCtx;
