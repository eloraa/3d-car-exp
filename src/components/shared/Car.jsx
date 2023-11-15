/* eslint-disable react/no-unknown-property */
import { OrbitControls, PerspectiveCamera, useHelper } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { SpotLightHelper, TextureLoader } from 'three';
import { Ground } from './Ground';

export const Car = () => {
  const cubeRef = useRef();
  const cubeRef2 = useRef();
  useHelper(cubeRef, SpotLightHelper, 'blue');
  useHelper(cubeRef2, SpotLightHelper, 'red');

  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45}></OrbitControls>
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <spotLight ref={cubeRef} color={[0, 0, 0]} intensity={2.5} angle={0.6} penumbra={0.5} position={[5, 5, 0]} castShadow shadow-bias={-0.0001}></spotLight>
      <spotLight ref={cubeRef2} color={[.9, 0, 0]} intensity={2} angle={0.6} penumbra={0.5} position={[-5, 5, 0]} castShadow shadow-bias={-0.0001}></spotLight>
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[1, 1, 1]}></boxGeometry>
        <meshBasicMaterial color="red"></meshBasicMaterial>
      </mesh>
      <Ground></Ground>
    </>
  );
};
