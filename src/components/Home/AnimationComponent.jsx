"use client";
// src/components/Home/AnimationComponent.jsx
import React from "react";
import Rive from "@rive-app/react-canvas";
import "./home.css";

const AnimationComponent = () => {
  return (
    <Rive
      className="canvasHeight"
      src="/images/home/home_hero.riv"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default AnimationComponent;
