import Add from "./../img/add_image.png";
function Register(){
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">ChatX</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Display Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Password"/>
                    <input type="file" id="fileForm" style={{display:"none"}}/>
                    <label htmlFor="fileForm">
                        <img src={Add} alt="add-avatar"/>
                        <span>Add an avatar</span>
                    </label>
                    <button>Sing up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}

export default Register;