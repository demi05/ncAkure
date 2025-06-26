import footerIcon from "../../public/footer.png";
import footerlg from "../../public/footer-image-lg.png";

import "./footer.css";
import FooterLogo from "./FooterLogo";

function Footer() {
  return (
    <div className="footer">
      {/* <FooterLogo /> */}
      <picture>
        <source
          media="(min-width: 1020px)"
          srcset={footerlg}
          className="footer-img"
        />

        <img src={footerIcon} className="footer-img" alt="" />
      </picture>
    </div>
  );
}

export default Footer;
