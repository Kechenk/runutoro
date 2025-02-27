import { useState, useEffect } from "react";

const kota = [
  {
    title : "Kota Surabaya",
  },
]

export default function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-GB", { hour12: false }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex:row min-h-screen">
      <div
        className="flex items-center justify-center flex-1 max-w-screen text-6xl font-extrabold bg-cover bg-center"
        style={{ backgroundImage: "url('/DALL.E-2.webp')" }}
      >
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-2xl mt-2">
            {kota.map((k, index) => (
              <span key={index}>{k.title}</span>
            ))}
          </h1>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-slate-200 text-center mb-72 font-jakarta">
            {time
              .toString()
              .split("")
              .map((c, index) => (
                <span key={index} className="inline-block w-12 sm:w-16 lg:w-20">
                  {c}
                </span>
              )) ?? "Refresh Your Browser"}
          </h1>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#174C69] via-[#13263D] to-[#C0A8BB] opacity-80 text-white flex items-center justify-center flex-1 text-3xl">
      </div>
    </div>
  );
}