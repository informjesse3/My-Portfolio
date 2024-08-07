import React from "react";
import { Html, useProgress } from "@react-three/drei";
import "./Spinner1.css";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p style={{fontSize:14, color:'#000', fontWeight:800, marginTop:40}}>{progress.toFixed(2)}%</p>
\
    </Html>
  );
};

export default Loader;
