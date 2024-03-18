import profilePic from './assets/profile.png'
function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="_title">Confused Bee</h2>
            <p className="card_text">I live !</p>
        </div>
    );
}
export default Card