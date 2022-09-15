import React from 'react'
import './searchitem.css'
import propic from './../images/propic.png'
import { Avatar } from "@material-ui/core";

export default function SearchItem() {
    var text ='follow'

    function changeText(){
        text ='following'
    }
    const username = "EpicEby"
    const NotiMsg = "Lorem ipsm lorem ipsm lorem ipsm Lorem ipsm lorem ipsm "
    const time = "10:00pm"
    const searchResults =[
        {
            imgurl:{propic},
            username:"EpicEby",
            name:'Eby Stephen'

        },
        {
            imgurl:{propic},
            username:"EpicEby",
            name:'Eby Stephen'

        },
        {
            imgurl:{propic},
            username:"EpicEby",
            name:'Eby Stephen'

        },
        {
            imgurl:{propic},
            username:"EpicEby",
            name:'Eby Stephen'

        },
        
    ];
  return searchResults.map((results , index)=>{
    
    return(
        <div className='notificationItem'>
            
        <div className='resultContent'>
            <div className=' header'>
                <img src={propic}/>
                
                
            </div>
            <div>
                <div className='username'> {results.username}</div> 
                <div className='content'>{results.name}</div>

                </div>
                <button key={index} type='submit' className='follow_btn' onClick={changeText}> {text}</button>
           
        
        </div>
        
        
        

    </div>
    )
  }


  )
}
