import "./explainersection.css";
import explainerImg from "../../public/explainer.png";
import explainerImgLg from "../../public/explainer-lg.png";
import explainerHeader from "../../public/explainer-header.png";
import explainerHeaderLg from "../../public/explainer-header-lg.png";

function ExplainerSection() {
  return (
    <div className="explainer-section">
      
        <div>
          <picture>
            <source
              media="(min-width: 1020px)"
              srcset={explainerHeader}
              className=""
            />
            <img src={explainerHeaderLg} className="explainer-header" alt="" />
          </picture>
        </div>
        <picture>
          <source
            media="(min-width: 1020px)"
            srcset={explainerImgLg}
            className="explainer-img"
          />
          <img src={explainerImgLg} className="explainer-img" alt="" />
        </picture>
      
      <h3 className="button-holder">button goes here!!!!</h3>
    </div>
  );
}

export default ExplainerSection;
