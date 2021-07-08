import { GetServerSideProps } from "next";
import React from "react";
import { BlockMapType, NotionRenderer } from "react-notion";
import { config } from "../../config";
import { getBlogTable, getPageBlocks } from "../../core/blog";
import { toNotionImageUrl } from "../../core/notion";
import { Project } from "../../types/project";

interface ProjectDetailProp {
  project: Project;
  blocks: BlockMapType;
}

export const getServerSideProps: GetServerSideProps = async (req) => {
  const projects = await getBlogTable<Project>(config.notionProjectTableId);

  const { projectSlug } = req.query;
  const project = projects.find((p) => p.slug === projectSlug);

  if (!project?.id) {
    return {
      props: {},
      redirect: {
        destination: "/404",
      },
    };
  }

  const blocks = await getPageBlocks(project?.id);

  return {
    props: {
      project,
      blocks,
    },
  };
};

const ProjectDetailPage: React.FC<ProjectDetailProp> = ({
  project,
  blocks,
}) => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-4xl py-2 flex space-x-4 items-center">
          <div className="rounded-full h-10 w-10 bg-brand-700"></div>
          <span>{project.title}</span>
        </h2>
        <article className="flex-1 my-6">
          <NotionRenderer blockMap={blocks} mapImageUrl={toNotionImageUrl} />
        </article>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
