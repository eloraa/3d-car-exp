import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { About } from './About';
import { AudioControllerContext } from '../context/AudioController';
import { bindEvent } from '../utils/App';

export const Header = () => {
  const [popup, setPopup] = useState(false);
  const [init, setinit] = useState(false);

  const { controller } = useContext(AudioControllerContext);
  useEffect(() => {
    if (popup) {
      if (controller && !controller?.isvol) {
        controller.currentFrequency = 275;
      }
      controller && controller.animate(1, 275, 1200, 'audio', 'easeInOut', 'force');
    } else {
      controller && controller.animate(5, 24000, 1200, 'audio', 'easeInOut', false);
    }
  }, [popup, controller]);

  useLayoutEffect(() => {
    if (!init) bindEvent();
    else setinit(true);
  }, [init]);

  return (
    <>
      <header className="font-semibold uppercase flex justify-between items-center">
        <h1>Bugatti</h1>
        <button onClick={() => setPopup(true)} className="p-[1px] relative rounded-full overflow-hidden">
          <div className="absolute inset-0 polygon(0% 0%, 0% 100%, 9% 100%, 7% 7%, 92% 7%, 90% 96%, 7% 94%, 6% 100%, 100% 100%, 100% 0%)">
            <div className="absolute -inset-[1000%] bg-[conic-gradient(from_90deg_at_50%_50%,_theme(colors.neutral.400)_0%,_theme(colors.black)_50%,_theme(colors.neutral.400)_100%)] animate-spin"></div>
          </div>
          <span className="animate-border bg-[linear-gradient(110deg,_theme(colors.neutral.950),45%,_theme(colors.neutral.900),55%,_theme(colors.neutral.950))] bg-[length:200%_100%] block rounded-full backdrop-blur-md px-12 py-2 uppercase">
            About
          </span>
        </button>
      </header>
      <About
        setPopup={setPopup}
        className={`fixed flex flex-col inset-0 bg-neutral-400/5 backdrop-blur-md md:px-16 px-6 md:py-[2.4rem] py-6 transition-opacity duration-500 z-10 ${
          popup ? 'opacity-1' : 'opacity-0 pointer-events-none'
        }`}
      ></About>
    </>
  );
};
