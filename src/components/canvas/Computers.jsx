import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("./planet/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="white" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.42}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.1 : 2.70}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, 2.5]}
        rotation={[-0.01, -0.2, -0.01]}
      
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
const mediaQuery = window.matchMedia('(max-width:500)')
setIsMobile(mediaQuery.matches);

const handleMediaQueryChange = (event) => {
 setIsMobile(event,matches);
}

mediaQuery.addEventListener("change", handleMediaQueryChange);

return () => {
  mediaQuery.removeEventListener('change', handleMediaQueryChange);
}

  }, [])
  
  return (
    <Canvas
    
      frameloop="demand"
      shadows
      camera={{ position: [60, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  );
}

export default ComputersCanvas;
