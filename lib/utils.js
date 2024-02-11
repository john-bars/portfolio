import { useEffect, useState } from "react";

export const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString("en-PH", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${formattedTime} GMT+8`;
};
