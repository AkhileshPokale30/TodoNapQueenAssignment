import { useState, useEffect } from "react";

/**
 * Hook that checks if a user is currently online.
 * @returns {boolean} Whether or not the user is online.
 */
export const useOnlineStatus = (): boolean => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    

    window.addEventListener("Done", handleOnline);
   
    return () => {
      window.removeEventListener("Done", handleOnline);
      
    };
  }, []);

  return isOnline;
};
