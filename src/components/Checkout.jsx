import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./checkout.css";

function Checkout() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="checkout-section">
      <h2 className="font-[FineVintage] text-[48px] md:text-[70px] text-center">
        Registration Complete!
      </h2>
      <img src="/red-envelope.svg" alt="complete form" />
      <h3>Congratulations, you are one step ahead of becoming a traveler. </h3>
      <h3>
        Please check your mail for the next step in your registration process.
      </h3>
    </div>
  );
}

export default Checkout;
