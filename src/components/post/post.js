import React from 'react'
import './post.css';
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import postimage from './../images/postimage.png'
import heart from './../images/heart.png'
import commentIcon from './../images/comments.png'
import shareIcon from './../images/share.png'
function Post() {
  return (
    
        <div className='post'>
        <div className="post__header">
        <Avatar
            className='post__avatar'
            alt='EpicEby'
         />
        <div className='usernames'>
            <h3>EpicEby#2345</h3>
            <h6>EpicEby#2345</h6>
        </div>
        
        <div className="MoreHorizIcon">
          <MoreHorizIcon />
        </div>
      </div>
      <img className="post__image" src={postimage} />
      <div className='caption'>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus massa ac felis sagittis bibendum. </h3>
            
        </div>
        <div className='like_comment_share'>
            <button><div className='button_content'><img src={heart}/><span className='button_text'>Like</span></div> </button>
            <button><div className='button_content'><img src={commentIcon}/><span className='button_text'>Comment</span></div> </button>
            <button><div className='button_content'><img src={shareIcon}/><span className='button_text'>Share</span></div> </button>
        </div>
      
    </div>
   
    
  )
}

export default Post
