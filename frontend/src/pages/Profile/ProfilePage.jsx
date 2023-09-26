import { useContext } from "react"
import { AuthContext } from "../../hooks/authContext"


const ProfilePage = () => {

    const {isAuthenticated} = useContext(AuthContext);

    const {username, role, age} = isAuthenticated.user;

    return (
        <div>
            <h2>username : {username}</h2>
            <h2>role : {role} </h2>
            <h2> age : {age} </h2>
        </div>
    );
}

export default ProfilePage