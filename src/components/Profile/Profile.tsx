import React from "react";
import s from "./Profile.module.css"
import MyPosts, {PropsMyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props: PropsMyPosts) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts id={props.id}
                  message={props.message}
                  likesCount={props.likesCount}
            />
        </div>
    )
}

export default Profile