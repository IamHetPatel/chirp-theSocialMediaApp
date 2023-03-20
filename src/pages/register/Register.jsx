import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Chirp</h3>
                <span className="loginDesc">
                    The best & simple place to connect your friends, Chirp!
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" className="loginInput" placeholder="Username"/>
                    <input type="text" className="loginInput" placeholder="Email"/>
                    <input type="password" className="loginInput" placeholder="Password"/>
                    <input type="password" className="loginInput" placeholder="Password Again"/>
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Already a user? Login!</button>
                </div>
            </div>
        </div>
    </div>
  )
}
