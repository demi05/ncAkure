import header from "../../public/anticipate-header.png"
import headerLg from "../../public/anticipate-header-lg.png"
import anticipateImg from "../../public/anticipate.png";
import anticipateImgLg from "../../public/anticipate-lg.png";
import "./anticipate.css";

function Anticipate() {
  return (
    <div className="anticipate-section">
      <picture>
        <source
          media="(min-width: 1020px)"
          srcset={header}
          className=""
        />
        <img src={headerLg} className="" alt="" />
      </picture>
      <h3>
        CC Ajala has you in mind for the best experience possible and you will
        get the chance to enjoy your trip with all you need.
      </h3>
      <h3>
        Stay tuned, your travel gear will be here soon, but only if you get your
        ticket.
      </h3>
      <div className="img-box">
        <picture>
          <source
            media="(min-width: 1020px)"
            srcset={anticipateImgLg}
            className="anticipate-img"
          />
          <img src={anticipateImg} className="anticipate-img" alt="" />
        </picture>
      </div>
      <h3 className="danger">button goes here!!!!!!!</h3>
    </div>
  );
}

export default Anticipate;
