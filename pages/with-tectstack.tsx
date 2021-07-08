import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { Footer } from "../components/sections/footer";
import { Post } from "../types/blog";
import { getBlogList, getBlogTable, getPageBlocks } from "../core/blog";
import { fetchRepos, Repo } from "../core/github";
import { config } from "../config";
import { Achievement } from "../types/achievement";
import { Project } from "../types/project";
import { getOpenGraphImage } from "../core/og-image";
import { SkillTabs } from "../components/sections/skills-section";
import { Content } from "../types/content";
import { ProjectThumbnail } from "../components/sections/project-thumbnail";
import ContactScreen from "../components/sections/contact-section";
import React from "react";
import PostThumbnail from "../components/sections/post-thumbnail";
import Avatar from "../components/Avatar";

interface AppProps {
  posts: Post[];
  achievements: Achievement[];
  projects: Project[];
  siteContent: Record<string, string>;
  // repos: {
  //   starredRepos: Repo[];
  //   contributedRepos: Repo[];
  // };
}

export const getStaticProps: GetStaticProps<AppProps> = async () => {
  const [
    projects,
    achievementsData,
    siteContentTableData,
    // { contributedRepos, starredRepos },
  ] = await Promise.all([
    getBlogTable<Project>(config.notionProjectTableId),
    getBlogTable<Omit<Achievement, "blockMap">>(
      config.notionAchievementTableId
    ),
    getBlogTable<Content>(config.notionPageContentTableId),
    // fetchRepos(config.githubUsername, config.githubToken),
  ]);

  const postResponse = await getBlogList();

  const achievements: Achievement[] = await Promise.all(
    achievementsData.map(async (a) => ({
      ...a,
      blockMap: await getPageBlocks(a.id),
    }))
  );

  const siteContent = siteContentTableData.reduce(
    (total, curr) => ({ ...total, [curr.key]: curr.value }),
    {}
  );

  return {
    props: {
      achievements,
      posts: postResponse.data.user.publication.posts.sort(
        (a, b) => a.coverImage.length - b.coverImage.length
      ),
      siteContent,
      projects: projects.filter((p) => p.published),
      // repos: {
      //   starredRepos,
      //   contributedRepos,
      // },
    },
    revalidate: 10,
  };
};

interface AboutUsWithSkillsProps {
  aboutMeContent: string;
  skills: string;
}
const AboutUsWithSkills: React.FC<AboutUsWithSkillsProps> = ({
  aboutMeContent,
  skills,
}) => (
  <div className="jsx-4207184168 mt-24">
    <h4 className="jsx-1374177001 jsx-4207184168 accent-heading text-4xl mb-4">
      About me
    </h4>
    <p className="jsx-947652483 max-w-md leading-7 text-gray-600">
      {aboutMeContent}
    </p>
    <SkillTabs skills={skills} />
  </div>
);

const IndexPage = ({
  achievements,
  posts,
  projects,
  siteContent,
}: AppProps) => (
  <>
    <NextSeo
      title={`${config.name} | ${config.subtitle}`}
      titleTemplate={"%s"}
      openGraph={{
        images: [getOpenGraphImage(config.name)],
      }}
      twitter={{
        handle: `@${config.twitterbUsername}`,
        cardType: "summary_large_image",
      }}
      description="Hey I'm Timo! I design and build digital products. Illustrating and film making are also my passion."
    />

    <div className="min-h-screen relative">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-3  grid-cols-1 items-start">
          <div className="min-h-screen col-start-1 col-end-3">
            <div className="h-screen relative">
              <div style={{ bottom: "3rem", left: 0 }} className="absolute">
                <div className="subtext">Hey there</div>
                <h2 className="jsx-4207184168 accent-heading mb-0 text-6xl">
                  I am Utkarsh
                </h2>
                {/* <p className="max-w-md leading-7 text-gray-600">{siteContent.about_me_content}</p> */}
              </div>
            </div>
            <AboutUsWithSkills
              aboutMeContent={siteContent.about_me_content}
              skills={siteContent.skills}
            />
          </div>
          <div className="avatar-wrapper md:block hidden relative">
            <div
              className="bg-brand-500 hover:bg-brand-700 rounded-3xl transition-all duration-300 ease-in-out absolute"
              style={{
                height: "calc(100vh - 5rem - 3rem)",
                top: "5rem",
                width: "-webkit-fill-available",
              }}
            >
              <Avatar />
            </div>
          </div>
        </div>

        {/* Project Section */}
        <div className="my-16">
          <h4 className="jsx-1374177001 accent-heading text-4xl">
            My Products
          </h4>
          <p className="mb-4 leading-7 text-gray-600">
            {siteContent.experience_subtitle}
          </p>

          <div className="jsx-1374177001 grid gap-12 pt-0">
            {projects.map((project) => (
              <ProjectThumbnail key={project.slug} project={project} />
            ))}
          </div>
        </div>

        <div className="my-16">
          <h4 className="jsx-1374177001 accent-heading text-4xl mb-4">
            Blog Posts
          </h4>

          <div className="jsx-1374177001 grid md:grid-cols-2 gap-12 pt-0">
            {posts.map((post) => (
              <PostThumbnail post={post} key={post.slug} />
            ))}
          </div>
        </div>

        <ContactScreen />
      </div>
    </div>

    <style jsx>
      {`
        .avatar-wrapper {
          height: 150vh;
        }

        .avatar {
          position: sticky;
          top: 13rem;
          right: 0px;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 2rem;
        }
      `}
    </style>
    <Footer />
  </>
);

export default IndexPage;
