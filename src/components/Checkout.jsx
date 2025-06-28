import checkoutImg from "../../public/checkout-img.png";
import checkoutHeader from "../../public/checkout-header.png";
import "./checkout.css"
function Checkout() {
  return (
    <div className="checkout-section">
      <img src={checkoutHeader} alt="" />
      <img src={checkoutImg} alt="" />
      <h3>Congratulations, you are one step ahead of becoming a traveler. </h3>
      <h3>
        Please check your mail for the next step in your registration process.
      </h3>
    </div>
  );
}

export default Checkout;
