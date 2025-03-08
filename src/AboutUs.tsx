import { useEffect, useState } from "react"
import { Button } from "./components/ui/button"
import { BriefcaseIcon, BuildingIcon, CalendarIcon, MapPinIcon, Menu, UserIcon, X } from "lucide-react"
import { useLanguage } from "./context/language-context"
import { AnimatePresence, motion } from "motion/react"
import { CardContent, CardHeader, CardTitle } from "./components/ui/card"

const companyInfo = {
  name: "Runutoro Japan",
  established: "22/5/2025",
  address: "遠藤4489番105, Fujisawa-shi, Kanagawa, Japan",
  capital: "Japanese Yen 5 Million",
  management: [
    { name: "Keane Aristo Guntoro", position: "Representative Director" },
    { name: "Terry Runudalie", position: "Director" },
    { name: "Leo Guntoro", position: "Director" },
  ],
  businessDescription:
    "Import, export, and sales of coconut, seafood, spices, spice oil, and biomass fuel-related products, as well as intermediary services for companies selling the above products.",
}

function GoogleMap({ address }: { address: string }) {
  const encodedAddress = encodeURIComponent(address)

  return (
    <iframe
      src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Company Location"
      className="w-full h-full"
    ></iframe>
  )
}

export default function AboutUs() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
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

          <div className="gap-12 py-2 justify-center text-white hidden lg:flex items-center font-medium">

            <Button variant="ghost" className={`${isScrolled ? "text-white" : "text-black"} hover:text-white hover:bg-black/50`}>
              <a href="/">{t("home")}</a>
            </Button>

            <Button variant="ghost" className={`${isScrolled ? "text-white" : "text-black"} hover:text-white hover:bg-black/50`}>
              <a href="/industries">{t("products")}</a>
            </Button>

            <Button variant="ghost" className="text-white bg-black/90">
              <a href="/about">{t("aboutUs")}</a>
            </Button>

            <Button variant="ghost" className={`${isScrolled ? "text-white" : "text-black"} hover:text-white hover:bg-black/50`}>
              <a href="/inquiry">{t("inquiry")}</a>
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-black font-medium">
            <button
              onClick={() => setLanguage("en")}
              className={`hover:underline transition-colors ${language === "en" ? "underline-offset-4 underline font-bold text-blue-300" : ""}`}
            >
              EN
            </button>
            <span>|</span>
            <button
              onClick={() => setLanguage("jp")}
              className={`hover:underline transition-colors ${language === "jp" ? "underline-offset-4 underline font-bold text-blue-300" : ""}`}
            >
              JP
            </button>

            <Button variant="ghost" size="icon" className="ml-4 text-white lg:hidden" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-slate-900/95 backdrop-blur-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
                <a href="/industries" className="text-white py-2 border-b border-slate-700">
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
        <div className="max-w-4xl mb-16">
          <CardHeader>
            <CardTitle className="text-6xl font-bold mb-12">
              Runutoro Japan
              </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CalendarIcon className="h-5 w-5 text-gray-500" />
                  <span className="text-md font-large">Established: {companyInfo.established}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-5 w-5 text-gray-500 mt-1" />
                  <span className="text-md">{companyInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BuildingIcon className="h-5 w-5 text-gray-500" />
                  <span className="text-md font-large">Capital: {companyInfo.capital}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold flex items-center">
                    <UserIcon className="h-5 w-5 text-gray-500 mr-2" />
                    Management
                  </h3>
                  <div className="text-left list-disc list-inside text-md pl-5 space-y-1">
                    {companyInfo.management.map((person, index) => (
                      <li key={index} className="pl-2">
                        {person.name} ({person.position})
                      </li>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 text-left pl-1">
                  <h3 className="text-xl font-semibold flex items-center text-left">
                    <BriefcaseIcon className="h-5 w-5 text-gray-500 mr-2" />
                    Business Description
                  </h3>
                  <p className="text-md pl-7">{companyInfo.businessDescription}</p>
                </div>
              </div>
            </div>
          </CardContent>

          <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <MapPinIcon className="h-6 w-6 text-gray-500 mr-2" />
            Our Location
          </h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <GoogleMap address={companyInfo.address} />
          </div>
        </div>
        </div>
      </div>
    </>
  )
}