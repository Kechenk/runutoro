import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"
// @ts-expect-error
import { Link as ScrollLink, Element } from "react-scroll"
import { CardTitle } from "@/components/ui/card"
import { Menu, X } from "lucide-react"
import { useLanguage } from "./context/language-context"
import { Button } from "./components/ui/button"

const backgroundImages = ["/DALL.E-1.webp", "/DALL.E-2.webp", "/DALL.E-3.webp", "/DALL.E-4.webp"]

const companyData = [
  {
    title: "TRI JAYA TANGGUH",
    img: "/companies/TJT.png",
  },
  {
    title: "Ilufa",
    img: "/companies/ilufaa.jpg",
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
    title: "Halal Certified",
    img: "/certification/halal.png",
  },
  {
    title: "FSSC 22000",
    img: "/certification/fssc.png",
  },
  {
    title: "BRCGS",
    img: "/certification/brcgs.webp"
  },
  {
    title: "SGS FSSC",
    img: "/certification/sgs22000.png"
  },
  {
    title: "HACCP",
    img: "/certification/haccp.png",
  },
  {
    title: "Asta",
    img: "/certification/asta.png"
  },
  {
    title: "ISO 22000",
    img: "/certification/iso22000.png"
  },
  {
    title: "SSI",
    img: "/certification/ssi.webp"
  },
]

export default function Home() {
  const { language, setLanguage, t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Define product data with translations
  const productData = [
    {
      title: t("coconutProducts"),
      description: t("coconutDescription"),
      img: "/icon/kelapa1.png",
    },
    {
      title: t("exoticSpices"),
      description: t("spicesDescription"),
      img: "/icon/spices1.png",
    },
    {
      title: t("naturalFlavors"),
      description: t("flavorsDescription"),
      img: "/icon/natural1.png",
    },
    {
      title: t("freshSeafood"),
      description: t("seafoodDescription"),
      img: "/icon/seafood1.png",
    },
    {
      title: t("biomass"),
      description: t("biomassDescription"),
      img: "/icon/biomass1.png",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-screen overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={backgroundImages[currentImageIndex] || "/placeholder.svg?height=1080&width=1920"}
              alt={`Background ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <header
          className={`py-4 px-2 items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
            }`}
        >
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

        <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6">{t("heroTitle")}</h1>
            <p className="text-white/90 text-xl sm:text-2xl lg:text-3xl font-light mb-8">{t("heroSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div>
          </motion.div>
        </div>
      </div>

      {/* Industries */}
      <Element name="products-section">
        <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <motion.div variants={fadeInUp}>
                {/* <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                  {t("premiumQuality")}
                </span> */}
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-800 to-blue-500 bg-clip-text text-transparent">
                  {t("ourProducts")}
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {productData.map((product, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`rounded-lg p-6 transition-all duration-300
                    ${index === 3 ? "md:col-start-1 md:col-end-3 md:row-start-2" :
                      index === 4 ? "md:col-start-2 md:col-end-4 md:row-start-2" : ""
                    }`}
                >
                  <div className="h-full transition-all duration-500 overflow-hidden group">
                    <div className="p-6 flex justify-center">
                      <img
                        src={product.img || "/placeholder.svg?height=100&width=100"}
                        alt={product.title}
                        className="h-36 w-36 object-contain transition-transform duration-500"
                      />
                    </div>
                    {/* <CardHeader className="pb-2"> */}
                    <CardTitle className="text-center text-lg">{product.title}</CardTitle>
                    {/* </CardHeader> */}
                    {/* <CardContent>
                      <CardDescription className="text-center">{product.description}</CardDescription>
                    </CardContent> */}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Element>

      {/* Partners Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              {/* <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4">
                {t("trustedRelationships")}
              </span> */}
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-800 to-blue-500 bg-clip-text text-transparent">
                {t("ourPartners")}
              </span>
            </motion.h2>
            {/* <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-slate-600">
              {t("partnersDescription")}
            </motion.p> */}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {companyData.map((company, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`rounded-lg p-6 transition-all duration-300
                    ${index === 3 ? "md:col-start-1 md:col-end-3 md:row-start-2" :
                    index === 4 ? "md:col-start-2 md:col-end-4 md:row-start-2" : ""
                  }`}
              >
                <div className="h-48 flex items-center justify-center mb-4">
                  <img
                    src={company.img || "/placeholder.svg?height=150&width=150"}
                    alt={company.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-center font-medium text-slate-800">{company.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-800 to-blue-500 bg-clip-text text-transparent">
                {t("ourCertifications")}
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certificationData.map((certificate, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`rounded-lg p-6 transition-all duration-300
                  ${index === 2 ? "md:col-start-1 md:col-end-3 md:row-start-2 md:w-md" :
                    index === 3 ? "md:col-start-3 md:col-end-4 md:row-start-2" : ""
                  }`}
              >
                <div className="h-full transition-all duration-500 overflow-hidden group">
                  <div className="p-6 flex justify-center">
                    <img
                      src={certificate.img || "/placeholder.svg?height=100&width=100"}
                      alt={certificate.title}
                      className="h-48 object-contain transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <img src="/icon/runutoro_white.png" alt="Runutoro Logo" className="w-10 mr-3" />
                <h3 className="text-xl font-bold">{t("heroTitle")}</h3>
              </div>
              <p className="text-slate-300 mb-6">{t("heroSubtitle")}</p>
              {/* <div className="flex space-x-4">
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div> */}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">{t("products")}</h3>
              <ul className="space-y-3 text-slate-300">
                {productData.map((product, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-white transition-colors">
                      {product.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">{t("quickLinks")}</h3>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t("home")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t("products")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t("aboutUs")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t("inquiry")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">{t("contact")}</h3>
              <address className="text-slate-300 not-italic space-y-3">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  遠藤4489番105, Fujisawa-shi, Kanagawa, Japan
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@runutoro.com
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +81 3-1234-5678
                </p>
              </address>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Runutoro Japan. {t("allRightsReserved")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

