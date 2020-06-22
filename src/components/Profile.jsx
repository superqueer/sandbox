import React from 'react';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://images.wallpaperscraft.com/image/sea_beach_sand_90803_2560x1080.jpg"></img>
            </div>

            <div className={style.profile_bio}>
                <div className={style.profile_photo}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg" />
                </div>
                <div className={style.profile_name}>John Connor</div>

                ava+description
            </div>
            <div>
                My posts
                <div>
                    New postor
                </div>
                <div className={style.posts}>
                    <div className={style.item}>
                        Post1
                    </div>
                    <div className={style.item}>
                        Podt2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;