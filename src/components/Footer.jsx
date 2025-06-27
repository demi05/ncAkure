import { IoLogoInstagram } from "react-icons/io5";

import "./footer.css";

function Footer() {
  return (
    <footer className="relative w-full bg-[#FFFDE8] min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] xl:min-h-[70vh] flex flex-col">
      <img src="/footer_line.svg" alt="footer line" className="w-screen" />

<div className="train-img flex flex-col items-center justify-between gap-6 absolute bottom-0 left-0">
      <img src="/logo.svg" alt="NC Akure logo" className="w-[120px] md:w-[180px] h-[56px] md:h-[80px]"/>
      
    <a href="https://www.instagram.com/ainconferences/" target="blank"><IoLogoInstagram width={"56px"} height={"16px"}/></a> 

  
    <div className="">
      <img src="/footer_train.svg" alt="footer train" className="w-screen" />
    </div>
  </div>
    </footer>
  );
}

export default Footer;
