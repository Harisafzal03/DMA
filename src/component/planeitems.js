import React, { useState } from 'react';

const PanelItem = ({ panel }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="border rounded-lg border-black overflow-hidden relative"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 ${isHovered ? `bg-[${panel.bg}}]`:'bg-[#898989]'}`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 ${isHovered ? `bg-[${panel.bg}}]`:'bg-[#898989]'}`}></p>
                  </div>
                </div>
  );
};

export default PanelItem;
