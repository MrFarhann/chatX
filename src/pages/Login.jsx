import Add from "../img/add_image.png";

function Login(){
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">ChatX</span>
                <span className="title">Login</span>
                <form action="">
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Password"/>
                    <button>Sing in</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login;