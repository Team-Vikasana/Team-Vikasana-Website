import React from 'react';
import './firstpg.css'; 



const FirstPage = () => {
  
  return (
      <section id="about" className="app">
          <div className="background-text">
              <span className="hidden-text">VIKASANA</span>
          </div>

          <div className="content">
              <div className="header">
                  <h1>
                      <span>A RESEARCH AND DEVELOPMENT UNIT</span>
                  </h1>
                  <h2>
                      <span className="text">WHERE</span>
                      <span className="curiosity">CURIOSITY</span>
                      <br />
                      <span className="text">MEETS</span>
                      <span className="creation">CREATION</span>
                      <span className="full-stop">.</span>
                  </h2>
              </div>

              <div className="vision-mission font-altone">
                  <div className="vision">
                      <h3>Vision</h3>
                      <p>
                          "To inspire a community of tech enthusiasts driven to
                          innovate, collaborate, and develop future-ready skills
                          for real-world challenges. We strive to create a
                          culture of continuous learning and exploration,
                          empowering students."
                      </p>
                  </div>

                  <div className="mission">
                      <h3>Mission</h3>
                      <p>
                          "To bridge the gap between academics and industry by
                          offering engaging events, seminars, and workshops. We
                          aim to upskill students, foster collaboration, and
                          empower them to excel in the evolving technology
                          landscape."
                      </p>
                  </div>
              </div>

              <div className="footer font-altone">
                  <div className="logo">
                      {/* <img src="/images/logo.svg" alt="Logo" /> */}
                      <img src="/images/VikasanaIcon.svg" alt="logo1" />
                  </div>
                  <div className="w-full">
                      <p>Incubated at Presidency Launchpad</p>
                      <p>Formed at Presidency University</p>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default FirstPage;
