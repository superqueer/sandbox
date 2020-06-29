import React from 'react';
import style from './Post.module.css';


const Post = (props) => {
    return (
        <div className={style.item}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg" alt="" />
            <div>
                <div className={style.post_body}>{props.message}</div>
                <div className={style.likes}>
                    <span className={style.like}>{props.count}</span>
                    <button className={style.btn}><img src="https://img.icons8.com/wired/2x/facebook-like.png" /></button>
                </div>
            </div>
        </div>

    )
}

export default Post;