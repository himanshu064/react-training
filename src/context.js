import React, {useState, useContext, useEffect} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './Firebase/firebase';

const Context = React.createContext();

const AuthProvider = ({children}) =>{
    const [isUser, setisUser] = useState ({});
    useEffect (() =>{
        onAuthStateChanged (auth, (user) =>{
            if (user) {
                setisUser (user);
            }else {
                setisUser (null);
            }
        });
    },[]);

    return (
        <Context.Provider value={{
            isUser
        }}>
         {children}
        </Context.Provider>
    );
};

export const useGlobalContext =() => {
    return useContext(Context);
};
export {Context, AuthProvider};