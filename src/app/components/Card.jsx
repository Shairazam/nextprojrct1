import React from "react";
import Image from "next/image";

function Card(props) {
  return (
    <div>
      <div
        href="#"
        className={` flex-1 flex-col items-center
         bg-gray-500 border border-gray-200 
         rounded-lg shadow md:flex-row md:max-w-xl 
         transition-all delay-150 ease-linear 
         hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800
         `}
      >
        <Image
          src={props.url}
          className="w-full h-auto rounded-3xl p-2 mx-auto"
        />

        <div class="flex flex-col justify-between p-4 shadow-2xl leading-normal">
          <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.heading}
          </h5>
          <p class="mb-3 text-center font-normal text-gray-700 dark:text-gray-400">
            {props.para}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
