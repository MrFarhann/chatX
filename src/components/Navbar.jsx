function Navbar(){
    return(
        <div className="navbar">
            <span className="logo">ChatX</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/17897079/pexels-photo-17897079/free-photo-of-fashion-man-people-dark.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
                <span>Farhan</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;