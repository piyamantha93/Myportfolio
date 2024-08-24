import { RiReactjsLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSpringboot } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import {motion} from 'framer-motion'




const Technologies = () => {
  return (
    <div className="border-b border-t-neutral-800 pb-24 ">
    <motion.h1
    whileInView={{opacity: 1, y: 0}}
    initial={{opacity: 0, y: -100}}
    transition={{duration: 1.5}}
    className="my-20 text-center text-4xl">Technologies</motion.h1>
    <div className="flex flex-wrap items-center justify-center gap-4 animate-slideInLeft">
      <div className="rounded-2xl border-4 border-neutral-100 p-4 animate-pulse">
        <RiReactjsLine className="text-7xl text-cyan-400" />
        <p className="flex justify-center">React</p>
      </div>
      <div className="rounded-2xl border-4 border-neutral-100 p-4 animate-pulse ">
        <SiMongodb className="text-7xl text-green-500" />
        <p className="flex justify-center">Mongodb</p>
      </div>
      <div className="rounded-2xl border-4 border-neutral-100 p-4 animate-pulse">
        <SiReact className="text-7xl text-purple-600" />
        <p className="flex justify-center text-opacity-50">ReactNative</p>
      </div>
      <div className="rounded-2xl border-4 border-neutral-100 p-4 animate-pulse">
        <SiMysql className="text-7xl text-blue-500" />
        <p className="flex justify-center">Mysql</p>
      </div>
      <div className="rounded-2xl border-4 border-neutral-100 p-4 animate-pulse">
        <FaNodeJs className="text-7xl text-green-500" />
        <p className="flex justify-center">NodeJs</p>
      </div>
      <div className="rounded-2xl border-4 border-neutral-100 p-4 animate-pulse">
        <BiLogoPostgresql className="text-7xl text-sky-700" />
        <p className="flex justify-center">Postgres</p>
      </div>
      <div className="rounded-2xl border-4 border-neutral-100 p-4 animate-pulse">
        <SiSpringboot className="text-7xl text-green-500" />
        <p className="flex justify-center">SpringBoot</p>
      </div>
      <div className="rounded-2xl border-4 border-neutral-100 p-4 animate-pulse">
        <SiTailwindcss className="text-7xl text-blue-500" />
        <p className="flex justify-center">Tailwindcss</p>
      </div>
    </div>
  </div>
  );
}

export default Technologies;
