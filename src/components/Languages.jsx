import { SiJavascript, SiPhp, SiPython, SiHtml5, SiCss3, SiGithub } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';  
import {motion} from 'framer-motion'

const Skills = () => {
  const skills = [
    { icon: <FaJava className="text-7xl text-white" />, name: 'Java' },  // Using a generic Java icon
    { icon: <SiJavascript className="text-7xl text-yellow-400" />, name: 'JavaScript' },
    { icon: <SiPhp className="text-7xl text-purple-500" />, name: 'PHP' },
    { icon: <SiPython className="text-7xl text-white" />, name: 'Python' },
    { icon: <SiHtml5 className="text-7xl text-orange-500" />, name: 'HTML' },
    { icon: <SiCss3 className="text-7xl text-blue-500" />, name: 'CSS' },
    { icon: <SiGithub className="text-7xl text-white" />, name: 'GitHub' },
  ];

  return (
    <div className="border-b border-t-neutral-800 pb-24">
         <motion.h1
    whileInView={{opacity: 1, y: 0}}
    initial={{opacity: 0, y: -100}}
    transition={{duration: 1.5}}
    className="my-20 text-center text-4xl">Languages</motion.h1>
  
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, index) => (
        <div key={index} className="rounded-2xl border-4 border-neutral-100 p-4 animate-pulse">
          {skill.icon}
          <p className="flex justify-center">{skill.name}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Skills;
