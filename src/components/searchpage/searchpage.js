import "./searchpage.css"

import SearchItem from "./searchitem";
const SearchPage = () => {
    return ( <div className="container">
        <div className="card background notiCard">
            
            <h2 className='notiSub'>results</h2>
            <div className="itemNoti">
                <div>
                <SearchItem />                
                </div>
                <div>
                <SearchItem />

                </div>
            </div>
            
            
        </div>
    </div> );
}
 
export default SearchPage;