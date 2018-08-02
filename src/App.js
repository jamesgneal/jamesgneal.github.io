import React, { Component } from "react";
import firebase from "./utils/firebase.js";
import { Navbar, NavItem, Row, Col, Footer } from "react-materialize";
import ProjectCard from "./components/ProjectCard/project-card";
import Contact from "./components/Contact/contact";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    const projectsRef = firebase.database().ref("projects");
    projectsRef.on("value", snapshot => {
      let projects = snapshot.val();
      let newState = [];
      for (let proj in projects) {
        // Convert string of tags to an array of tags
        let tagStr = projects[proj].tags;
        console.log(tagStr);
        let tagArr = tagStr.split(",");
        newState.push({
          title: projects[proj].title,
          description: projects[proj].description,
          img: projects[proj].img,
          tags: tagArr,
          gitHub: projects[proj].gitHub,
          liveUrl: projects[proj].liveUrl
        });
      }
      this.setState({
        projects: newState
      });
    });
  }

  render() {
    let headshot =
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d3899.appspot.com/o/grahamneal_profile_web_color_sm.jpg?alt=media&token=0a5160dd-7373-4cec-b45a-08241c9bc63a";

    return (
      <div className="App">
        <Navbar brand="Graham Neal" right fixed>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem>
            <Contact />
          </NavItem>
        </Navbar>
        <header className="App-header" id="about">
          <div className="valign-wrapper container">
            <Row>
              <Col s={12}>
                <img
                  src={headshot}
                  className="circle responsive-img"
                  id="headshot"
                />
              </Col>
              <Col s={12}>
                <div className="center-align">
                  <h4>Hello</h4>
                  <p>
                    I am a full stack developer living in Richmond, Virginia. I
                    have worked in various connections to the tech world, and
                    recently have pursued a deeper knowledge of programming
                    languages on the web. Mostly, I focus on Javascript
                    libraries and frameworks.
                  </p>
                  <p>
                    Away from work, my wife and I spend our free time trying out
                    new restaurants in town or traveling abroad. I recently took
                    up triathlon as a way to dispose of cash and time.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </header>
        <section id="projects">
          <div className="container">
            <Row>
              {this.state.projects.length
                ? this.state.projects.map(proj => (
                    <Col l={8} offset="l2" key={proj.title}>
                      <ProjectCard project={proj} />
                    </Col>
                  ))
                : null}
            </Row>
          </div>
        </section>
        <Footer
          copyrights="&copy; Copyright 2018 Graham Neal"
          className="footer"
        >
          <Contact />
        </Footer>
      </div>
    );
  }
}

export default App;
