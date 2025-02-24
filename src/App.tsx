import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"

const backgroundImages = [
  "/DALL.E-1.webp",
  "/DALL.E-2.webp",
  "/DALL.E-3.webp",
  "/DALL.E-4.webp",
]

export default function Playground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <header className="py-4 fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl shadow-md px-6 w-[90%] max-w-7xl">
        <div className="container mx-auto flex justify-between items-center px-4">
          <span className="font-bold text-lg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Mozilla_Firefox_logo_2013.png"
              alt="Logo"
              className="w-12" />
          </span>
          <div className="gap-4 hidden sm:flex text-slate-200 text-md">
            <a href="#" className="hover:underline">Industries & Companies</a>
            <a href="#" className="hover:underline">Company Profile</a>
            <a href="#" className="hover:underline">Inquiry</a>
          </div>
          <nav className="flex items-center gap-3">
            <a href="#" className="text-slate-300 hover:underline">JP</a>
            <a href="#" className="text-slate-300">|</a>
            <a href="#" className="text-slate-300 hover:underline">EN</a>
          </nav>
        </div>
      </header>
      <main className="relative flex min-h-dvh flex-col items-center justify-center text-center">
        <div className="relative z-10 container">
          <div className="mx-auto max-w-7xl space-y-6">
            <h1 className="text-white font-parkinsans font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl">
              <img src="/img/logo.png" alt="" className="w-24 sm:w-32 mx-auto mb-4" />
              Runutoro Japan
              <br />
              <span
                className="bg-gradient-to-bl to-[#43338B] via-[#3B78C7] from-[#3E99D9] bg-clip-text text-transparent
                text-xl sm:text-2xl lg:text-3xl xl:text-4xl"
                >
                From Indonesian Land & Sea to Japanese Markets
              </span>
            </h1>
            <div className="flex items-center justify-center gap-6">
            </div>
          </div>
        </div>
      </main>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('${backgroundImages[currentImageIndex]}')` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
    </div>
  )
}
