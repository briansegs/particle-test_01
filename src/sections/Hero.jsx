import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles_1.json";
import avatar from "../avatar_03.png";

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section className="hero_section">
      <div className="hero_left">
        {init && <Particles options={particlesOptions} />}
        <div>
          <img src={avatar} className="Avatar" alt="avatar" />
        </div>
      </div>

      <div className="hero_right"></div>
    </section>
  );
};

export default Hero;
