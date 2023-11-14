import { Footer } from '../shared/Footer';
import { Header } from '../shared/Header';

export const Home = () => {
  return (
    <main className="h-full md:px-16 px-6 md:py-10 py-6 flex flex-col justify-between text-sm">
      <Header></Header>
      <div className="overlay fixed inset-0 z-10 pointer-events-none transition-opacity duration-700 opacity-0 flex items-center justify-center text-green-0 uppercase font-bold">
        <div className="bg-green-0/20 mix-blend-screen absolute inset-0"></div>
        <span>Bugatti Is Coming;-;</span>
      </div>
      <div className="top fixed bg-black top-0 inset-x-0 h-[11%] z-20 -translate-y-full transition-transform duration-700"></div>
      <div className="bottom fixed bg-black bottom-0 inset-x-0 h-[11%] z-20 translate-y-full transition-transform duration-700"></div>
      <div className="app"></div>
      <Footer></Footer>
    </main>
  );
};
