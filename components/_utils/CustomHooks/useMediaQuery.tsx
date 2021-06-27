import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [screenSize, setScreenSize] = useState([0, 0]);

  useEffect(() => {
    function updateScreenSize() {
      setScreenSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenSize;
};

export { useMediaQuery };
