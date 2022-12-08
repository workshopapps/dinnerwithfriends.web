import React from "react";
import "./notification.css";
import cx from "classnames";

function Toggleswitch ({rounded = false}){
    const sliderCX = cx('slider', {
        'rounded': rounded
    });
    return(
        
            <label className="switch">
        <input type= "checkbox" />
        <span className={sliderCX}/>

        </label>
        
    );
};

export default Toggleswitch;