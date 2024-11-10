import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e28] mt-[100px] py-[40px] text-white font-sans">
      <div className="flex justify-between items-center mb-[40px]">
        <div className="flex items-center gap-[10px]">
          <div className="w-[40px] h-[40px] bg-[#FFD6D6] rounded-full"></div>
          <span className="text-[18px] font-bold">LOGO</span>
        </div>

        <nav className="flex gap-[20px]">
          <a href="#" className="text-white text-[15px] font-bold no-underline">Home</a>
          <a href="#" className="text-white text-[15px] font-bold no-underline">Blog</a>
          <a href="#" className="text-white text-[15px] font-bold no-underline">About us</a>
          <a href="#" className="text-white text-[15px] font-bold no-underline">Contact us</a>
          <a href="#" className="text-white text-[15px] font-bold no-underline">Privacy Policy</a>
        </nav>
      </div>

      <div className="bg-[#2c2c3a] p-[30px] rounded-[10px] text-center mb-[40px]">
        <div className="flex justify-between items-center pt-[33px]">
          <div className="flex-1 text-left">
            <h2 className="text-[34px] font-bold mb-[20px]">
              Subscribe to our newsletter to <br /> get the latest updates and news
            </h2>
          </div>
          <div className="flex-1 flex justify-center gap-[10px]">
            <input
              type="email"
              placeholder="example@email.com"
              className="px-[15px] py-[10px] rounded-[5px] border-none text-[18px] w-full max-w-[380px] h-[35px] outline-none"
            />
            <button
              className="bg-[#FF5959] text-white px-[30px] py-[10px] rounded-[5px] border-none h-[55px] cursor-pointer text-[16px] font-bold flex items-center gap-[5px]"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-[40px] flex-wrap">
        <div className="text-left text-[16px] text-white flex-1">
          <p className="my-[10px]">Finstreet 118 2561 abctown</p>
          <p className="my-[10px]">example@femail.com • 001 21345 442</p>
        </div>
        <div className="flex justify-start gap-[30px] mx-[40px] flex-1">
          <a href="#" className="text-white text-[22px]"><FaFacebook /></a>
          <a href="#" className="text-white text-[22px]"><FaTwitter /></a>
          <a href="#" className="text-white text-[22px]"><FaInstagram /></a>
          <a href="#" className="text-white text-[22px]"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}
