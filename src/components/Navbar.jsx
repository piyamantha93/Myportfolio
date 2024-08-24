import { useNavigate } from "react-router-dom";
import logo from "../assets/piyamantha.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navba() {
  const navigate = useNavigate();

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center animate-pulse">
        <div className="border-2 border-black p-1 rounded-full">
          <div className="border-2 border-white p-1 rounded-full">
            <img className="mx- w-16 rounded-full" src={logo} alt="logo" />
          </div>
        </div>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <button
          onClick={() => navigate("/")}
          className="rounded text-white"
        >
          Home
        </button>

        <a
          href="http://linkedin.com/in/piyamanatha-weerasingha-36b1aa227"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/piyamantha93?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </nav>
  );
}

export default Navba;
