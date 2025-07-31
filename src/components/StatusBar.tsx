import { useEffect, useState } from "react";

export const StatusBar = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }));
    }, 10000); // Aktualisiert alle 10 Sekunden
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-between items-center px-5 py-3 text-black text-xs">
      <span>{time}</span>
      <div className="flex gap-1 items-center">
        {/* WLAN-Icon */}
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M2 8.5C6.7 4.5 17.3 4.5 22 8.5M5 11.5C8.2 8.9 15.8 8.9 19 11.5M8 14.5C10 13 14 13 16 14.5M12 18H12.01" />
        </svg>

        {/* Akku-Icon */}
        <svg className="w-5 h-5 text-gray-600" fill="black" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="1" y="6" width="18" height="8" rx="2" ry="2" />
        </svg>
      </div>
    </div>
  );
};
