import React, { Component } from "react";
import { Card, CardTitle, Row, Chip } from "react-materialize";

class ProjectCard extends Component {
  render() {
    let proj = { ...this.props.project };
    console.log(proj);
    return (
      <Card
        header={<CardTitle reveal image={proj.img} waves="light" />}
        title={proj.title}
        reveal={
          <div>
            <p>{proj.description}</p>
            <div>
              <div className="launch-icon">
                <a href={proj.liveUrl} target="_blank">
                  <img src="../../img/heroku.png" />
                  <p>DEMO</p>
                </a>
              </div>
              <div className="launch-icon">
                <a href={proj.gitHub} target="_blank">
                  <img src="../../img/github.png"  />
                  <p>REPO</p>
                </a>
              </div>
            </div>
          </div>
        }
      >
      <Row>
        {proj.tags.length
        ? proj.tags.map(tag => (
            <Chip close={false}>
              {tag}
            </Chip>
        ))
        : null
        }
        </Row>
      </Card>
    );
  }
}

export default ProjectCard;
