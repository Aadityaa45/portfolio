import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const { scene } = useGLTF('/portfolio/desktop_pc/scene.gltf');

  return (
    <mesh>
      {/* Lighting Setup */}
      <hemisphereLight intensity={1.5} groundColor="black" position={[0, 10, 0]} />
      <pointLight intensity={8} position={[5, 7, 5]} />
      <spotLight 
        position={[-20, 50, 10]} 
        angle={0.3} 
        penumbra={1} 
        intensity={2} 
        castShadow 
        shadow-mapSize={2048}
      />
      
      {/* 3D Model Adjustments */}
      <primitive
        object={scene}
        scale={1.5}  // **Balanced Size**
        position={[0, -1.2, -2]}  // **Adjusted for Centering**
        rotation={[0, 0.2, 0]}  // **Better Viewing Angle**
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [12, 4, 18], fov: 40 }}  // **Optimal Zoom**
      gl={{ preserveDrawingBuffer: true }}
      style={{ height: "75vh", width: "100vw" }} // **Takes up a good portion but not full screen**
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 1.4} 
          minPolarAngle={Math.PI / 3.2}  
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
