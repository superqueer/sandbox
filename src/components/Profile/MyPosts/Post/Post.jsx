import React from 'react';
import style from './Post.module.css';
import Like from './Like';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg" alt="" />
            <div>
                <div>{props.message}</div>
                <Like />
            </div>
        </div>

    )
}

export default Post;