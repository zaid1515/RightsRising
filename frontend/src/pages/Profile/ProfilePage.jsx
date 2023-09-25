import axios from "axios"
import { useEffect } from "react";

const ProfilePage = () => {

    const handleReload = async() => {
        const data = {};

        try{
            const response = await axios.get('/api/users/profile');
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleReload();
    }, []);

    return (
        <div>ProfilePage</div>
    )
}

export default ProfilePage