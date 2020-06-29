import React from 'react';
import style from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>

            <div className={style.dialogItems}>
                <div className={style.dialog + ' ' + style.active}>
                    Andrew
                </div>
                <div className={style.dialog}>
                    Dima
                </div>
                <div className={style.dialog}>
                    Anton
                </div>
            </div>

            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How is your day&</div>
                <div className={style.message}>Yo</div>

            </div>
        </div>

    )

}
export default Dialogs;