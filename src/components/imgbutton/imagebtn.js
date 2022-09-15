import React from 'react';
import"./imgbtn.css";
import f from "./../imgbutton/f.png";

const ImgButton = (props) => {
    
    return (
        <button className="imgbtn" type='submit'>
                <img className='buttonimg' src={props.imgurl} alt="my image"/>
        </button>
    )
}

export default ImgButton;

