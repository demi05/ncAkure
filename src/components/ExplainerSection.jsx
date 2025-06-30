import "./explainersection.css";
import explainerImgLg from "../../public/explainer.png";
import TicketButton from "./TicketButton";

function ExplainerSection() {
  return (
    <div className="explainer-section">
      <img src="/footer_line.svg" alt="footer line" className="w-screen" />

      <h2 className="font-[FineVintage] text-[24px] sm:text-3xl md:text-5xl leading-[114px]">
        Don't let the train leave you behind
      </h2>

      <div className="w-[70%] md:w-1/2">
        <img src={explainerImgLg} className="explainer-img  scale-110" alt="" />
      </div>
      <div className="h-20 md:h-28 xl:h-36"></div>

      <TicketButton className="w-[40%] text-black md:w-[35%] lg:w-[45%] xl:w-[20%] h-[70px] text-[20px] sm:text-[18px] md:text-[30px] shadow-[0_4px_0_0_#F4EBC8]" />

      <img src="/footer_line2.svg" alt="footer line" className="w-screen" />
    </div>
  );
}

export default ExplainerSection;
