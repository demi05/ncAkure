import { useEffect, useState } from "react";
import TicketButton from "./TicketButton";
import { Link } from "react-router-dom";

const Header = ({ hideTicket = false }) => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-07-26T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setCountdown("Event is live!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      // Pad all values with leading zeros
      const formattedCountdown = `${days.toString().padStart(2, "0")}: ${hours
        .toString()
        .padStart(2, "0")}: ${minutes.toString().padStart(2, "0")}: ${seconds
        .toString()
        .padStart(2, "0")}`;

      setCountdown(formattedCountdown);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="flex items-center justify-between w-full md:w-[70%] mx-auto">
      <Link to="/"> <img src="/logo.svg" alt="NC Akure logo" className="h-12" /> </Link>  

      <div
        className={`font-medium text-[#202120] font-raleway text-base leading-[91%] ${
          hideTicket ? "ml-auto text-right" : ""
        }`}
      >
        <p>Countdown: </p>
        {countdown}
      </div>

      {!hideTicket && <TicketButton />}
    </div>
  );
};

export default Header;
