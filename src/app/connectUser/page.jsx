import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/images/connectedUsers/Group 4052.png";
import img1 from "../../../public/assets/images/connectedUsers/img1.jpeg";
import img2 from "../../../public/assets/images/connectedUsers/img2.jpeg";
import img3 from "../../../public/assets/images/connectedUsers/img3.jpeg";
import Card from "../components/Card";
import DataCount from "../components/DataCount";
import Footer from "../components/Footer";

function page() {
  const card = [
    {
      url: img1,
      heading: "",
      para: "",
    },

    {
      url: img2,
      heading: "",
      para: "",
    },

    {
      url: img3,
      heading: "",
      para: "",
    },
  ];
  return (
    <>
      <div className="w-full  bg-gray-700">
        <div className="bg-image">
          <div className="flex pt-20 items-center text-center">
            <Image src={logo} className="w-20 h-20 mx-auto py-40px" />
          </div>
          <div className="text-center ">
            <h2 className="text-white ">Answer Question And win reward</h2>
            <p className="text-gary-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="md:my-6 my-2">
              <button className="border-2 border-[#FFE500] font-bold text-xl rounded-3xl px-6 py-2 transition-all delay-150 ease-linear text-white hover:bg-[#fff] hover:text-black">
                Connect
              </button>
            </div>
          </div>

          <div className="container mx-auto px-8  ">
            <div className="flex items-center justify-center gap-5">
              <div className="relative  ">
                <Card
                  className=""
                  url={img1}
                  heading="play and get a chance to take the pot"
                  para="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                />
              </div>

              <Card
                className="mb-30"
                url={img2}
                heading="Register & Connect Wallet"
                para="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
              />
              <Card
                url={img3}
                heading="Buy game ticket to enter a session"
                para="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
              />
            </div>
          </div>
        </div>

        <section>
          <DataCount />
        </section>

        <section>
          <div class="flex w-full h-20 gap-2 justify-center">
            <div class="flex-1 mx-3 my-3 rounded-e-2xl w-28 bg-gray-900"></div>
            <div class="flex-1 mx-3 my-3 rounded-2xl w-28  bg-gray-900"></div>
            <div class="flex-1 mx-3 my-3 rounded-2xl w-28 bg-gray-900"></div>
            <div class="flex-1 mx-3 my-3 rounded-2xl w-28 bg-gray-900"></div>
            <div class="flex-1 mx-3 my-3 rounded-2xl w-28 bg-gray-900 ..."></div>
            <div class="flex-1 mx-3 my-3 rounded-2xl w-28 bg-gray-900 ..."></div>
            <div class="flex-1 mx-3 my-3 rounded-l-2xl w-28 bg-gray-900 ..."></div>
          </div>
        </section>
        <section>
          <div>
            <div className="text-center m-3">
              <label className="text-white text-uppercase text-xs">
                INDUSTRIES
              </label>
            </div>
            <div className="text-center m-4  font-2xl">
              <h1 className="text-3xl">
                Automated messaging <br /> for
                <span className="text-[#ffe500]"> any industry.</span>
              </h1>
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default page;
