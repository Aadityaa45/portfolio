import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

// Ball component, where we use the `useTexture` hook inside the `Canvas`
const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]); // Using the `useTexture` hook inside the Canvas
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        {/* Apply decal texture if available */}
        <meshStandardMaterial 
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
       />
       <Decal 
       position={[0,0,1]}
       rotation={[2*Math.PI,0,6.25]}
       flatShading
       map={decal}
       />
       
       
      </mesh>
    </Float>
  );
};

// BallCanvas component that passes the `icon` prop to the Ball component
const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} /> {/* Pass the `icon` prop */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
