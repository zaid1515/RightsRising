import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
    message : `Please login.`
});

export function AuthContextProvider({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState({
        message : `PLease login.`,
        auth : false,
        role : 3,
        client : {}
    });

    async function getState() {
        try {
            const response = await axios.get("http://localhost:3000/", {
                withCredentials: true,
            });

            if (response.status === 201) {
                console.log('from the get role : ',response.data);
                // console.log('before setting in AuthContext : ',isAuthenticated)
            }
        } catch (error) {
            // Handle error
            console.error("Error checking authentication status:", error);
        }
    }

    const login = async(p, formData) => {
        let path;
        if(p === 0){
            path = `http://localhost:3000/api/users/auth`;
        } else if(p === 1){
            path = `http://localhost:3000/api/ngo/auth`;
        }

        try {
            const response = await axios.post(path, formData, {
                withCredentials: true,
            });


            if (response.status === 200) {
                console.log("authenticated successfully from authcontext login.");
                setIsAuthenticated({
                    message : response.data.message,
                    auth : response.data.auth,
                    role : response.data.role,
                    client : response.data.client,
                });
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
        getState
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
