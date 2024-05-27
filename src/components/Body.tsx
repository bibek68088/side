import { useState } from "react";
import bgImg from "/Rectangle 1.png";
import rectangle3 from "/Rectangle 3.png";
export const Body = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <div className="pb-10">
        <div>
          <div
            className="w-full h-[471px] object-cover"
            style={{ backgroundImage: `url(${bgImg})` }}
          >
            <div className="w-7/12 mx-24">
              <p className="text-white uppercase tracking-tighter leading-[65px] font-saria font-bold text-[63px]">
                One Step At a time, slowly but{" "}
                <span className="text-teal-500">steadily</span>
              </p>
            </div>
          </div>
          <div className="container flex flex-col lg:flex-row items-center gap-16 w-10/12 mx-auto">
            <div className="flex w-full">
              <img
                src={rectangle3}
                alt="rectangle 3"
                className="max-w-[550px] h-[367px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-8 text-black">
              <h1 className="border-l-4 border-red-500 tracking-tighter font-extrabold font-saria text-2xl rounded-xs pl-1 w-9/12 mx-auto">
                WHAT IS OUR MAIN GOAL?
              </h1>
              <div className="w-[523px]">
                <p className="uppercase font-saria text-center font-medium text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ligula est, semper quis nisi at, convallis dignissim dui.
                  Curabitur id quam maximus, egestas ante at, malesuada tortor.
                  Nam mollis ipsum neque, sed venenatis mauris mattis at. Donec
                  mattis felis sit amet nulla dignissna. Quisque vel sagittis
                  leo. Duis sagittis ex quam, quis ve
                </p>
              </div>
              <button className="text-white bg-teal-700 w-[91px] h-[28px] font-bold p-1  rounded-sm font-saria">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
