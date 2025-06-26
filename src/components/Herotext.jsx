import header from "../../public/hero-header.png"

function Herotext()
{
    return (
      <div className="hero-section">
        <img src={header} className="" alt="" />
        <h3>
          It's time for you to hop on the NC Akure train to take you on the long
          awaited journey to a new era. You cannot miss out now.
        </h3>
      </div>
    );
}

export default Herotext
