const ProjectCards =(props)=>{
  const cardStyle = {
    background: "#34e8eb",
  }

    return(
        <div style={cardStyle}
        className="card col-lg m-2 ">
        <div className="card-body">
            <h3 style={{
                textAlign: "center"
            }}>{props.name}</h3>
          <p style={{textAlign:"center"}}className="card-text">{props.details}</p>
        </div>
      </div>
    );
}


export default ProjectCards;