'use client'

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import {Text} from 'troika-three-text'

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <Text text = "A"/>
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='min-h-screen flex items-center justify-center absolute'>
      <div className=' w-screen h-screen'>
        <Canvas camera={{ position: [0, 0, 0] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </div>
  );
};

export default StarsCanvas;
