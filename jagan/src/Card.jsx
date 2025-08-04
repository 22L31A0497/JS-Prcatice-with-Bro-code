import profile from "./assets/profile.jpg"

function Card(){
    return(
        <div className="card">
      <img src={profile} alt="Profile picture" className="photo"></img>
      <h1>Jaganmohan Rao Kuna</h1>
      <p>Hi there My self Jaganmohan i am a full stack web developer (❁´◡`❁)</p>

        </div>
    );
}

export default Card;