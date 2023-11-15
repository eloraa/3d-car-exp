import { Suspense } from 'react';
import { Footer } from '../shared/Footer';
import { Header } from '../shared/Header';
import { Canvas } from '@react-three/fiber';
import { Car } from '../shared/Car';

export const Home = () => {
  return (
    <main className="h-full md:px-16 px-6 md:py-10 py-6 flex flex-col justify-between text-sm">
      <Header></Header>
      <div className="top fixed bg-black top-0 inset-x-0 h-[11%] z-50 -translate-y-full transition-transform duration-700"></div>
      <div className="bottom fixed bg-black bottom-0 inset-x-0 h-[11%] z-50 translate-y-full transition-transform duration-700"></div>

      <div className="app fixed inset-0">
        <Suspense fallback={null}>
          <Canvas shadows>
            <Car></Car>
          </Canvas>
        </Suspense>
      </div>
      <Footer></Footer>
    </main>
  );
};
