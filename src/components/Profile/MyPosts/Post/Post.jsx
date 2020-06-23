import React from 'react';
import style from './Post.module.css';

const Post = () => {
    return (

        <div className={style.item}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg" alt=""/>
            <div>
                Hi! How are you today?                
            </div>
        </div>

    )
}

export default Post;