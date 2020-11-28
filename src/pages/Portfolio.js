import React from "react";
import Container from "../components/container";
import Row from "../components/row";
import Project from "../components/projects";

function Portfolio() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-12 midsection">
            <h2>Portfolio</h2>
            <Row>
              <Project
                name="Bill Boards"
                imgPath={require("../images/billboard.png")}
                linkDeployed="https://sleepy-eyrie-55325.herokuapp.com/"
                linkGithub="https://github.com/vichrist/BillBoards"
              />
              <Project
                name="Weather Dashboard"
                imgPath={require("../images/weather.png")}
                linkDeployed="https://raufun05.github.io/weather-dashboard/"
                linkGithub="https://github.com/raufun05/weather-dashboard"
              />
              <Project
                name="Eatda Burger"
                imgPath={require("../images/burgerapp.png")}
                linkDeployed="https://protected-lowlands-61580.herokuapp.com/"
                linkGithub="https://github.com/raufun05/Node-Express-Handlebars"
              />
            </Row>
            <Row>
              <Project
                name="Note Taker"
                imgPath={require("../images/note_taker.png")}
                linkDeployed="https://serene-shelf-61975.herokuapp.com/"
                linkGithub="https://github.com/raufun05/Note-Taker"
              />
              <Project
                name="Fitness Tracker"
                imgPath={require("../images/fitness_tracker.png")}
                linkDeployed="https://floating-dawn-36475.herokuapp.com/"
                linkGithub="https://github.com/raufun05/workout-tracker"
              />
              <Project
                name="City Sidekick"
                imgPath={require("../images/City_Sidekick.png")}
                linkDeployed="https://johngarcia144.github.io/city-sidekick/"
                linkGithub="https://github.com/johngarcia144/city-sidekick"
              />
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default Portfolio;
