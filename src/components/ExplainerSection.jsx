import "./explainersection.css";
import explainerImg from "../../public/explainer.png";
import explainerImgLg from "../../public/explainer-lg.png";
import explainerHeader from "../../public/explainer-header.png";
import explainerHeaderLg from "../../public/explainer-header-lg.png";
import TicketButton from "./TicketButton";

function ExplainerSection() {
  return (
    <div className="explainer-section">
      
     
          <h2 className="font-[FineVintage] text-[32px] leading-[114px]">Don't let the train leave you behind</h2>
     
        <picture>
          <source
            media="(min-width: 1020px)"
            srcset={explainerImgLg}
            className="explainer-img"
          />
          <img src={explainerImgLg} className="explainer-img" alt="" />
        </picture>
      
     <TicketButton className="w-1/2 h-[50px] shadow-[0_4px_0_0_#F4EBC8]" />
    </div>
  );
}

export default ExplainerSection;
