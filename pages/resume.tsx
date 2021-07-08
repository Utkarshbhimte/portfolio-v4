import React from "react";
import Image from "next/image";
import Head from "next/head";
import styled from "styled-components";
import { NextPage } from "next";

// import "../styles/resume.css";

import GithubIcon from "../assets/svgs/social-icons/github.svg";
import LinkedInIcon from "../assets/svgs/social-icons/linkedin.svg";
import TwitterIcon from "../assets/svgs/social-icons/twitter.svg";
import BlogIcon from "../assets/svgs/social-icons/book.svg";
import DownloadIcon from "../assets/svgs/social-icons/download.svg";
import ExperienceBox from "../components/sections/experience-box";

const Container = styled.div`
  line-height: 1.8rem;
  section {
    @apply p-8 bg-white rounded-lg shadow-lg;
  }

  .section-heading {
    @apply text-base mb-4 text-blue-700 font-semibold;
  }

  @media (max-width: 700px) {
    .page-grid {
      @apply grid-cols-3;
    }
  }

  .header-section {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  .experience-section {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .highlight-section {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .social-link {
    max-width: 1rem;
    a {
      max-width: 1rem;
    }
  }

  .skills-section {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
    grid-auto-rows: min-content;
  }

  @media (max-width: 700px) {
    .skills-section {
      grid-column-start: 1;
      grid-row-start: 4;
      grid-column-end: 4;
    }
  }

  p {
    @apply text-gray-600 text-sm;
  }

  a {
    @apply text-blue-700 underline;
  }

  ul {
    list-style: "👉";
    @apply grid gap-2;
  }

  ul li {
    margin-left: 1rem;
    padding-left: 1rem;
  }

  .avoid-page-break {
    page-break-inside: avoid;
  }

  @media print {
    /* styles here */

    .pdf-download-btn {
      display: none;
    }

    section {
      @apply p-0 bg-white shadow-none border-gray-500;
    }
  }
`;

