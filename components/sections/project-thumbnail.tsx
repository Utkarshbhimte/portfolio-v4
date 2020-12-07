import { Project } from "../../types/project";

interface ProjectThumbnailProps {
  project: Project;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ project }) => {
  return (
    <div>
      <h4 className="text-xl font-medium">{project.title}</h4>
      <p className="text-gray-600">{project.tagline}</p>
    </div>
  );
};

