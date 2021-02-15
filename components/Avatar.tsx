import React from "react";
import styled from "styled-components";

import Body from "../assets/svgs/avatar-assets/Hoodie.svg";
import Head from "../assets/svgs/avatar-assets/Shaved-2.svg";
import Face from "../assets/svgs/avatar-assets/Calm.svg";

const AvatarCanvas = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
  }
  > svg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .avatar-head {
    height: 277px;
    width: 221px;
    bottom: 290px;
    transform: translate(-4rem);
    z-index: 2;
  }
  .avatar-face {
    height: 150px;
    width: 150px;
    z-index: 3;
    bottom: 375px;
    transform: translate(-25px, 1.5rem);
  }
  .avatar-body {
    width: 400px;
    height: 380px;
    bottom: -1.5rem;
    z-index: 1;
  }
`;

const Avatar = () => {
  return (
    <AvatarCanvas>
      <Head className="avatar-head" />
      <Face className="avatar-face" />
      <Body className="avatar-body" />
    </AvatarCanvas>
  );
};

export default Avatar;