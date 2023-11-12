import { useLayoutEffect } from 'react';
import { AudioEffect } from '../utils/Audio';

export const Footer = () => {
  useLayoutEffect(() => {
    AudioEffect(document.querySelector('.audio'));
  }, []);

  return (
    <footer className="font-semibold flex items-center justify-between gap-4">
      <div className="flex items-center justify-between gap-4">
        <button className="p-[1px] audio relative rounded-full overflow-hidden">
          <div className="absolute inset-0 polygon(0% 0%, 0% 100%, 9% 100%, 7% 7%, 92% 7%, 90% 96%, 7% 94%, 6% 100%, 100% 100%, 100% 0%)">
            <div className="absolute -inset-[1000%] bg-[conic-gradient(from_90deg_at_50%_50%,_theme(colors.green)_0%,_theme(colors.black)_50%,_theme(colors.green)_100%)] animate-spin"></div>
          </div>
          <span className="animate-border bg-[linear-gradient(110deg,_theme(colors.neutral.950),45%,_theme(colors.neutral.900),55%,_theme(colors.neutral.950))] bg-[length:200%_100%] rounded-full backdrop-blur-md uppercase flex items-center justify-center w-10 h-10">
            <div className="w-full h-full wave flex items-center justify-center text-green text-xs"></div>
          </span>
        </button>
        <div className="uppercase text-[.65rem] text-green relative info transition-opacity duration-500 opacity-0">
          <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,_theme(colors.green/50%)_0%,_theme(colors.neutral.600)_50%,_theme(colors.green/50%)_100%)] -z-10"></div>
          <span className='block bg-black/70 backdrop-blur-lg px-6 py-2'>Click Anywhere To Start The Music</span>
        </div>
      </div>
      <a href="https://github.com/eloraa" rel="noreferrer" target="_blank">
        elora
      </a>
    </footer>
  );
};
