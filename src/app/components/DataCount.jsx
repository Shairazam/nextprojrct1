import React from "react";

const DataCount = () => {
  return (
    <div>
      <div className="py-2 sm:py-4 my-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-4">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl className="mt-16 bg-gray-800 grid grid-cols-1 gap-.5 overflow-hidden rounded-2xl text-start sm:grid-cols-2 lg:grid-cols-3 shadow-xl bg-[#A0A0A0]">
              <div className="flex flex-col p-6  ">
                <dt className="text-sm text-white font-semibold md:text-center leading-6 text-gray-600">
                  Loved Trusted users & communities.
                </dt>
                <dd className="order-first text-[yellow] text-3xl md:text-center font-semibold tracking-tight text-gray-900">
                  400k
                </dd>
              </div>
              {/* <span className="flex h-20 w-1 bg-gray-400 mt-5"></span> */}
              <div className="flex flex-col p-6 ">
                <dt className="text-sm text-white font-semibold md:text-center leading-6 text-gray-600">
                  Loved Trusted users & communities. soann
                </dt>
                <dd className="order-first text-[yellow] text-3xl font-semibold md:text-center tracking-tight text-gray-900">
                  400k
                </dd>
              </div>
              {/* <span className="flex h-20 w-1 bg-gray-400 mt-5"></span> */}
              <div className="flex flex-col p-6 ">
                <dt className="text-sm text-white font-semibold md:text-center leading-6 text-gray-600">
                  Loved Trusted users & communities.
                </dt>
                <dd className="order-first text-[yellow] text-3xl font-semibold md:text-center tracking-tight text-gray-900">
                  400k
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCount;
