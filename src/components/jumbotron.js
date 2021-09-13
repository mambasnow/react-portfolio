import logo from '../images/Logo.png'

const GameText = {
    color: "white"
}

const Header = () =>{
    return(
        <div className="container mt-3">
            <div style={{backgroundColor: "black"}} className="row">
                <div style={{textAlign: "center"} } className="col-lg d-flex flex-column justify-content-center">
                    <h1 style={GameText}> Hello!</h1>
                    <h3 style={GameText} >I'm Joe a Full-Stack Dev</h3> 
                </div>
                <div className="col-lg">
                <img src={logo} />
                </div>
               <div className="col-lg d-flex flex-column justify-content-center">
               <h1 style={GameText} >About Me</h1>
               <p style={GameText}> Self taught webdeveloper</p>
               <p style={GameText}>Cerified for FullStack</p>
               <p style={GameText}>Passion for UI and all things Front-End</p>
               </div>
            </div>
        </div>
    );
}

export default Header;