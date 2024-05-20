import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/images/connectedUsers/Group 4052.png";
import twitter from "../../../public/assets/images/connectedUsers/twitter.svg";

function Footer() {
  return (
    <div className="flex text-white mt-20">
      <div className=" ml-8 pt-20">
        <div className="flex  items-center text-center">
          <Image src={logo} className="w-20 h-20  py-40px" alt=" " />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and <br />{" "}
          typesetting industry
        </p>
      </div>

      <div className="items-center ml-auto mr-8 mt-24">
        <ul className="flex pb-8 gap-4">
          <li>
            <Image src={logo} className="w-10 h-10" />
          </li>
          <Image src={twitter} className="w-8 h-8" />
          <li></li>
          <Image src={logo} className=" w-10 h-10" />
          <li></li>
        </ul>
        <div className="flex list-none gap-5 text-sm">
          <li>Privecy Policy</li>
          <li>Terms</li>
          <li>Legal</li>
        </div>
      </div>
    </div>
  );
}

export default Footer;
