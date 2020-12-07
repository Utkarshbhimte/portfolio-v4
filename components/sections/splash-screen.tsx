import React from "react";

const SplashScreen = () => {
  return (
    <div className="splash-screen-section">
      <div className="container mx-auto">
        <div className="splash-screen-grid">
          <div>
            <div className="splash-screen-text">
              <span className="greet-subtext">Hey there</span>
              <h1>I am Utkarsh</h1>
            </div>

            <div className="about-me-text">
              <h1>About me</h1>
              <p>
                I am a Fullstack Web developer based out of Bangalore with 3
                years in experience, passionate about shipping ideas to scale
                and helping others with their developer journeys.
              </p>
              {/* <SkillTabs skills={skills} /> */}
            </div>
          </div>

          <div className="avatar-wrapper">
          </div>
        </div>
      </div>
      <style jsx>{`
        .splash-screen-section {
          margin: 5rem 0;
          display: grid;
          place-items: center;
          grid-gap: 2rem;

          .greet-subtext {
            font-size: 0.8rem;
            letter-spacing: 2px;
            margin-bottom: 0.5rem;
            display: block;
            text-transform: uppercase;
            opacity: 0.6;
          }

          h1 {
            letter-spacing: 2px;
          }
        }

        .splash-screen-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          grid-gap: 1rem;
          justify-content: space-between;
          position: relative;
          max-width: 100%;

          @media only screen and (max-width: 600px) {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
