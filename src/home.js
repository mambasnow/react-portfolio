import Navbar from "./components/navbar";
import Header from "./components/jumbotron";
import Projects from "./components/projectDiv";
import Contact from "./components/contact";
const Home =() => {
    return(
        <div>
           <Navbar/> 
           <Header/>
           <Projects/>
           <Contact/>
        </div>
    );

}


export default Home;