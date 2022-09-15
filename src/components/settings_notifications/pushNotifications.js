import React from 'react'
import './pushNotifications.css'
import useCollapse from 'react-collapsed';
import { Checkbox } from '@material-ui/core';

export default function PushNotifi() {
    function CollapsiblePostByteComments() {
        // const onChangeAttribute = (value) => {
        //     console.log(value);
        //     setCheckBoxChecked(value);
        //   };
        const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Posts, Bytes and Comments' : 'Posts, Bytes and Comments'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <div className='like_comments'>
                        <div className='likes'>
                            Likes
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            off
                            </div>
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            From people I follow
                            </div>
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            From Everyone
                            </div>
                            <h3>  </h3>
                            First posts and stories
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            off
                            </div>
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            From people I follow
                            </div>
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            From Everyone
                            </div>

                            
                        </div>
                        <div className='likes_comments_on_photos'>
                        Likes and comments on photos of you
                        <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            off
                            </div>
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            From people I follow
                            </div>
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            From Everyone
                            </div>
                            <h3>  </h3>
                            Comments
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            From people I follow
                            </div>
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            From Everyone
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    function CollapsibleFollowingFollowers() {
        const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Following and followers' : 'Following and followers'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <div className='like_comments'>
                        <div className='likes'>
                            Follower Requests    
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            Off
                            </div>
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            On
                            </div>
                            Accepted Follow Requests   
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            Off
                            </div>
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            On
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        );
    }
    function CollapsibleMessages() {
        const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Messages' : 'Messages'}
            </div>
            <div {...getCollapseProps()}>
            <div className="content">
                    <div className='like_comments'>
                        <div className='likes'>
                            Message Requests  
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            Off
                            </div>
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            On
                            </div>
                            Messages
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            Off
                            </div>
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            On
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        );
    }
    function CollapsibleFromGlitchh() {
        const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'From Glitchh' : 'From Glitchh'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <div className='like_comments'>
                        <div className='likes'>
                            Reminders
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            off
                            </div>
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            On
                            </div>
                            <h3>  </h3>
                            Support Requests
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            off
                            </div>
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            On
                            </div>
                            

                            
                        </div>
                        <div className='likes_comments_on_photos'>
                        Unrecognised Logins 
                        <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            off
                            </div>
                            <div className='checkbox_content'>
                            <input className='checkbox-round ' type="checkbox" />
                            On
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    
  return (
    <div className='push_notification'>
        <div className='scrollable'>
        Push Notifications
      <h4></h4>
      <div className='Pause_all_push_notification'>
      Pause all push notification
      <label class="switch">
         <input type="checkbox"/>
        <span class="slider round"></span>
    </label>

        </div>
      
      </div>
      
      
      <CollapsiblePostByteComments/>
      
      <CollapsibleFollowingFollowers/>
      
      <CollapsibleMessages/>
      
      <CollapsibleFromGlitchh/>
      

    </div>
  )
}
