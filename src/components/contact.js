import ContactForm from "./contactForm";
const Contact =()=>{
    return(
        <div className="container mb-5" style={
            {textAlign: "center", backgroundColor: "#f53ddf", borderRadius: "10px"}
        }>
            <h1 >Contact Me</h1>
            <ContactForm/>
        </div>
    )
}


export default Contact;