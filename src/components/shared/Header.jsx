export const Header = () => {
  return (
    <header className="font-semibold uppercase flex justify-between items-center">
      <h1>Bugatti</h1>
      <button className="p-[1px] relative rounded-full overflow-hidden">
        <div className="absolute inset-0 polygon(0% 0%, 0% 100%, 9% 100%, 7% 7%, 92% 7%, 90% 96%, 7% 94%, 6% 100%, 100% 100%, 100% 0%)">
          <div className="absolute -inset-[1000%] bg-[conic-gradient(from_90deg_at_50%_50%,_theme(colors.green)_0%,_theme(colors.black)_50%,_theme(colors.green)_100%)] animate-spin"></div>
        </div>
        <span className="animate-border bg-[linear-gradient(110deg,_theme(colors.neutral.950),45%,_theme(colors.neutral.900),55%,_theme(colors.neutral.950))] bg-[length:200%_100%] block rounded-full backdrop-blur-md px-12 py-2 uppercase">
          About
        </span>
      </button>
    </header>
  );
};
