import React, {useContext} from 'react';

const Context = React.createContext();

const Provider = ({children}) =>{
    return (
        <Context.Provider value={{

        }}>
         {children}
        </Context.Provider>
    );
};

export const useGlobalContext =() => {
    return useContext(Context);
};
export {Context, Provider};