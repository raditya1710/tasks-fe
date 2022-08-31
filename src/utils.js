import { useEffect, useRef } from "react";

const K_NOOP_FUNCTION = () => {};

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    // Returns noop since useEffect expects void or function as return value and
    // eslint expects a function to be consistently return something or nothing.
    return K_NOOP_FUNCTION;
  }, [delay]);
};
