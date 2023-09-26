import axios from "axios"
import { useEffect } from "react";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Profile.css";
import Navbar2 from "../../components/Navbar/Navbar2";
import Progress from "../../components/Progresscont/Progress";
import Stats from "../../components/Stats/Stats";

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
        <div className="profileConatiner">
          <div className="profileWrapper">
            <Sidebar />
            <div className="main">
              <Navbar2 />
              <h2>My Progress</h2>
              <Progress />
              <div className="statscontainer">
                <h2>Statistics</h2>
                <Stats />
              </div>
            </div>
          </div>
        </div>
      );
}

export default ProfilePage