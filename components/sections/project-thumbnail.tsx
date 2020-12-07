import React from "react";
import { Project } from "../../types/project";
import { SkillTab } from "./skills-section"

interface ProjectThumbnailProps {
  project: Project;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ project }) => {
  return (
    <div className="md:grid gap-12 md:grid-cols-5 items-center max-w-full">
      <img className="rounded-lg col-start-1 col-end-4 border border-gray-300 max-w-xs md:max-w-full mb-8 md:mb-0" src={project.banner[0].url} alt="banner" />
      <div className="col-start-4 col-end-6 max-w-full">
        <img src={project.logo[0].url} alt="logo" className="h-8 md:h-12 mb-4" />
        <p className="text-gray-600">{project.tagline}</p>
        <div className="text-sm mt-2 mb-2 md:mb-8 inline-wrap max-w-sm">
          {project.tech_stack.map(a => <SkillTab key={a}>{a}</SkillTab>)}
        </div>

        {project.ph_link && <a className="prevent-underline" href={`${project.ph_link}?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-${project.slug}`} target="_blank">
          <img src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${project.ph_post_id || ''}&theme=light`}
            style={{
              width: 250, height: 54
            }}
            width="250" height="54" />
        </a>}
      </div>
    </div>
  );
};

