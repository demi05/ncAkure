import Form from "./Form";
import Footer from "./Footer";

import "./form.css";
import Header from "./Header";

function Signup() {
  return (
    <div>
          <div className="form-container">
              <Header hideTicket/>
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
