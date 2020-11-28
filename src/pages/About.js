import React from "react";
import Container from "../components/container";
import Row from "../components/row";
import Col from "../components/column";

function About() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-12 midsection">
            <h2>About Me</h2>
            <Row>
              <Col size="sm-12">
                <img
                  className="img-fluid profile-pic float-left"
                  src={require("../images/raufun_pic.jpg")}
                  alt="my picture"
                />
                <div className="bio">
                <p>My name is Md Raufun Patoary. I am hard working and adaptable Full Stack Web Developer with a Certificate in Full Stack Web Development from Denver University. Main skills include HTML, CSS, JavaScript, jQuery, Ajax, and API. Enthusiastic about web development and possess the ability to learn quickly. Excited to leverage my ability to work both independently and as part of a team to develop game-changing websites and applications. Hands on experience in quality assurance and software testing of web-based applications and web service API testing to secure a position as software test engineer in a company where I can utilize my expertise knowledge and technical skills.</p>

                <p>One of my favorite things to do is visiting new places specially mountain and sea beach. I also like to play soccer, Cricket, and swiming.</p>

                  <p>
                    I am a lifelong learner and always looking to expand my
                    knowledge and skill set. I decided to become a coding
                    bootcamp student to learn full-stack development. Even if
                    I’m not the one doing development work, understanding the
                    front end, back end, web and software development process,
                    and developing well-rounded knowledge of data structures,
                    will greatly enrichen the ability with which I can
                    efficiently work with vendors, developers, and other
                    stakeholders to drive a project or process to the best
                    possible solutions.
                  </p>
                  <h5><p>For more information, please check out my <a href="https://drive.google.com/file/d/1bTEKcezanFRbLTFCKqnSHii0WoCkNerb/view?usp=sharing" target="_blank">resume!</a></p></h5>
                                    
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default About;
