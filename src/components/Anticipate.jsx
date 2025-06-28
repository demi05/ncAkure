import anticipateImg from "../../public/anticipate.png";
import anticipateImgLg from "../../public/anticipate-lg.png";
import "./anticipate.css";
import TicketButton from "./TicketButton";

function Anticipate() {
  return (
    <div className="anticipate-section relative">
      <img src="/footer_line.svg" alt="footer line" className="w-screen" />

      <h2 className="font-[FineVintage] text-[#F4EBC8] text-[32px] md:text-5xl leading-[114px]">
        The Travel Gear is Coming
      </h2>

      <h3>
        CC Ajala has you in mind for the best experience possible and you will
        get the chance to enjoy your trip with all you need.
      </h3>
      <h3>
        Stay tuned, your travel gear will be here soon, but only if you get your
        ticket.
      </h3>
      <div className="img-box">
        <picture>
          <source
            media="(min-width: 1020px)"
            srcset={anticipateImgLg}
            className="anticipate-img"
          />
          <img src={anticipateImg} className="anticipate-img" alt="" />
        </picture>
      </div>
      <TicketButton className="w-[40%] md:w-[35%] lg:w-[45%] xl:w-[20%] h-[70px] text-[20px] sm:text-[18px] md:text-[30px] shadow-[0_4px_0_0_#FAA137]" />

      <img
        src="/footer_line2.svg"
        alt="footer line up"
        className="w-screen block"
      />
    </div>
  );
}

export default Anticipate;
