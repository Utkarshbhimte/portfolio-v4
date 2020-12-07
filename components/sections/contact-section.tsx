import React from "react";
import styled from "styled-components";

// icons
import GithubIcon from "../../assets/svgs/social-icons/github.svg";
import MediumIcon from "../../assets/svgs/social-icons/medium.svg";
import TwitterIcon from "../../assets/svgs/social-icons/twitter.svg";

const ContactContainer = styled.div`
  margin: 10rem 0;
  .social-wrapper {
    display: grid;
    grid-gap: 0.5rem;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    align-items: center;
  }
`;

const SocialIconButton = styled.a`
  height: 2.4rem;
  width: 2.4rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  line-height: 1rem;
  &:hover {
    background: var(--primary-color);
  }

  &:before {
    content: none;
    display: none;
  }
`;

const ContactScreen = () => {
  const redirectToMail = () => {
    window.open("mailto:workwithutkarsh@gmail.com?subject=Hey Utkarsh, I just checked your website");
  };
  return (
    <ContactContainer>
      <h1 className="font-medium text-4xl accent-heading">Let's Chat</h1>
      <p className="text-gray-600">Ping me If there is anything I can help you with</p>
      <button className="px-4 py-2 rounded-md bg-brand-500 hover:bg-brand-700 focus:bg-brand-700 transition-all duration-300 my-4" onClick={redirectToMail}>Ping Utkarsh</button>

      <div className="social-wrapper mt-6">
        <SocialIconButton
          target="_blank"
          href="https://github.com/Utkarshbhimte/"
        >
          <GithubIcon />
        </SocialIconButton>
        <SocialIconButton
          target="_blank"
          href="https://twitter.com/bhimtebhaisaab"
        >
          <TwitterIcon />
        </SocialIconButton>
      </div>
    </ContactContainer>
  );
};

export default ContactScreen;