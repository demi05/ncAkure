import { Link, useNavigate } from "react-router-dom";

const TicketButton = ({ className = "" }) => {


  return (
    <button
      className={`font-raleway font-semibold text-[12px] sm:text-[13px] md:text-[14px] text-white bg-[#CF4638] border-[5px] border-black w-[30%] sm:w-[22%] md:w-[22%] lg:w-[15%] xl:w-[13%] h-[35px] shadow-[0_2px_0_0_#FAA137] ${className}`}
    >
      <Link to="signup">Get Your Ticket</Link>
    </button>
  );
};

export default TicketButton;
