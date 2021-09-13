import{link} from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav className="navName navbar navbar-expand-lg navbar-light bg-dark">
  <a style={{color:"white"}} className="navbar-brand " href="#">Joe Nguyen</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a style={{color:"white"}} className="nav-item nav-link active" href=".aboutMe">About Me</a>
      <a style={{color:"white"}} className="nav-item nav-link" href=".Projects">Portfolio</a>
      <a style={{color:"white"}} className="nav-item nav-link" href="#">Contact Me</a>
    </div>
  </div>
</nav>
    )
}


export default Navbar;