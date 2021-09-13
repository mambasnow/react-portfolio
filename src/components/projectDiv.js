import ProjectCards from "./cards";


const Projects =()=>{
    return(
        <div className="container Projects">
            <div className="row">            
            <h1 style={{textAlign:"center"}} className="projects">Projects</h1>
            <ProjectCards name="BuckitList"
             details="BucketList is random movie generator"/>
            <ProjectCards name="OutBreak"
                details="Social Deduction Game made with WebSockets"/>
            <ProjectCards details=" React Social App that helps users locate Food Trucks" name ="Hungry Nomad"/>
            </div>
            <div className="row">
            <ProjectCards details="Note tacking application with saves locally" name ="Note Tracker"/>
            <ProjectCards details="Fitness Tracker Application w/ Mongoose" name ="Fitness Log"/>
            <ProjectCards details="Website to check weather in any City" name ="Weather API"/>
            </div>
        </div>
    )
}


export default Projects;