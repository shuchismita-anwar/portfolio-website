"use client";

interface Props {
  title: string;
  text: string;
  link: string;
  image?: string; // Make image optional
}

const ProjectCard = ({ title, text, link, image }: Props) => {
  return (
    <div className="project-card bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      {image && (
        <img src={image} alt={title} className="project-image w-full h-40 object-cover rounded-md mb-4" />
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{text}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Learn more
      </a>
    </div>
  );
};

export default ProjectCard;
