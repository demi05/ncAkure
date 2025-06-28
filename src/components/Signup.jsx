import Form from "./Form";
import Footer from "./Footer";
import formheader from "../../public/form-header.png";

import "./form.css";
import Header from "./Header";

function Signup() {
  return (
    <div>
      <div className="form-container">
        <Header hideTicket />
        <img src={formheader} alt="" style={{ paddingTop: "10px" }} />
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
