import React from "react";
import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";

import styled from "styled-components";

import configDark from "../config/particlesjs-config.js"; // JS file, không phải .json
import configLight from "../config/particlesjs-config-light";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticleComponent = ({ theme }) => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Box>
      <Particles
        init={particlesInit}
        options={theme === "light" ? configLight : configDark}
        style={{ position: "absolute", top: 0 }}
      />
    </Box>
  );
};

export default ParticleComponent;
