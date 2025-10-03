import { createContext , useState } from "react";

export const ContextApi = createContext();  

export const ContextProvider = ({ children }) => {
    const getToken = localStorage.getItem("JWT_TOKEN")
        ? JSON.parse(localStorage.getItem("JWT_TOKEN"))
        : null;

    const [token, setToken] = useState(getToken);

    const sendData = {
        token,
        setToken,
    };

    return (
        <ContextApi.Provider value={sendData}>
            {children}
        </ContextApi.Provider>
    );
};
