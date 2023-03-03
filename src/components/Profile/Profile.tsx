import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://images.unsplash.com/photo-1672243775823-5417ee452c4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExNHw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"/>
        </div>
        <div>
            Ava + description
        </div>
        <MyPosts hey="Yo"/>
    </div>
}

export default Profile