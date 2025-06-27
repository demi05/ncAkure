import Header from "./Header";
import TicketButton from "./TicketButton";

function Herotext()
{
    return (
      <div className="hero-section">
        <Header /> 
        <h1 className="font-[FineVintage] font-bold  text-[#E28B3F] text-[45px] sm:text-6xl  md:text-7xl text-outline">The Train is Here</h1>
        <h3 className="font-raleway font-medium text-[24px] md:text-[32px] text-black leading-[103%] text-center tracking-[1.5px] w-[80%] md:w-[65%]">
          It's time for you to hop on the NC Akure train to take you on the long
          awaited journey to a new era. You cannot miss out now.
        </h3>
       <TicketButton className="w-[40%] md:w-[35%] lg:w-[25%] xl:w-[20%] h-[70px] text-[20px] sm:text-[18px] md:text-[30px] shadow-[0_4px_0_0_#FAA137]" />
      </div>
    );
}

export default Herotext
