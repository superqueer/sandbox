import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div className={style.post_area}>
            <h1>My posts</h1>
            <textarea cols="110" rows="5" placeholder="your news...">
            </textarea>
            <button>Send</button>
            <Post message="Hi? how are you?" count="23"/>
            <Post message="It's my first post" count="17"/>
        </div>
    )
}

export default MyPosts;