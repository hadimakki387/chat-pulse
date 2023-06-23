import AboutMeArticle from "./AboutMeArticle";
import SocialMediaLinks from "./SocialMediaLinks";
import NextButton from "../NextButton";

function Introduction() {
  return (
    <div className="GlicthContainer HomeBody ">
      <AboutMeArticle />

      <div className="reveal">
        <NextButton URI="/about" Content="See More About Me" />
        <div className="WindowsSocialMediaDiv">
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
