import "./online.css";

export default function Online() {

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src="assets/person/2.jpeg" alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername"></span>
    </li>
  );
}
