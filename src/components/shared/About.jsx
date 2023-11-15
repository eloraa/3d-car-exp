import { func, string } from 'prop-types';

export const About = ({ className, setPopup }) => {
  return (
    <div className={`fixed flex flex-col inset-0 bg-black/50 backdrop-blur-md md:px-16 px-6 md:py-[2.4rem] py-6 transition-opacity duration-500 z-20 ${className ? className : ''}`}>
      <div className="flex justify-between uppercase items-center text-neutral-200">
        <h1>About</h1>
        <button className="flex items-center justify-center w-10 h-10 overflow-hidden border-white p-[2px] rounded-full font-bold relative" onClick={() => setPopup(false)}>
          <div className="absolute inset-0 polygon(0% 0%, 0% 100%, 9% 100%, 7% 7%, 92% 7%, 90% 96%, 7% 94%, 6% 100%, 100% 100%, 100% 0%) -z-10">
            <div className="absolute -inset-[1000%] bg-[conic-gradient(from_90deg_at_50%_50%,_theme(colors.neutral.400)_0%,_theme(colors.black)_50%,_theme(colors.neutral.400)_100%)] animate-spin"></div>
          </div>
          <div className="w-full h-full animate-border bg-[linear-gradient(110deg,_theme(colors.neutral.950),45%,_theme(colors.neutral.900),55%,_theme(colors.neutral.950))] bg-[length:200%_100%] rounded-full backdrop-blur-md"></div>
          <div className="w-5 h-0.5 bg-neutral-400 rounded-full absolute rotate-45"></div>
          <div className="w-5 h-0.5 bg-neutral-400 rounded-full absolute rotate-[135deg]"></div>
        </button>
      </div>
      <div className="mt-4">
        <h1 className="max-w-md text-neutral-300">
          A long time ago, while browsing the web, I came across a project named{' '}
          <a href="https://exp-gemini.lusion.co/" target="_blank" rel="noreferrer" className="text-white">
            Gemini
          </a>
          . I really loved that project, so I tried to recreate it by myself. It was fun to create and play around with.
        </h1>
        <div className="mt-20 grid gap-10">
          <div>
            <h1 className="uppercase text-xs font-medium text-neutral-400">Development</h1>
            <div className="flex gap-2 mt-2 text-base items-center">
              <a href="https://github.com/eloraa" target="_blank" rel="noreferrer">
                Neon
              </a>
              <div className="w-2.5 h-2.5">
                <svg viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.86308 19.5093C2.54855 19.8238 2.12198 20.0005 1.67715 20.0005C1.23235 20.0005 0.805755 19.8238 0.491228 19.5093C0.176701 19.1948 0 18.7682 0 18.3234C0 17.8786 0.176701 17.452 0.491228 17.1374L14.2749 3.3538H5.00883C4.56912 3.34638 4.14993 3.16654 3.84153 2.85303C3.53313 2.53953 3.36021 2.11745 3.36001 1.67767C3.35981 1.23792 3.53233 0.815661 3.84043 0.501876C4.14852 0.188076 4.56754 0.00784462 5.00724 0H19.9974L19.999 14.9917C20.0069 15.2168 19.9694 15.4412 19.8888 15.6515C19.8081 15.8618 19.6859 16.0536 19.5295 16.2157C19.3731 16.3777 19.1856 16.5066 18.9783 16.5947C18.771 16.6827 18.5481 16.728 18.3229 16.728C18.0976 16.728 17.8747 16.6827 17.6674 16.5947C17.4601 16.5066 17.2726 16.3777 17.1162 16.2157C16.9598 16.0536 16.8376 15.8618 16.7569 15.6515C16.6763 15.4412 16.6388 15.2168 16.6467 14.9917V5.72566L2.86308 19.5093Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h1 className="uppercase text-xs font-medium text-neutral-400">Model Credit</h1>
            <div className="grid-cols-[1fr_auto] gap-2 mt-2 text-base items-center inline-grid">
              <a href="https://free3d.com/3d-model/bugatti-chiron-2017-model-31847.html" className="overflow-hidden text-ellipsis whitespace-nowrap" target="_blank" rel="noreferrer">
                Bugatti Chiron 2017 Sports Car 3D Model
              </a>
              <div className="w-2.5 h-2.5 min-w-[10px] min-h-[10px]">
                <svg viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.86308 19.5093C2.54855 19.8238 2.12198 20.0005 1.67715 20.0005C1.23235 20.0005 0.805755 19.8238 0.491228 19.5093C0.176701 19.1948 0 18.7682 0 18.3234C0 17.8786 0.176701 17.452 0.491228 17.1374L14.2749 3.3538H5.00883C4.56912 3.34638 4.14993 3.16654 3.84153 2.85303C3.53313 2.53953 3.36021 2.11745 3.36001 1.67767C3.35981 1.23792 3.53233 0.815661 3.84043 0.501876C4.14852 0.188076 4.56754 0.00784462 5.00724 0H19.9974L19.999 14.9917C20.0069 15.2168 19.9694 15.4412 19.8888 15.6515C19.8081 15.8618 19.6859 16.0536 19.5295 16.2157C19.3731 16.3777 19.1856 16.5066 18.9783 16.5947C18.771 16.6827 18.5481 16.728 18.3229 16.728C18.0976 16.728 17.8747 16.6827 17.6674 16.5947C17.4601 16.5066 17.2726 16.3777 17.1162 16.2157C16.9598 16.0536 16.8376 15.8618 16.7569 15.6515C16.6763 15.4412 16.6388 15.2168 16.6467 14.9917V5.72566L2.86308 19.5093Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h1 className="uppercase text-xs font-medium text-neutral-400">Sound Credit</h1>
            <div className="grid-cols-[1fr_auto] gap-2 mt-2 text-base items-center inline-grid">
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                <a href="https://exp-gemini.lusion.co/" target="_blank" rel="noreferrer">
                  Gemini Car Demo
                </a>
                <span className="text-neutral-400"> from </span>
                <a href="https://lusion.co/" target="_blank" rel="noreferrer">
                  Lusion
                </a>
              </div>
              <div className="w-2.5 h-2.5 min-w-[10px] min-h-[10px]">
                <svg viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.86308 19.5093C2.54855 19.8238 2.12198 20.0005 1.67715 20.0005C1.23235 20.0005 0.805755 19.8238 0.491228 19.5093C0.176701 19.1948 0 18.7682 0 18.3234C0 17.8786 0.176701 17.452 0.491228 17.1374L14.2749 3.3538H5.00883C4.56912 3.34638 4.14993 3.16654 3.84153 2.85303C3.53313 2.53953 3.36021 2.11745 3.36001 1.67767C3.35981 1.23792 3.53233 0.815661 3.84043 0.501876C4.14852 0.188076 4.56754 0.00784462 5.00724 0H19.9974L19.999 14.9917C20.0069 15.2168 19.9694 15.4412 19.8888 15.6515C19.8081 15.8618 19.6859 16.0536 19.5295 16.2157C19.3731 16.3777 19.1856 16.5066 18.9783 16.5947C18.771 16.6827 18.5481 16.728 18.3229 16.728C18.0976 16.728 17.8747 16.6827 17.6674 16.5947C17.4601 16.5066 17.2726 16.3777 17.1162 16.2157C16.9598 16.0536 16.8376 15.8618 16.7569 15.6515C16.6763 15.4412 16.6388 15.2168 16.6467 14.9917V5.72566L2.86308 19.5093Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h1 className="uppercase text-xs font-medium text-neutral-400">Github</h1>
            <div className="flex gap-2 mt-2 text-base items-center">
              <a href="http://github.com/eloraa/3d-car-exp" target="_blank" rel="noreferrer">
                Source Code
              </a>
              <div className="w-2.5 h-2.5">
                <svg viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.86308 19.5093C2.54855 19.8238 2.12198 20.0005 1.67715 20.0005C1.23235 20.0005 0.805755 19.8238 0.491228 19.5093C0.176701 19.1948 0 18.7682 0 18.3234C0 17.8786 0.176701 17.452 0.491228 17.1374L14.2749 3.3538H5.00883C4.56912 3.34638 4.14993 3.16654 3.84153 2.85303C3.53313 2.53953 3.36021 2.11745 3.36001 1.67767C3.35981 1.23792 3.53233 0.815661 3.84043 0.501876C4.14852 0.188076 4.56754 0.00784462 5.00724 0H19.9974L19.999 14.9917C20.0069 15.2168 19.9694 15.4412 19.8888 15.6515C19.8081 15.8618 19.6859 16.0536 19.5295 16.2157C19.3731 16.3777 19.1856 16.5066 18.9783 16.5947C18.771 16.6827 18.5481 16.728 18.3229 16.728C18.0976 16.728 17.8747 16.6827 17.6674 16.5947C17.4601 16.5066 17.2726 16.3777 17.1162 16.2157C16.9598 16.0536 16.8376 15.8618 16.7569 15.6515C16.6763 15.4412 16.6388 15.2168 16.6467 14.9917V5.72566L2.86308 19.5093Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs mt-auto text-neutral-400">
        2023 - <span className="text-neutral-600">Elora</span>
      </p>
    </div>
  );
};

About.propTypes = {
  className: string,
  setPopup: func,
};
