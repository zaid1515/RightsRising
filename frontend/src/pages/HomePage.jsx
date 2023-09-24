import axios from "axios"
import Hero from "../components/Hero"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../userContext";


const HomePage = () => {

    return (
        <>
        <Hero />
        </>
    )
}

export default HomePage