const ResumePage: NextPage = () => {
  const handlePrintButtonClick = () => {
    window.print();
  };
  return (
    <Container className="py-12">
      <Head>
        <title>Utkarsh Bhimte's Resume</title>
      </Head>
      <div className="container mx-auto px-6 md:px-0">
        <div className="page-grid grid gap-4 md:grid-cols-3">
          <section className="header-section flex justify-between items-center mb-12 mt-10 col-start-1 col-end-4">
            <div className="flex items-center">
              <Image
                src="/profile-photo.jpg"
                alt="Picture of the developer"
                height={100}
                width={100}
                className="rounded-full"
              />
              <div className="ml-6">
                <h3 className="text-xl font-medium">Utkarsh Bhimte</h3>
                <p className="text-gray-600">Senior Software Developer</p>
                <a className="text-sm" href="mailto:workwithutkarsh@gmail.com">
                  workwithutkarsh@gmail.com
                </a>
              </div>
            </div>
            <div className="grid items-center gap-12 md:grid-cols-5 grid-cols-4 mt-6 md:mt-0 ">
              <a
                target="_blank"
                rel="noreferrer"
                className="social-link"
                href="https://github.com/utkarshbhimte/"
              >
                <GithubIcon />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="social-link"
                href="https://www.linkedin.com/in/utkarsh-bhimte-9321a710a/"
              >
                <LinkedInIcon />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="social-link"
                href="https://twitter.com/BhimteBhaisaab"
              >
                <TwitterIcon />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="social-link"
                href="http://blog.workofutkarsh.com/"
              >
                <BlogIcon />
              </a>
              <a
                className="social-link pdf-download-btn"
                onClick={handlePrintButtonClick}
              >
                <DownloadIcon />
              </a>
            </div>
          </section>

          <section className="section-heading font-medium text-2xl mb-5  col-start-1 col-end-3">
            <h3 className="section-heading font-medium text-2xl mb-4">
              Resume Highlights
            </h3>
            <ul className="text-sm text-gray-600">
              <li>
                Built a CRM from scratch to scale with a robust native document
                editor
              </li>

              <li>
                Single-handledly built and architected ABAC(Attribute based
                access control) powered dashboard with form field level access
                modularity along with full domain level whitelabelling
              </li>

              <li>
                Built and shipped{" "}
                <a
                  href="https://www.producthunt.com/@utkarsh_bhimte/made"
                  target="_blank"
                  rel="noopener"
                >
                  7 products
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="experience-section mt-12 my-12 row-start-3 col-end-3">
            <h3 className="section-heading pb-0 font-medium text-2xl mb-4">
              Experience
            </h3>
            <div className="grid gap-10">
              <ExperienceBox
                companyName="Sr Frontend Developer, Zomentum"
                fromDate={new Date(2019, 2, 1)}
                active
                details={
                  <span>
                    Zomentum is a all-in-one solution for MSPs to manage their
                    sales seamlessly, currently grown to $500,000.00 MRR
                  </span>
                }
                toDate={new Date()}
              >
                <ul>
                  <li>
                    Started as the first developer to the FE codebase,
                    responsible for improving architecture, mentor the team and
                    build complex features
                  </li>
                  <li>
                    Buit a feature-rich robust document builder in React with
                    interactive blocks, also making it performant enough to
                    support long documents.
                  </li>
                  <li>
                    Have worked with the core team to architect and build a
                    fully modularized Reports module which supports multiple
                    chart types
                  </li>
                  <li>
                    Have taught and trained developers to start contrbuting to
                    the FE codebase.
                  </li>
                </ul>
              </ExperienceBox>
              <ExperienceBox
                companyName="Frontend Developer , GetMyParking"
                fromDate={new Date(2018, 5, 1)}
                toDate={new Date(2019, 2, 31)}
                details={
                  <span>
                    Get My Parking is a Digital Parking Platform that integrates
                    any parking equipment and connects it to mobile and cloud
                    for a standardized seamless experience
                  </span>
                }
              >
                <ul>
                  <li>
                    Solo built a dynamic, modular, Attribute-Based Access
                    Controlled Robust dashboard for various operations and
                    analytics features using ReactJS, used to manage 1.5M user
                    accounts, exapanding across India, US and Europe.
                  </li>
                  <li>
                    Core-contributor to a web based dashboard console which can
                    be deployed to a RaspberryPi and can shows realtime parking
                    data and configure access management, providing hassle-free
                    parking revenue management, deployed to 50+ sites across US
                    and Europe.
                  </li>
                  <li>
                    Organized multiple React workshops to grow the Frontend Team
                    by 10+ developers
                  </li>
                </ul>
              </ExperienceBox>
              <ExperienceBox
                companyName="Web Developer Freelancer, Wishfie"
                fromDate={new Date(2018, 2, 1)}
                toDate={new Date(2018, 5, 31)}
                details={
                  <span>
                    Wishfie empowers people to share their opinions on trending
                    news through their mobile cameras
                  </span>
                }
              >
                <ul>
                  <li>
                    Solo built a server-side rendered video based social webapp
                    using NextJS scaled upto 20,000+ users.
                  </li>
                  <li>
                    Implemented best practices for SEO optimization like dynamic
                    sitemap generation
                  </li>
                  <li>
                    Built a feature like story-like video player interaction in
                    React
                  </li>
                </ul>
              </ExperienceBox>

              <ExperienceBox
                companyName="Frontend Web Developer , Offrd"
                fromDate={new Date(2017, 1, 1)}
                toDate={new Date(2018, 2, 31)}
                details={
                  <span>
                    Offrd is a hiring platform which enables people to get hired
                    in high growth companies for business roles by solving
                    challenges
                  </span>
                }
              >
                <ul>
                  <li>
                    Core Contributor to the FE codebase of a hiring platform
                    with Rich text editing and video upload.
                  </li>
                  <li>
                    Built dashbaord for internal to manage content across the
                    webapp.
                  </li>
                </ul>
              </ExperienceBox>
              <ExperienceBox
                companyName="Frontend Developer Intern, Udacity"
                fromDate={new Date(2016, 10, 1)}
                toDate={new Date(2017, 1, 28)}
                details={
                  <span>
                    Udacity is a Edtech Startup providing courses taught by
                    industry pros from Google, FB, and more.
                  </span>
                }
              >
                <ul>
                  <li>
                    Was responsible for delivering all the Frontend requirement
                    from the BD team, including new campaign pages and custom
                    onboarding experiences
                  </li>
                  <li>
                    Worked on redesigning for the Indian subdomain of the
                    Udacity website according to the new design guide
                  </li>
                  <li>
                    Improved developer experience by configuring gulp for SASS
                    hot reloading, etc
                  </li>
                </ul>
              </ExperienceBox>
            </div>
          </section>

          {/* <section className="my-12">
            <h3 className="section-heading mb-4 font-medium text-2xl">Contact</h3>
            <div>
              <span>Email: </span>
              <a href="mailto:workwithutkarsh@gmail.com">
                workwithutkarsh@gmail.com
                </a>
            </div>
          </section> */}
          <section className="row-start-2 col-start-3 row-end-5">
            <h3 className="section-heading mb-4 font-medium text-2xl">
              Skills
            </h3>

            <ul className="grid gap-4 text-sm text-gray-600">
              <li>
                <span className="font-semibold">Languages:</span> Javascript,
                Python, Rust, Typescript
              </li>
              <li>
                <span className="font-semibold">Frontend:</span> React, Redux,
                Chrome Extension, Svelte, PWA, GatsbyJS, NextJS, Framer Motion,
                GraphQL, React Query, a11y, TailwindCSS, EmotionJS,
                StyledComponents, Bootstrap, Material UI, Ant Design
              </li>
              <li>
                <span className="font-semibold">Backend:</span> NodeJS,
                ExpressJS, Web Sockets
              </li>
              <li>
                <span className="font-semibold">Databases:</span> MongoDB
              </li>
              <li>
                <span className="font-semibold">Cloud:</span> AWS(EBS, S3, EC2
                DynamoDB, CloudWatch, Route 53, Lambda), Heroku, Firebase
                Firebase, Netlify, Vercel
              </li>
              <li>
                <span className="font-semibold">Version Control:</span> Git
              </li>
              <li>
                <span className="font-semibold">Testing:</span> React testing
                library, Cypress
              </li>
              <li>
                <span className="font-semibold">CI/CD:</span> Jenkins, Github
                Actions
              </li>
              <li>
                <span className="font-semibold">Data Science:</span> NumPy,
                Conda, Basic Data Modelling
              </li>
              <li>
                <span className="font-semibold">Management:</span> Jira, Asana,
                Github Projects
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default ResumePage;
