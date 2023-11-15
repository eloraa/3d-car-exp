/* eslint-disable react/no-unknown-property */
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Ground } from './Ground';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect } from 'react';
import { Mesh } from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

export const Car = () => {
  const gltf = useLoader(GLTFLoader, '/assets/models/bugatti/bugatti-v1.glb', loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/jsm/libs/draco/');
    loader.setDRACOLoader(dracoLoader);
  });

  useEffect(() => {
    gltf.scene.scale.set(0.5, 0.5, 0.5);
    gltf.scene.position.set(0, 0.045, 0);
    gltf.scene.rotation.set(0, -0.18, 0);
    gltf.scene.traverse(object => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 2;
        object.material.metalness = 0.6;
        object.material.roughness = 0.05;
      }
    });
  }, [gltf]);

  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} maxDistance={12} minDistance={6} enablePan={false}></OrbitControls>
      <PerspectiveCamera makeDefault fov={50} position={[2, 2, 8]} />
      <CubeCamera resolution={64}>
        {texture => (
          <>
            <Environment map={texture} />
            <primitive object={gltf.scene} />
          </>
        )}
      </CubeCamera>
      <ambientLight color={0xf0e0d6} intensity={1.8} angle={0.6} penumbra={0.5} position={[5, 5, 0]} />
      <Ground></Ground>
      {Array.from({ length: 13 }).map((v, i) => (
        <mesh position={[0, 0, -Math.abs((i - 7) * 3.5 + (0.4 % 3.5) * 2) + 10]} castShadow receiveShadow key={i}>
          <torusGeometry args={[3.5, 0.05, 10, 100]} />
          <meshStandardMaterial emissive={[4, 0.1, 0.4]} color={[0, 1, 1]} />
        </mesh>
      ))}

      <EffectComposer>
        <Bloom intensity={0.35} blendFunction={BlendFunction.ADD} width={300} height={300} kernelSize={5} luminanceThreshold={0.65} luminanceSmoothing={0.025} />
        <DepthOfField focusDistance={0} focalLength={0.344} bokehScale={6} height={19.26} blur={true} />
        <Noise opacity={0.025} />
        <Vignette
          offset={0.4}
          darkness={.8}
          eskil={false}
          blendFunction={BlendFunction.NORMAL}
        />
      </EffectComposer>
    </>
  );
};
