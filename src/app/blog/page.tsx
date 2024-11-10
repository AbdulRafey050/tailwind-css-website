import React from 'react';
import Hero from '@/components/hero';

export default function Blog() {
  return (
    <div>
      <Hero />
      <div className="max-w-full mx-auto p-5 font-sans">
        <h2 className="text-4xl font-bold text-[#232536] mb-5">All posts</h2>
        <hr className="border-t border-[#eee] mb-5" />
        
        <div className="flex gap-5 items-start w-full h-[350px]">
          <div className="flex-1 w-[40%]">
            <img
              src="/7.png"
              alt="Car Review"
              className="w-full h-[360px] rounded-lg object-cover mt-5"
            />
          </div>
          <div className="flex-1 w-[60%] flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-[#232536] mb-2">
              A Review Of Cars With Advanced Infotainment <br /> Systems
            </h3>
            <div className="flex items-center text-[#777] text-sm">
              <img
                src="/dasteer.png"
                alt="Author"
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <p className="m-0 font-bold text-[#2B2C34] text-lg">Dasteen</p>
                <div className="flex gap-2 text-[#2B2C34] text-xs">
                  <p>Jan 10, 2024</p>
                  <p>&bull; 3 Min Read</p>
                </div>
              </div>
            </div>
            <p className="text-[#2B2C34] text-xl leading-7 my-2">
              Lorem ipsum dolor sit amet consectetur. Consectetur risus quis
              diam hendrerit. Interdum mattis in sed diam egestas metus at duis
              commodo. Cursus quis cursus dignissim egestas sollicitudin tristique
              quis. Orci neque quis porttitor eu amet. Ommodo. Cursus quis cursus
              dignissim egestas sollicitudin tristique quis. Orci neque quis
              porttitor eu amet.
            </p>
            <button className="bg-[#FF5959] text-white p-3 h-[38px] w-[192px] rounded-md border-none text-sm font-bold">
              Read full article...
            </button>
          </div>
        </div>

        <div className="flex gap-5 items-start w-full h-[350px] mt-12">
          <div className="flex-1 w-[40%]">
            <img
              src="/8.png"
              alt="Car Review"
              className="w-full h-[360px] rounded-lg object-cover mt-2"
            />
          </div>
          <div className="flex-1 w-[60%] flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-[#232536] mb-2">
              A Review Of Cars With Advanced Infotainment <br /> Systems
            </h3>
            <div className="flex items-center text-[#777] text-sm">
              <img
                src="/dasteer.png"
                alt="Author"
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <p className="m-0 font-bold text-[#2B2C34] text-lg">Dasteen</p>
                <div className="flex gap-2 text-[#2B2C34] text-xs">
                  <p>Jan 10, 2024</p>
                  <p>&bull; 3 Min Read</p>
                </div>
              </div>
            </div>
            <p className="text-[#2B2C34] text-xl leading-7 my-2">
              Lorem ipsum dolor sit amet consectetur. Consectetur risus quis
              diam hendrerit. Interdum mattis in sed diam egestas metus at duis
              commodo. Cursus quis cursus dignissim egestas sollicitudin tristique
              quis. Orci neque quis porttitor eu amet. Ommodo. Cursus quis cursus
              dignissim egestas sollicitudin tristique quis. Orci neque quis
              porttitor eu amet.
            </p>
            <button className="bg-[#FF5959] text-white p-3 h-[38px] w-[192px] rounded-md border-none text-sm font-bold">
              Read full article...
            </button>
          </div>
        </div>

        <div className="flex gap-5 items-start w-full h-[350px] mt-12">
          <div className="flex-1 w-[40%]">
            <img
              src="/9.png"
              alt="Car Review"
              className="w-full h-[360px] rounded-lg object-cover mt-2"
            />
          </div>
          <div className="flex-1 w-[60%] flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-[#232536] mb-2">
              A Review Of Cars With Advanced Infotainment <br /> Systems
            </h3>
            <div className="flex items-center text-[#777] text-sm">
              <img
                src="/dasteer.png"
                alt="Author"
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <p className="m-0 font-bold text-[#2B2C34] text-lg">Dasteen</p>
                <div className="flex gap-2 text-[#2B2C34] text-xs">
                  <p>Jan 10, 2024</p>
                  <p>&bull; 3 Min Read</p>
                </div>
              </div>
            </div>
            <p className="text-[#2B2C34] text-xl leading-7 my-2">
              Lorem ipsum dolor sit amet consectetur. Consectetur risus quis
              diam hendrerit. Interdum mattis in sed diam egestas metus at duis
              commodo. Cursus quis cursus dignissim egestas sollicitudin tristique
              quis. Orci neque quis porttitor eu amet. Ommodo. Cursus quis cursus
              dignissim egestas sollicitudin tristique quis. Orci neque quis
              porttitor eu amet.
            </p>
            <button className="bg-[#FF5959] text-white p-3 h-[38px] w-[192px] rounded-md border-none text-sm font-bold">
              Read full article...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
