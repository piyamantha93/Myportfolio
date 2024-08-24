import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS } from "../constants";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-8">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-purple-200 mb-4">{project.details}</p>
      <div className="mb-4">
        <iframe
          width="560"
          height="315"
          src={project.link}
          title={project.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h1 className="text-2xl font-bold mb-4 mt-4">Key Features</h1>
      </div>

      <div className="mb-8">
        {project.KeyFeatures.map((Kf, index) => (
          <span
            key={index}
            className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
          >
            {Kf}
          </span>
        ))}
      </div>


      <div className="mb-8">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
          >
            {tech}
          </span>
        ))}
      </div>
      <button
        onClick={() => navigate(-1)}
        className="mt-2 mb-4 rounded text-white hover:bg-purple-600"
      >
        Back to Projects
      </button>
    </div>
  );
};

export default Details;
