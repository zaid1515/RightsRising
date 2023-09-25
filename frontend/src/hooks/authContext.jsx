import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState({});

    async function checkAuthenticationStatus() {
        try {
            const response = await axios.get("http://localhost:3000/", {
            withCredentials: true,
            });

            if (response.status === 201) {
                console.log(response.data);
            setIsAuthenticated(response.data);
            }
        } catch (error) {
            // Handle error
            console.error("Error checking authentication status:", error);
        }
    }

    useEffect(() => {
        checkAuthenticationStatus()
    }, []);

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
        if (isAuthenticated.role === 0 || isAuthenticated.role === "0") {
                path = `/api/users/logout`;
        } else {
            path = `/api/ngo/logout`;
        }

        try {
            const res = await axios.post(path, { withCredentials: true });
            console.log('from the authcontext : ',res.data);
            if(res.status === 201){
                setIsAuthenticated(res.data);
                return res;
            }
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
