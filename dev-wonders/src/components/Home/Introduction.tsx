import AboutMeArticle from "./AboutMeArticle";
import SocialMediaLinks from "./SocialMediaLinks";
import NextButton from "../NextButton";

function Introduction() {
  return (
    <div className="GlicthContainer HomeBody ">
      <div className="">
        <AboutMeArticle />

        <div className="WindowsSocialMediaDiv">
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
