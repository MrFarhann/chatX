function Search(){
    return(
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a user"/>
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/17897079/pexels-photo-17897079/free-photo-of-fashion-man-people-dark.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
}

export default Search;