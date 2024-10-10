import "./UserProfile.css";
import profile from "../assets/image-daniel.jpg"

export const UserProfile = () => {
  return (
    <div className="user-profile">
      <img  src={profile} alt="" />
      <div className="user-details">
        <span>Daniel Clifford</span>
        <span>Verified Graduate</span>
      </div>
    </div>
  );
};

export default UserProfile;
