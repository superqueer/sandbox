import React from 'react';
import style from './Like.module.css';

const Like = (props) => {


    return (
        <div className={style.likes}>
            <span className={style.like}>22</span>
            <button className={style.btn}><img src="https://img.icons8.com/wired/2x/facebook-like.png" /></button>
        </div>

    )
}

export default Like;