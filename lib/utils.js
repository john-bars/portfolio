// "use client";
// import { useEffect, useState } from "react";

// export const RealTimeClock = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 60000);

//     return () => clearInterval(interval);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString("en-PH", {
//     hour12: false,
//     hour: "2-digit",
//     minute: "2-digit",
//   });

//   return `${formattedTime} GMT+8`;
// };

export const validateString = (value, maxLength) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const getErrorMessage = (error) => {
  let message;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "messag" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }
  return message;
};
