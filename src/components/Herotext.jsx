import header from "../../public/hero-header.png"
import Header from "./Header";
import TicketButton from "./TicketButton";

function Herotext()
{
    return (
      <div className="hero-section">
        <Header />
        <img src={header} className="header-img" alt="" />
        <h3 className="font-raleway font-medium text-[24px] md:text-[32px] text-black leading-[103%] text-center ">
          It's time for you to hop on the NC Akure train to take you on the long
          awaited journey to a new era. You cannot miss out now.
        </h3>
       <TicketButton className="w-[50%] h-[50px] text-[18px]" />
      </div>
    );
}

export default Herotext
