const TechnologySection = () => {
    return (
      <div className="p-5 rounded-lg my-12">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">New Technology</h2>
          <a href="#" className="text-[#333] no-underline font-bold">See All</a>
        </div>
  
        <div className="flex gap-5 justify-center flex-wrap">
          
          <div className="w-[289px] h-[396px] p-2.5 rounded-lg bg-[#f4f0f8] shadow-md text-center">
            <div 
              className="h-[250px] w-full bg-[#ccc] rounded-lg mb-2.5 bg-cover bg-center" 
              style={{ backgroundImage: `url('/1.png')` }}
            ></div>
            <h3 className="text-lg font-bold mb-2.5">
              A Review Of Cars With Advanced Infotainment Systems
            </h3>
            <div className="flex items-center text-[#777] text-sm ml-2.5">
              <img src="/dasteer.png" alt="Author" className="w-10 h-10 rounded-full p-5" />
              <div>
                <p className="m-0 font-bold text-[#2B2C34] text-base text-left">Dasteen</p>
                <div className="flex space-x-2.5 text-xs text-[#2B2C34]">
                  <p>Jan 10, 2024</p>
                  <p>&bull; 3 Min Read</p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="w-[289px] h-[396px] p-2.5 rounded-lg bg-[#f4f0f8] shadow-md text-center">
            <div 
              className="h-[250px] w-full bg-[#ccc] rounded-lg mb-2.5 bg-cover bg-center" 
              style={{ backgroundImage: `url('/2.png')` }}
            ></div>
            <h3 className="text-lg font-bold mb-2.5">
              A Deep Dive Into Sports Cars
            </h3>
            <div className="flex items-center text-[#777] text-sm ml-2.5">
              <img src="/dasteer.png" alt="Author" className="w-10 h-10 rounded-full p-5" />
              <div>
                <p className="m-0 font-bold text-[#2B2C34] text-base text-left">Dasteen</p>
                <div className="flex space-x-2.5 text-xs text-[#2B2C34]">
                  <p>Jan 10, 2024</p>
                  <p>&bull; 3 Min Read</p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="w-[289px] h-[396px] p-2.5 rounded-lg bg-[#f4f0f8] shadow-md text-center">
            <div 
              className="h-[250px] w-full bg-[#ccc] rounded-lg mb-2.5 bg-cover bg-center" 
              style={{ backgroundImage: `url('/3.png')` }}
            ></div>
            <h3 className="text-lg font-bold mb-2.5">
              A Deep Dive Into Sports Cars
            </h3>
            <div className="flex items-center text-[#777] text-sm ml-2.5">
              <img src="/dasteer.png" alt="Author" className="w-10 h-10 rounded-full p-5" />
              <div>
                <p className="m-0 font-bold text-[#2B2C34] text-base text-left">Dasteen</p>
                <div className="flex space-x-2.5 text-xs text-[#2B2C34]">
                  <p>Jan 10, 2024</p>
                  <p>&bull; 3 Min Read</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default TechnologySection;
  