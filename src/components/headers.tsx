import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/context/language-context"

export default function Headerss() {
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

  return (
    <header
      className="py-4 px-2 items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-900/90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto md:mx-2 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <img
            src="icon/runutoro_white.png"
            alt="Runutoro Logo"
            className="w-14 transition-opacity duration-500"
          />
          <span className="font-bold text-white text-lg hidden sm:block"></span>
        </a>

        {/* Desktop Navigation */}
        <div className="gap-12 py-2 justify-center text-white hidden lg:flex items-center font-medium">

          <Button variant="ghost" className="text-white bg-white/10">
            <a href="/">{t("home")}</a>
          </Button>

          <Button variant="ghost" className="text-white hover:bg-white/10">
            <a href="/industries">{t("products")}</a>
          </Button>

          <Button variant="ghost" className="text-white hover:bg-white/10">
            <a href="/about">{t("aboutUs")}</a>
          </Button>

          <Button variant="ghost" className="text-white hover:bg-white/10">
            <a href="/inquiry">{t("inquiry")}</a>
          </Button>

        </div>

        {/* Language Selector */}
        <div className="justify-end flex items-center gap-2 text-sm text-white">
          <button
            onClick={() => setLanguage("jp")}
            className={`hover:underline transition-colors ${language === "jp" ? "font-bold text-blue-300" : ""}`}
          >
            JP
          </button>
          <span>|</span>
          <button
            onClick={() => setLanguage("en")}
            className={`hover:underline transition-colors ${language === "en" ? "font-bold text-blue-300" : ""}`}
          >
            EN
          </button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="ml-4 text-white lg:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-slate-900/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto py-2 px-2 flex flex-col gap-4">
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
  )
}