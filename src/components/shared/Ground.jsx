/* eslint-disable react/no-unknown-property */
import { MeshReflectorMaterial } from '@react-three/drei';

export function Ground() {

  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[30, 30]}></planeGeometry>
      <MeshReflectorMaterial
        envMapIntensity={0}
        dithering={true}
        color={[0.015, 0.015, 0.025]}
        roughness={0.7}
        blur={[1000, 400]}
        mixBlur={30}
        mixStrength={80}
        mixContrast={1}
        resolution={256} 
        mirror={0}
        depthScale={0.01}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={0.05}
        debug={0}
        reflectorOffset={0.2}
      />
    </mesh>
  );
}
