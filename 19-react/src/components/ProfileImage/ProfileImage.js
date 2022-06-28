import catImage from "./cat.png";
import "./ProfileImage.css";

const ProfileImage = () => {
  return (
    <div>
      <img src={catImage} alt="catImage" className="ProfileImage" />
    </div>
  );
};

export default ProfileImage;
