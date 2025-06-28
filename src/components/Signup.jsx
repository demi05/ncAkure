import Form from "./Form";
import Footer from "./Footer";
import formheader from "../../public/form-header.png"
import "./form.css";

function Signup() {
  return (
    <div>
          <div className="form-container">
              <img src={formheader} alt="" />
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
