import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div className={style.profile}>
                <div className={style.profile_photo}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg" />
                </div>

                <div className={style.profile_info}>
                    <h1 className={style.profile_name}>
                        John Connor
                    </h1>
                    <div>
                        <div className={style.item}>
                            Date of birth:<span></span>
                        </div>
                        <div className={style.item}>
                            City:<span></span>
                        </div>
                        <div className={style.item}>
                            Education:<span></span>
                        </div>
                        <div className={style.item}>
                            WEB-site:<span></span>
                        </div>
                    </div>
                </div>

                <MyPosts />



            </div>


        </div>
    )
}

export default Profile;