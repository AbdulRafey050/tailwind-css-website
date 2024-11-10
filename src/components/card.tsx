'use client'
import Image from "next/image";

export default function Card() {
  return (
    <div className="flex flex-wrap p-[20px] font-[Arial, sans-serif]">
      
      <div className="flex-[3] mr-[20px] min-w-[300px]">
        <h2 className="text-[40px] font-bold">Latest</h2>
        <div className="border border-[#e0e0e0] rounded-[8px] overflow-hidden mb-[20px]">
          <Image
            src="/5.png"
            alt="Latest Blog"
            width={100}
            height={100}
            className="w-full h-auto"
          />
          <div className="p-[20px]">
            <p className="text-[#ff5a5f] text-[14px] m-0">By John Doe | March 12, 2024</p>
            <h3 className="text-[35px] font-bold my-[10px]">
              Lorem ipsum dolor sit amet, consectetur aisc ing elit, sed do eiusmod tempor.
            </h3>
            <p className="text-[20px] text-[#666] leading-[30px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident. <br />
              Duis aute irure dolor in reprehenderit in voluptate v <br />
              Duis aute irure dolor in reprehenderit in volusse cillum dolore eu fugiat nulla pariatur. <br />
              Excepteur sint occaecat cupidatat non proident. <br />
            </p>
            <button className="bg-[#ff5a5f] text-white py-[10px] px-[20px] border-none rounded-[5px] cursor-pointer mt-[10px] h-[51px] w-[230px] text-[20px]">
              Read more
            </button>
          </div>
        </div>
      </div>
  
      <div className="flex-[2] min-w-[300px]">
        <div className="flex justify-between items-center">
          <h2 className="text-[40px] font-bold">Trending Blogs</h2>
          <a href="#" className="text-[14px] text-black no-underline">See all</a>
        </div>
        {[...Array(4)].map((_, index) => (
          <div key={index} className={`flex flex-col py-[20px] ${index === 1 ? 'border-b border-[#e0e0e0] bg-[#ff5a5f] text-white' : 'bg-transparent text-[#333]'} mb-[10px]`}>
            <p className={`text-[15px] ${index === 1 ? 'text-white' : 'text-[#ff5a5f]'} m-0`}>
              By John Doe | Aug 23, 2023
            </p>
            <h3 className="text-[35px] font-bold my-[5px] p-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}
