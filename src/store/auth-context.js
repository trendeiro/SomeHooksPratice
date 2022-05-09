import React, {useEffect,useState} from 'react';


const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () =>{},
    onLogin: () => {}
});

export const AuthContextProvider = (props) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (userLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

    const logoutHandler = () =>{
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn")
    }
    const loginHandler = () =>{
        setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");

    }

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
    }}>{props.children}</AuthContext.Provider>
}

export default AuthContext;