import React, { Suspense } from 'react';
import { Circle, Html, OrbitControls, useProgress } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


function Loader() {
  const { progress } = useProgress()
  console.log(progress)
  return <Html center>{progress} % loaded</Html>
}

const Scene = () => {
  const gltf = useLoader(GLTFLoader, 'https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/75e7d8b5-5b3e-4918-aead-d1a30bc2c5b3.glb')

  return (
    <Suspense fallback={<Loader />}>
      <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
        <directionalLight
          position={[-1.3, 6.0, 4.4]}
          castShadow
          intensity={Math.PI * 1}
        />
        <primitive
          object={gltf.scene}
          position={[0, 1, 0]}
          children-0-castShadow
        />
        <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
          <meshStandardMaterial />
        </Circle>
        <OrbitControls target={[0, 1, 0]} />
        <axesHelper args={[5]} />
        {/* <Stats /> */}
      </Canvas>
    </Suspense>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div style={{ width: '100vw', height: '100vh' }}>
        <Scene />
      </div>
    </div>
  );
}

export default App;

