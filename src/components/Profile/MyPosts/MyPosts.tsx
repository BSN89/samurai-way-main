import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


export type PropsMyPosts = {
   id: number
    message: string
    likesCount: number
}
type PostDataType={
    postData: Array<PropsMyPosts>
}


const MyPosts: React.FC<PropsMyPosts> = (props: PropsMyPosts) => {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 12 },
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabal', likesCount: 11},
        {id: 4, message: 'Da da', likesCount: 11},
    ]
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    // @ts-ignore
    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts