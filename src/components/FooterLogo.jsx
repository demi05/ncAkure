import footerlogo from "../../public/nc-logo.png";
import footerlogolg from "../../public/nc-logo-lg.png";


function FooterLogo() {
  return (
    <div className="footer-logo">
      <picture>
        <source
          media="(min-width: 1020px)"
          srcset={footerlogolg}
          className=""
        />
        <img src={footerlogo} className="" alt="NC Logo" />
      </picture>

    
    </div>
  );
}

export default FooterLogo;
