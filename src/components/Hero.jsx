import Herotext from "./Herotext";
import heroImgLg from "../../public/hero-image-lg.png";
import "./hero.css";

function Hero() {
  return (
    <section className="hero relative" id="hero" >
      <Herotext />
      <div className="img-box">
        <picture>
          <source
            media="(min-width: 1020px)"
            srcset={heroImgLg}
            
          />
          <img src={heroImgLg} className="hero-img" alt="" />
        </picture>
      </div>
       <img src="/footer_line2.svg" alt="footer line" className="w-screen absolute bottom-0 left-0" />
    </section>
  );
}

export default Hero;
