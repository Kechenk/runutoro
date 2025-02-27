"use client"

import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"

const backgroundImages = ["/DALL.E-1.webp", "/DALL.E-2.webp", "/DALL.E-3.webp", "/DALL.E-4.webp"]

const companyData = [
  {
    title: "Company 1",
    img: ""
  },
  {
    title: "Company 1",
    img: ""
  },
  {
    title: "Company 1",
    img: ""
  },
]

const cardData = [
  {
    title: "Coconut",
    description: "Description for Card 1",
    img: "icon/kelapa.png"
  },
  {
    title: "Spices",
    description: "Description for Card 2",
    img: "icon/spices.png"
  },
  {
    title: "Flafour",
    description: "Description for Card 3",
    img: "icon/"
  },
  {
    title: "Seafood",
    description: "Description for Card 4",
    img: "icon/seafood.png"
  },
  {
    title: "Biomass",
    description: "Description for Card 5",
    img: "icon/biomass.png"
  },
]

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="relative h-[75vh] overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImageIndex}
              className="absolute inset-0 w-full h-full"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img
                src={backgroundImages[currentImageIndex] || "/placeholder.svg"}
                alt={`Background ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <header className="py-4 absolute top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl md:shadow-md px-6 w-[90%] max-w-7xl">
            <div className="container mx-auto flex justify-between items-center px-4">
              <span className="font-bold text-lg">
                <img src="logo.ico" alt="Logo" className="w-10" />
              </span>

              <div className="gap-8 hidden md:flex text-slate-200 text-xs justify-center items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <a href="#" className="hover:underline flex">
                      Industries & Companies
                      <IoMdArrowDropdown className="size-4" />
                    </a>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40 border-2 border-zinc-950 bg-zinc-950">
                    <DropdownMenuGroup className="text-slate-200">
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <a href="#" className="hover:underline flex">
                      Industries & Companies
                      <IoMdArrowDropdown className="size-4" />
                    </a>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40 border-2 border-zinc-950 bg-zinc-950">
                    <DropdownMenuGroup className="text-slate-200">
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <a href="#" className="hover:underline flex">
                      Inquiry
                      <IoMdArrowDropdown className="size-4" />
                    </a>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40 border-2 border-zinc-950 bg-zinc-950">
                    <DropdownMenuGroup className="text-slate-200">
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <nav className="flex items-center gap-2 text-[12px] text-slate-300">
                <a href="#" className="hover:underline">
                  JP
                </a>
                <a href="#" className="">
                  |
                </a>
                <a href="#" className="hover:underline">
                  EN
                </a>
              </nav>
            </div>
          </header>

          <main className="relative flex h-full flex-col items-center justify-center text-center">
            <div className="relative z-10 container">
              <div className="mx-auto max-w-7xl space-y-6">
                <h1 className="text-slate-200 font-parkinsans font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl">
                  Runutoro Japan
                  <br />
                  <span
                    className="bg-gradient-to-bl to-[#43338B] via-[#3B78C7] from-[#3E99D9] bg-clip-text text-transparent
                text-xl sm:text-2xl lg:text-3xl xl:text-4xl"
                  >
                    From Indonesian Land & Sea to Japanese Markets
                  </span>
                </h1>
              </div>
            </div>
          </main>
        </div>

        <div className="flex-grow flex items-center justify-center p-4 overflow-x-auto relative">
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:flex gap-4 md:gap-12">
            {cardData.map((card, index) => (
              <Card key={index} className="max-w-xs sm:max-w-sm flex-shrink-0 bg-transparent backdrop-blur-sm">
                <img src={card.img || "/placeholder.svg"} alt={card.title} className="w-full h-24 object-contain" />
                <CardHeader>
                  <CardTitle className="text-sm text-center">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs text-center">{card.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="items-center text-center justify-center flex">
          <div className="relative z-10 grid grid-cols-2 lg:flex gap-12 md:gap-4">
            {companyData.map((company, index) => (
              <Card key={index} className="max-w-xs sm:max-w-sm flex-shrink-0 bg-blur-sm">
                <img src={company.img} alt={company.title} className="h-36 object-contain" />
                <CardHeader>
                  <CardTitle className="text-sm text-center">{company.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

