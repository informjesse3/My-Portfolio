import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("./bmw/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="white" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.42}
        penumbra={6}
        intensity={100}
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
  const [active, setActive] = React.useState(true)

  function handleActive(){
    setActive(true)
  }
   function handleInActive() {
     setActive(false);
   }
  
  return (
    <>
      <Canvas
        frameloop="demand"
        shadows={true}
        camera={{ position: [60, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate={active}
            enableZoom={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
      <div className="absolute top-[30%] left-10 flex gap-1">
        <button className="bg-gray-300 p-1 rounded px-4" onClick={handleActive}>
          Activate
        </button>
        <button
          className="bg-gray-400 p-1 rounded px-3 text-gray-700"
          onClick={handleInActive}
        >
          Deactivate
        </button>
      </div>
    </>
  );
}

export default ComputersCanvas;
