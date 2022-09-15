import React from 'react'
import useCollapse from 'react-collapsed';
import './faq.css'


export default function Faq() {
    function CollapsibleFaq() {
        const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className="collapsible">
        
            <div className="header" {...getToggleProps()}>
                {/* {isExpanded ? <div className='header'><p>How to login to Glitchh?</p></div>
                 : 'How to login to Glitchh?'} */}
                 <div className='header'><p>How to login to Glitchh?</p></div>
                 <div className="icon">
                <i className={'fas fa-chevron-' + (isExpanded ? 'up' : 'down')}></i>
            </div>
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis erat eget ligula maximus rhoncus non tristique lectus. Etiam fermentum urna fermentum orci mattis, quis rutrum lorem condimentum. Duis fringilla accumsan fringilla.  Vestibulum gravida purus id tellus elementum, et consequat magna consequat. 
                </p>
                    
                </div>
            </div>
        </div>
        );
    }
  return (
    <div className='faq'>
        <CollapsibleFaq/>
    </div>
  )
}
