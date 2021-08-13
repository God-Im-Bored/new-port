import React from "react";
import Particles from "react-tsparticles";
import styles from "./Landing.module.css";

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    // console.log(main);
  }

  particlesLoaded(container) {
    // console.log(container);
  }

  render() {
    return (
      <div>
        <div className={styles.particles}>
          <Particles
            id="tsparticles"
            init={this.particlesInit}
            loaded={this.particlesLoaded}
            options={{
              background: {
                color: "#232741",
                opacity: 1,
                size: "20%",
                position: "50% 50%",
              },
              backgroundMask: {
                composite: "destination-out",
                cover: {
                  value: "#fff",
                  opacity: 1,
                },
                enable: false,
              },
              fpsLimit: 60,
              duration: 0,
              detectRetina: true,
              fullScreen: {
                enable: false,
                zIndex: -2,
              },
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "repulse",
                  },
                  onHover: {
                    enable: true,
                    mode: "bubble",
                    parallax: {
                      enable: true,
                      force: 20,
                      smooth: 30,
                    },
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 250,
                    duration: 2,
                    opacity: 0,
                    size: 1,
                    mix: true,
                  },
                  bounce: {
                    distance: 200,
                  },
                  attract: {
                    distance: 200,
                    duration: 0.4,
                    easing: "ease-out-quad",
                    factor: 1,
                    maxSpeed: 50,
                    speed: 1,
                  },
                  connect: {
                    distance: 80,
                    links: {
                      opacity: 0.5,
                    },
                    radius: 60,
                  },
                  grab: {
                    distance: 400,
                    links: {
                      blink: true,
                      consent: true,
                      opacity: 1,
                    },
                  },
                  light: {
                    area: {
                      gradient: {
                        start: {
                          value: "#ffffff",
                        },
                        stop: {
                          value: "#000000",
                        },
                      },
                      radius: 1000,
                    },
                    shadow: {
                      color: {
                        value: "#000000",
                      },
                      length: 2000,
                    },
                  },
                  push: {
                    default: true,
                    quantity: 4,
                  },
                  remove: {
                    quantity: 2,
                  },
                  repulse: {
                    distance: 400,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                  },
                  slow: {
                    factor: 3,
                    radius: 200,
                  },
                  trail: {
                    delay: 1,
                    pauseOnStop: false,
                    quantity: 1,
                  },
                },
              },
              motion: {
                disable: true,
                reduce: {
                  factor: 4,
                  value: true,
                },
              },
              pauseOnBlur: true,
              pauseOnOutsideViewport: true,
              particles: {
                bounce: {
                  horizontal: {
                    random: {
                      enable: true,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                  vertical: {
                    random: {
                      enable: true,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                },
                collisions: {
                  bounce: {
                    horizontal: {
                      random: {
                        enable: true,
                        minimumValue: 0.1,
                      },
                      value: 1,
                    },
                    vertical: {
                      random: {
                        enable: true,
                        minimumValue: 0.1,
                      },
                      value: 1,
                    },
                  },
                  enable: true,
                  mode: "bounce",
                  overlap: {
                    enable: true,
                    retries: 0,
                  },
                },
                color: {
                  value: "#ffffff",
                  animation: {
                    h: {
                      count: 0,
                      enable: true,
                      offset: 0,
                      speed: 1,
                      sync: true,
                    },
                    s: {
                      coun: 0,
                      enable: true,
                      offset: 0,
                      speed: 1,
                      sync: true,
                    },
                    l: {
                      count: 0,
                      enable: true,
                      offset: 0,
                      speed: 1,
                      sync: true,
                    },
                  },
                },
                destroy: {
                  mode: "none",
                  split: {
                    count: 1,
                    factor: {
                      random: {
                        enable: true,
                        minimumValue: 0,
                      },
                      value: 3,
                    },
                    rate: {
                      random: {
                        enable: true,
                        minimumValue: 0,
                      },
                      value: {
                        min: 4,
                        max: 9,
                      },
                      sizeOffset: true,
                    },
                  },
                },
                move: {
                  angle: {
                    offset: 0,
                    value: 90,
                  },
                  attract: {
                    distance: 200,
                    enable: false,
                    rotate: {
                      x: 600,
                      y: 600,
                    },
                  },
                  decay: 0,
                  direction: "none",
                  drift: 0,
                  enable: true,
                  gravity: {
                    acceleration: "9.81",
                    enable: false,
                    inverse: false,
                    maxSpeed: ".05",
                  },
                  path: {
                    clamp: true,
                    delay: {
                      random: {
                        enable: false,
                        minimumValue: 0,
                      },
                      value: 0,
                    },
                    enable: false,
                  },
                  random: false,
                  size: false,
                  speed: 0.75,
                  outModes: {
                    defalut: "out",
                    bottom: "out",
                    left: "out",
                    right: "out",
                    top: "out",
                  },
                  spin: {
                    acceleration: 1,
                    enable: false,
                  },
                },
                number: {
                  density: {
                    enable: true,
                    area: 1000,
                    factor: 1000,
                  },
                  limit: 0,
                  value: 160,
                },
                opacity: {
                  random: {
                    enable: true,
                    minimumValue: 0.1,
                  },
                  value: {
                    min: 0,
                    max: 1,
                  },
                  animation: {
                    conut: 0,
                    enable: true,
                    speed: 1,
                    sync: true,
                    destroy: "none",
                    minimumValue: 0,
                    startValue: "random",
                  },
                  orbit: {
                    animation: {
                      count: 0,
                      enable: true,
                      speed: 1,
                      sync: false,
                    },
                    enable: true,
                    opacity: 1,
                    rotation: {
                      random: {
                        enable: false,
                        minimumValue: 0,
                      },
                      value: 45,
                    },
                    width: 1,
                  },
                  size: {
                    random: {
                      enable: true,
                      minimumValue: 0.1,
                    },
                    value: {
                      min: 1,
                      max: 3,
                    },
                    animation: {
                      count: 0,
                      enable: false,
                      speed: 4,
                      sync: true,
                      destroy: "none",
                      minimumValue: 0.3,
                      startValue: "random",
                    },
                  },
                },
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default Landing;
