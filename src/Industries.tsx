import { motion, AnimatePresence } from "motion/react";
import { Button } from "./components/ui/button";
import { useLanguage } from "./context/language-context";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Industries() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const companies = [
    {
      id: 1,
      name: "Coconut & Its Derivatives (PT Tri Jaya Tangguh)",
      description: "PT Tri Jaya Tangguh is one of Indonesia's biggest producers of coconut-related products. Products include desiccated coconut, coconut cream, coconut milk, coconut water, coconut oil, coconut expeller cake, etc.",
      image: "/companies/TJT.png",
    },
    {
      id: 2,
      name: "Seafood (PT Inti Luhur Fuja Abadi)",
      description: "PT. Inti Luhur Fuja Abadi is a seafood processor located in East Java, Indonesia. Products include dermsal fishes, pelagic fishes, and cephlapods.",
      image: "/companies/ilufaa.jpg",
    },
    {
      id: 3,
      name: "Spices (PT True Spices Indonesia)",
      description: "PT True Spices Indonesia is engaged in the selection, procurement, processing, trading, and supply of various spices from Indonesia to the global market in a sustainable way. Activities includes origin selection, transporting, sortating, hand-picking automated grading,  packing and export of single spices - Nutmeg, Mace, Cloves and Cassia",
      image: "/companies/truspices.jpg",
    },
    {
      id: 4,
      name: "Biomass (PT Tri Mustika Langgeng Energi)",
      description: "PT TML Energi utilizes industrial and plantation waste from coconuts to produce bio-pellets, a form of biomass pellets that is utilizable to help realize carbon neutrality.",
      image: "/companies/tml.png",
    },
    {
      id: 5,
      name: "Flavor & Fragrance (PT Tri Aromatani Sejahtera)",
      description: "PT Tri Aromatani Sejahtera is involved in the distillation and further processing of spices and aromatic materials into essential oils. Products include nutmeg oil, clove leaf oil, and patchouli oil.",
      image: "/companies/triaromatani.png",
    }
  ]

  return (
    <>
      <header
        className={`py-4 px-2 items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto flex justify-between items-center px-2">
          <a href="/" className="flex items-center gap-2">
            <img
              src="icon/runutoro.png"
              alt="Runutoro Logo"
              className={`w-14 absolute transition-opacity duration-500 ${isScrolled ? "opacity-0" : "opacity-100"}`}
            />
            <img
              src="icon/runutoro_white.png"
              alt="Runutoro Logo"
              className={`w-14 transition-opacity duration-500 ${isScrolled ? "opacity-100" : "opacity-0"}`}
            />
            <span className="font-bold text-white text-lg hidden sm:block"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="gap-12 py-2 justify-center text-white hidden lg:flex items-center font-medium">

            <Button variant="ghost" className={`${isScrolled ? "text-white" : "text-black"} hover:text-white hover:bg-black/50`}>
              <a href="/">{t("home")}</a>
            </Button>

            <Button variant="ghost" className="text-white bg-black/90">
              <a href="/industries">{t("products")}</a>
            </Button>

            <Button variant="ghost" className={`${isScrolled ? "text-white" : "text-black"} hover:bg-black/50`}>
              <a href="/about">{t("aboutUs")}</a>
            </Button>

            <Button variant="ghost" className={`${isScrolled ? "text-white" : "text-black"} hover:bg-black/50`}>
              <a href="/inquiry">{t("inquiry")}</a>
            </Button>
          </div>

          {/* Language Selector */}
          <div className="flex items-center text-sm text-black font-medium">
            <Button
              variant="link"
              onClick={() => setLanguage("en")}
              className={`${isScrolled ? "text-white" : "text-black"} hover:text-white hover:bg-black/50 ${language === "en" ? "underline-offset-4 underline font-bold text-blue-300" : ""}`}
            >
              EN
            </Button>
            <span className={`${isScrolled ? "text-white" : "text-black"}`}>|</span>
            <Button
              variant="link"
              onClick={() => setLanguage("jp")}
              className={`${isScrolled ? "text-white" : "text-black"} hover:text-white hover:bg-black/50 ${language === "jp" ? "underline-offset-4 underline font-bold text-blue-300" : ""}`}
            >
              JP
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" 
              className={`${isScrolled ? "text-white" : "text-black"} `} onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-12 w-12" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-slate-900/95 backdrop-blur-md space-x-12"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mt-4 w-3/4 mx-auto px-2 py-2 flex flex-col gap-4">
                <a href="/industries" className="text-white py-2 border-b border-slate-700 ">
                  {t("products")}
                </a>
                <a href="/about" className="text-white py-2 border-b border-slate-700">
                  {t("aboutUs")}
                </a>
                <a href="/inquiry" className="text-white py-2">
                  {t("inquiry")}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="container mx-auto px-4 py-24 mt-16 max-w-7xl">
        <h2 className="text-3xl font-bold mb-16">Industries & Companies
          <span className="font-light text-xl mb-12 flex mt-4">
            Runutoro Japan was created as a Japanese representative of our own Indonesian companies
            operating in primary sector commodities encompassing the industries of coconut
            processing, spices, flavor & fragrance, seafood, and biomass.
            We ensure direct access to high-quality products by managing every step
            of the supply chain—from sourcing and processing to export—guaranteeing
            transparency, consistency, and reliability.
          </span>
        </h2>
        <div className="space-y-12">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex flex-col md:flex-row items-center gap-4 py-4 hover:bg-slate-50 transition-colors"
            >
              <div className="w-full md:w-auto md:pr-4 flex justify-center md:justify-start">
                <img
                  src={company.image || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">{company.name}</h3>
                <p className="text-gray-600 text-lg">{company.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}