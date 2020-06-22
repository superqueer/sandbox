import React from 'react';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.grid_container}>
            <div className={style.img}>
                <img src="https://images.wallpaperscraft.com/image/sea_beach_sand_90803_2560x1080.jpg"></img>
            </div>

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
                        <div>
                            Education:<span></span>
                        </div>
                        <div>
                            WEB-site:<span></span>
                        </div>
                    </div>
                </div>
                
                <div className={style.post_area}>
                    <h2>My posts</h2>
                <div>
                        New post
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


        </div>
    )
}

export default Profile;