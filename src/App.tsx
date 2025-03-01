"use client"

import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu"
import { IoMdArrowDropdown } from "react-icons/io"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const backgroundImages = ["/DALL.E-1.webp", "/DALL.E-2.webp", "/DALL.E-3.webp", "/DALL.E-4.webp"]

const companyData = [
  {
    title: "TRI JAYA TANGGUH",
    img: "/companies/TJT.png",
  },
  {
    title: "Ilufa",
    img: "/companies/ilufaa.png",
  },
  {
    title: "Tru Spices",
    img: "/companies/truspices.jpg",
  },
  {
    title: "Tri Mustika Langgeng Energy",
    img: "/companies/tml.png",
  },
  {
    title: "Tri Aroma Tani",
    img: "/companies/triaromatani.png",
  },
]

const certificationData = [
  {
    title: "FDA",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Food_and_Drug_Administration_logo.svg/512px-Food_and_Drug_Administration_logo.svg.png",
  },
  {
    title: "1",
    img: "/certification/fssc.png",
  },
  {
    title: "1",
    img: "/certification/halal.png",
  },
  {
    title: "1",
    img: "/certification/haccp.png",
  },
]

const cardData = [
  {
    title: "Coconut",
    description: "Description for Card 1",
    img: "icon/kelapa.png",
  },
  {
    title: "Spices",
    description: "Description for Card 2",
    img: "icon/spices.png",
  },
  {
    title: "Flafour",
    description: "Description for Card 3",
    img: "icon/flafour.png",
  },
  {
    title: "Seafood",
    description: "Description for Card 4",
    img: "icon/seafood.png",
  },
  {
    title: "Biomass",
    description: "Description for Card 5",
    img: "icon/biomass.png",
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
        {/* Hero Section */}
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
                <a href="/" className="">
                  <img src="logo.ico" alt="Logo" className="w-10" />
                </a>
              </span>

              <div className="md:gap-8 text-slate-200 gap-12 hidden md:flex text-xs justify-center items-center font-semibold">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <a href="/profile" className="hover:underline flex items-center">
                      2nd Section
                      <IoMdArrowDropdown className="size-4" />
                    </a>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40 border-2">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <a href="/profile">2nd Section</a>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <a href="/profile" className="hover:underline flex items-center">
                      2nd Section
                      <IoMdArrowDropdown className="size-4" />
                    </a>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40 border-2">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <a href="/profile">2nd Section</a>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <a href="/inquiry" className="hover:underline flex items-center">
                    Inquiry
                  </a>
                  <DropdownMenuContent className="w-40 border-2"></DropdownMenuContent>
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

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              <span className="bg-gradient-to-r from-[#43338B] to-[#3E99D9] bg-clip-text text-transparent">
                Our Products
              </span>
            </h2>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:flex gap-4 md:gap-12 justify-center">
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  className="max-w-xs sm:max-w-sm flex-shrink-0 bg-transparent backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={card.img || "/placeholder.svg"}
                    alt={card.title}
                    className="w-full h-24 object-contain p-4"
                  />
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
        </section>

        <section className="py-16 px-4 bg-slate-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              <span className="bg-gradient-to-r from-[#43338B] to-[#3E99D9] bg-clip-text text-transparent">
                Our Partners
              </span>
            </h2>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-center">
              {companyData.map((company, index) => (
                <div
                  key={index}
                  className="max-w-xs mx-auto flex-shrink-0 bg-transparent hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={company.img || "/placeholder.svg"}
                    alt={company.title}
                    className="h-36 w-full object-contain p-4"
                  />
                  <CardHeader>
                    <CardTitle className="text-sm text-center">{company.title}</CardTitle>
                  </CardHeader>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              <span className="bg-gradient-to-r from-[#43338B] to-[#3E99D9] bg-clip-text text-transparent">
                Our Certification
              </span>
            </h2>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
              {certificationData.map((certificate, index) => (
                <div
                  key={index}
                  className="max-w-xs mx-auto flex-shrink-0 bg-transparent hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={certificate.img || "/placeholder.svg"}
                    alt={certificate.title}
                    className="h-36 w-full object-contain p-4"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-slate-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              <span className="bg-gradient-to-r from-[#43338B] to-[#3E99D9] bg-clip-text text-transparent">
                About Us
              </span>
            </h2>

            <div className="max-w-4xl mx-auto text-center">
              <p className="text-slate-700 mb-8">
                Runutoro Japan bridges Indonesian quality products with Japanese markets. We specialize in sourcing and
                delivering premium coconut products, spices, seafood, and biomass materials that meet Japan's high
                standards.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-[#3B78C7]">Our Mission</h3>
                  <p className="text-sm text-slate-600">
                    To create sustainable trade relationships between Indonesian producers and Japanese markets,
                    ensuring quality, reliability and fair practices.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-[#3B78C7]">Our Vision</h3>
                  <p className="text-sm text-slate-600">
                    To become the leading bridge connecting Indonesian natural resources with Japanese consumers,
                    promoting cultural exchange and economic growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-slate-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <img src="logo.ico" alt="Runutoro Logo" className="w-10 mr-3" />
                  <h3 className="text-xl font-bold">Runutoro Japan</h3>
                </div>
                <p className="text-slate-300 text-sm">
                  From Indonesian Land & Sea to Japanese Markets. Quality products, reliable service, sustainable
                  practices.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <address className="text-slate-300 text-sm not-italic">
                  <p>Tokyo, Japan</p>
                  <p className="mt-2">Email: info@runutoro.jp</p>
                  <p>Phone: +81 3-1234-5678</p>
                </address>

                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    <FaFacebook className="size-5" />
                  </a>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    <FaTwitter className="size-5" />
                  </a>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    <FaInstagram className="size-5" />
                  </a>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    <FaLinkedin className="size-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-xs">
              <p>&copy; {new Date().getFullYear()} Runutoro Japan. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

