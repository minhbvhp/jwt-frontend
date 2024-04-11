import React, { useState, useEffect } from "react";
import { getUserAccount } from '../services/userService'

const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
    const userDefault = {
        isLoading: true,
        isAuthenticated: false,
        token: "",
        account: {},
    }

    useEffect(() => {
        if (window.location.pathname !== '/' || window.location.pathname !== '/login') {
            fetchUser();
        }
    }, [])

    const [user, setUser] = useState(userDefault);

    const loginContext = (userData) => {
        setUser({ ...userData, isLoading: false });
    };

    const logout = () => {
        setUser((user) => ({
            name: '',
            auth: false,
        }))
    }

    const fetchUser = async () => {
        let response = await getUserAccount();

        if (response && response.EC === 0) {
            let groupWithRoles = response.DT.groupWithRoles;
            let email = response.DT.email;
            let username = response.DT.username;
            let token = response.DT.access_token;

            let data = {
                isAuthenticated: true,
                token,
                account: {
                    groupWithRoles,
                    email,
                    username,
                },
                isLoading: false
            }

            setTimeout(() => {
                setUser(data);
            }, 3000)
        } else {
            setUser({ ...userDefault, isLoading: false })
        }
    }

    return (
        <UserContext.Provider value={{ user, loginContext, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };