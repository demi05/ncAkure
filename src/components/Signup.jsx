import Form from "./Form";
import Footer from "./Footer";

import "./form.css";
import Header from "./Header";

function Signup() {
  return (
    <div>
      <div className="form-container">
        <Header hideTicket />
        <h2 className="font-[FineVintage] text-[48px] md:text-[96px] form-header">
          Get Your Ticket
        </h2>
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
