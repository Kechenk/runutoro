import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"
// @ts-expect-error
import { Link as ScrollLink, Element } from "react-scroll"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown, Facebook, Twitter, Instagram, Linkedin, Menu, X } from "lucide-react"
import { useLanguage } from "./context/language-context"

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
    title: "FSSC 22000",
    img: "/certification/fssc.png",
  },
  {
    title: "Halal Certified",
    img: "/certification/halal.png",
  },
  {
    title: "HACCP",
    img: "/certification/haccp.png",
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
      img: "/icon/kelapa.png",
    },
    {
      title: t("exoticSpices"),
      description: t("spicesDescription"),
      img: "/icon/spices.png",
    },
    {
      title: t("naturalFlavors"),
      description: t("flavorsDescription"),
      img: "/icon/flafour.png",
    },
    {
      title: t("freshSeafood"),
      description: t("seafoodDescription"),
      img: "/icon/seafood.png",
    },
    {
      title: t("biomass"),
      description: t("biomassDescription"),
      img: "/icon/biomass.png",
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
          className={`py-4 px-2 items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? "bg-slate-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
          }`}
        >
          <div className="container mx-auto flex justify-between items-center px-2">
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.ico" alt="Runutoro Logo" className="w-10 h-10" />
              <span className="font-bold text-white text-lg hidden sm:block"></span>
            </a>

            {/* Desktop Navigation */}
            <div className="gap-12 py-2 justify-center text-white hidden lg:flex items-center font-medium">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:bg-white/10">
                    {t("Industries & Company")} <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    {productData.map((product, index) => (
                      <DropdownMenuItem key={index}>
                        <a href={`/products/${product.title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
                          {product.title}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" className="text-white hover:bg-white/10">
                <a href="/about">{t("aboutUs")}</a>
              </Button>

              <Button variant="ghost" className="text-white hover:bg-white/10">
                <a href="/inquiry">{t("inquiry")}</a>
              </Button>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-2 text-sm text-white">
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
                <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
                  <a href="/products" className="text-white py-2 border-b border-slate-700">
                    {t("Industries & Company")}
                  </a>
                  <a href="/partners" className="text-white py-2 border-b border-slate-700">
                    {t("partners")}
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

        {/* Hero Content */}
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
              <ScrollLink to="products-section" smooth={true} duration={500}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white border-none"
                >
                  {t("exploreProducts")}
                </Button>
              </ScrollLink>
              <Button
                size="lg"
                variant="outline"
                className="text-white hover:text-black transition border-white bg-white/10"
              >
                {t("contactUs")}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Products Section */}
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
                <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                  {t("premiumQuality")}
                </span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-800 to-blue-500 bg-clip-text text-transparent">
                  {t("ourProducts")}
                </span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-slate-600">
                {t("productsDescription")}
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {productData.map((product, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full border-none bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 flex justify-center">
                      <img
                        src={product.img || "/placeholder.svg?height=100&width=100"}
                        alt={product.title}
                        className="h-20 w-20 object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-center text-lg">{product.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">{product.description}</CardDescription>
                    </CardContent>
                  </Card>
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
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4">
                {t("trustedRelationships")}
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-800 to-blue-500 bg-clip-text text-transparent">
                {t("ourPartners")}
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-slate-600">
              {t("partnersDescription")}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
          >
            {companyData.map((company, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-36 flex items-center justify-center mb-4">
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
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                {t("qualityAssurance")}
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-800 to-blue-500 bg-clip-text text-transparent">
                {t("ourCertifications")}
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-slate-600">
              {t("certificationsDescription")}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {certificationData.map((certificate, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <img
                  src={certificate.img || "/placeholder.svg?height=120&width=120"}
                  alt={certificate.title}
                  className="h-24 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-indigo-900 to-blue-800 text-white">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
              {t("aboutRunutoro")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="max-w-3xl mx-auto text-white/80 text-lg">
              {t("aboutDescription")}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{t("ourMission")}</h3>
              <p className="text-white/80 text-center">{t("missionDescription")}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{t("ourVision")}</h3>
              <p className="text-white/80 text-center">{t("visionDescription")}</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 text-center"
          >
            <Button size="lg" className="bg-white text-blue-800 hover:bg-white/90">
              {t("learnMore")}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-12 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-200 to-indigo-200 rounded-full -mr-20 -mt-20 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-full -ml-20 -mb-20 opacity-50"></div>

            <div className="relative z-10">
              <motion.div variants={fadeInUp} className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{t("readyToImport")}</h2>
                <p className="text-slate-700 max-w-2xl mx-auto">{t("ctaDescription")}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white"
                >
                  {t("contactToday")}
                </Button>
                <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                  {t("requestCatalog")}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <img src="/logo.ico" alt="Runutoro Logo" className="w-10 mr-3" />
                <h3 className="text-xl font-bold">{t("heroTitle")}</h3>
              </div>
              <p className="text-slate-300 mb-6">{t("heroSubtitle")}</p>
              <div className="flex space-x-4">
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
              </div>
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
                    {t("aboutUs")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t("partners")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t("certifications")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t("contact")}
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
                  Tokyo, Japan
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
                  info@runutoro.jp
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

