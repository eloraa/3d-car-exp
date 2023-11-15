import { Suspense, useEffect, useRef } from 'react';
import { Footer } from '../shared/Footer';
import { Header } from '../shared/Header';
import { Canvas, useThree } from '@react-three/fiber';
import { Car } from '../shared/Car';

function AdaptivePixelRatio() {
  const current = useThree(state => state.performance.current);
  const setPixelRatio = useThree(state => state.setDpr);
  useEffect(() => {
    setPixelRatio(window.devicePixelRatio * current); // window.devicePixelRatio * current
  }, [current, setPixelRatio]);
  return null;
}
export const Home = () => {
  const materialRef = useRef();

  const handleMouseDown = () => {
    // Set mouseValue to vec2(6.0, 6.0) when mouse is down
    if (materialRef.current) {
      materialRef.current.uniforms.mouseValue.value.set(6.0, 6.0);
    }
  };

  const handleMouseUp = () => {
    // Set mouseValue back to vec2(0.0, 0.0) when mouse is up
    if (materialRef.current) {
      materialRef.current.uniforms.mouseValue.value.set(0.0, 0.0);
    }
  };
  return (
    <main className="h-full md:px-16 px-6 md:py-10 py-6 flex flex-col justify-between text-sm">
      <Header></Header>
      <div className="top fixed bg-black top-0 inset-x-0 h-[11%] z-50 -translate-y-full transition-transform duration-700"></div>
      <div className="bottom fixed bg-black bottom-0 inset-x-0 h-[11%] z-50 translate-y-full transition-transform duration-700"></div>

      <div className="app fixed inset-0">
        <Suspense fallback={null}>
          <Canvas stencil="false" depth="false" shadows mode="concurrent" performance="high-performance" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            <AdaptivePixelRatio></AdaptivePixelRatio>
            <Car></Car>
          </Canvas>
        </Suspense>
      </div>
      <Footer></Footer>
    </main>
  );
};
