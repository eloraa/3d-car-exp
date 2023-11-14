export const Footer = () => {
  return (
    <footer className="font-semibold flex items-center justify-between gap-4">
      <div className="flex items-center justify-between gap-4">
        <button className="p-[1px] audio relative rounded-full overflow-hidden transition-transform duration-500">
          <div className="absolute inset-0 polygon(0% 0%, 0% 100%, 9% 100%, 7% 7%, 92% 7%, 90% 96%, 7% 94%, 6% 100%, 100% 100%, 100% 0%)">
            <div className="absolute -inset-[1000%] bg-[conic-gradient(from_90deg_at_50%_50%,_theme(colors.neutral.400)_0%,_theme(colors.black)_50%,_theme(colors.neutral.400)_100%)] animate-spin"></div>
          </div>
          <span className="animate-border bg-[linear-gradient(110deg,_theme(colors.neutral.950),45%,_theme(colors.neutral.900),55%,_theme(colors.neutral.950))] bg-[length:200%_100%] rounded-full backdrop-blur-md uppercase flex items-center justify-center w-10 h-10">
            <div className="w-full h-full wave flex items-center justify-center text-xs"></div>
          </span>
        </button>
        <div className="uppercase text-[.65rem] text-neutral-500 relative info transition-opacity duration-500 opacity-0">Click Anywhere To Start The Music</div>
      </div>
      <a href="https://github.com/eloraa" rel="noreferrer" target="_blank">
        elora
      </a>
    </footer>
  );
};
