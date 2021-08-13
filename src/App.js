import React from "react";
import {
  Landing,
  LandingText,
  LandingButton,
  Biography,
  Project,
  Contact,
} from "./components";
import styles from "./App.module.css";

class App extends React.Component {
  

 

  render() {
    
    return (
      <div>
        <div id="landing" className={styles.flex}>
          <Landing />
        </div>
        <LandingText />
        <LandingButton />
        <div id="biography">
          <Biography />
        </div>
        <div id="projects">
          <Project />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
