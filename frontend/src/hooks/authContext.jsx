import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState({
        message : `Authenticate to access this feature.`,
        auth : false,
        role : 3
    });

    const login = async(formData) => {
        try {
            const response = await axios.post("http://localhost:3000/api/users/auth", formData, {
                withCredentials: true,
            });


            if (response.status === 200) {
                console.log("authenticated successfully");
                setIsAuthenticated(response.data);
                return response;
            }

        } catch (error) {

            if (!error.response) {
                console.log(error);
            } else {
                console.log("here1");
                console.log(error.response.data);
            // if the user submits a email that already has an account then add a pop-up component down below.
            // @vighnesh and @abuzaid.
            }
        }
    }

    const logout = async() => {
        let path;
        if (role === 0 || role === "0") {
                path = `/api/users/logout`;
        } else {
            path = `/api/ngo/logout`;
        }

        try {
            const res = await axios.post(path, { withCredentials: true });
            console.log(res.data);
            setIsAuthenticated({
                message : `Authenticate to access this feature.`,
                auth : false,
                role : 3
            });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }


    const authContextValue = {
        isAuthenticated,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
