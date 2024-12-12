// import {
//   FaWindows,
//   FaPlaystation,
//   FaXbox,
//   FaApple,
//   FaLinux,
//   FaAndroid,
// } from "react-icons/fa";
// import { SiNintendo } from "react-icons/si";
// import { BsGlobe } from "react-icons/bs";
// import { MdPhoneIphone } from "react-icons/md";
// import { IconType } from "react-icons";
import type { Platform } from "../types/GameTypes";
interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
console.log(platforms);

  // const iconMap: {[key: string]: IconType} ={
  //   pc: FaWindows,
  //   playstation: FaPlaystation,
  //   xbox: FaXbox,
  //   mac: FaApple,
  //   linux: FaLinux,
  //   android: FaAndroid,
  //   ios:MdPhoneIphone,
  //   web:BsGlobe,
  //   nitendo: SiNintendo
  // }
 
  
  return (
    <div className="flex gap-2 flex-wrap  md:w-[200px]">
      {platforms.map((platform) => (
        <p className="text-xs" key={platform.id}>{platform.name}</p>
      ))}
    </div>
  );
}

export default PlatformIconList;
