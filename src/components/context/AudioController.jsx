import { node } from 'prop-types';
import { createContext, useLayoutEffect, useState } from 'react';
import { bindEvent } from '../utils/App';

export const AudioControllerContext = createContext();
export const AudioController = ({ children }) => {
  const [controller, setController] = useState();
  useLayoutEffect(() => {
    const eff = bindEvent(document.querySelector('.audio'));
    if (eff) eff.then(c => setController(c));
  }, []);
  return <AudioControllerContext.Provider value={{ controller, setController }}>{children}</AudioControllerContext.Provider>;
};
AudioController.propTypes = {
  children: node,
};
