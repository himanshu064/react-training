import React from "react";
import Redux_Store from "./Store";
import { Provider } from "react-redux";
import ListData from ".";

const App = () => {
    
    return (
        <>
            <Provider store={Redux_Store}>
                <ListData />
            </Provider>
        </>
    )
}

export default App;