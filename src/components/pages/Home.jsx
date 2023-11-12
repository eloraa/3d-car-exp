import { Footer } from "../shared/Footer";
import { Header } from "../shared/Header";

export const Home = () => {

  return (
    <main className="h-full md:px-16 px-6 md:py-10 py-6 flex flex-col justify-between text-sm">
      <Header></Header>
      <div className="app"></div>
      <Footer></Footer>
    </main>
  );
};
