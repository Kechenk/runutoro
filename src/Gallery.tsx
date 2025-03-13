import { Button } from "./components/ui/button";
import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"
// @ts-expect-error
import { Link as ScrollLink, Element } from "react-scroll"
import { useLanguage } from "./context/language-context"
import { Menu, X } from "lucide-react"


const galeri = [
  {
    img: "/Gallery Runutoro/IMG_4584-1-370x370.jpg"
  },
  {
    img: "/Gallery Runutoro/IMG_4660-370x370.jpg"
  },
  {
    img: "/Gallery Runutoro/IMG_4671-370x370.jpg"
  },
  {
    img: "/Gallery Runutoro/IMG_4699-370x370.jpg"
  },
  {
    img: "/Gallery Runutoro/IMG_4717-370x370.jpg"
  },
  {
    img: "/Gallery Runutoro/IMG_4788-370x370.jpg"
  },
  {
    img: "/Gallery Runutoro/IMG_4793-370x370.jpg"
  },
  {
    img: "/Gallery Runutoro/IMG_5028-370x370.jpg"
  },
  {
    img: "/Gallery Runutoro/IMG_5036-370x370.jpg"
  },
  {
    img: "/Gallery Runutoro/IMG_5079-370x370.png"
  },
]

// const galeri2 = [
//   {
//     img: "/Gallery Runutoro/medium-a.jpg"
//   },
//   {
//     img: "/Gallery Runutoro/medium-b.jpg"
//   },
//   {
//     img: "/Gallery Runutoro/medium-c.jpg"
//   },
//   {
//     img: "/Gallery Runutoro/medium-d.jpg"
//   },
//   {
//     img: "/Gallery Runutoro/medium-e.jpg"
//   },
//   {
//     img: "/Gallery Runutoro/medium-f.jpg"
//   },
//   {
//     img: "/Gallery Runutoro/medium-g.jpg"
//   },
//   {
//     img: "/Gallery Runutoro/medium-h.jpg"
//   },
//   {
//     img: "/Gallery Runutoro/medium-i.jpg"
//   },
//   {
//     img: "/Gallery Runutoro/medium-j.jpg"
//   },
//   {
//     img: "/Gallery Runutoro/medium-k.jpg"
//   },
//   {
//     img: "/Gallery Runutoro/medium-l.jpg"
//   },
//   {
//     img: "/Gallery Runutoro/medium-m.jpg"
//   },
//   {
//     img: "/Gallery Runutoro/medium-n.jpg"
//   },
//   {
//     img: "/Gallery Runutoro/medium-o.jpg"
//   },
//   {
//     img: "/Gallery Runutoro/medium-p.jpg"
//   },
//   {
//     img: "/Gallery Runutoro/medium-r.jpg"
//   },
// ]

const galeri3 = [
  {
    img: "/Gallery Runutoro 2/1.png"
  },
  {
    img: "/Gallery Runutoro 2/2.png"
  },
  {
    img: "/Gallery Runutoro 2/3.jpg"
  },
  {
    img: "/Gallery Runutoro 2/4.jpg"
  },
  {
    img: "/Gallery Runutoro 2/5.jpg"
  },
  {
    img: "/Gallery Runutoro 2/6.jpg"
  },
  {
    img: "/Gallery Runutoro 2/7.jpg"
  },
  {
    img: "/Gallery Runutoro 2/8.jpg"
  },
  {
    img: "/Gallery Runutoro 2/9.jpg"
  },
  {
    img: "/Gallery Runutoro 2/10.jpg"
  },
  {
    img: "/Gallery Runutoro 2/11.jpg"
  },
  {
    img: "/Gallery Runutoro 2/12.jpg"
  },
  {
    img: "/Gallery Runutoro 2/13.jpg"
  },
  {
    img: "/Gallery Runutoro 2/14.jpg"
  },
  {
    img: "/Gallery Runutoro 2/15.jpg"
  },
  {
    img: "/Gallery Runutoro 2/16.jpeg"
  },
  {
    img: "/Gallery Runutoro 2/17.jpeg"
  },
  {
    img: "/Gallery Runutoro 2/18.jpg"
  },
  {
    img: "/Gallery Runutoro 2/19.jpg"
  },
  {
    img: "/Gallery Runutoro 2/20.jpg"
  },
  {
    img: "/Gallery Runutoro 2/21.jpg"
  },
  {
    img: "/Gallery Runutoro 2/22.jpg"
  },
  {
    img: "/Gallery Runutoro 2/23.jpg"
  },
  {
    img: "/Gallery Runutoro 2/24.jpg"
  },
  {
    img: "/Gallery Runutoro 2/25.jpg"
  },
  {
    img: "/Gallery Runutoro 2/26.jpg"
  },
  {
    img: "/Gallery Runutoro 2/27.jpg"
  },
  {
    img: "/Gallery Runutoro 2/28.jpg"
  },
  {
    img: "/Gallery Runutoro 2/29.jpg"
  },
  {
    img: "/Gallery Runutoro 2/30.jpg"
  },
  {
    img: "/Gallery Runutoro 2/31.jpg"
  },
  {
    img: "/Gallery Runutoro 2/32.jpg"
  },
  {
    img: "/Gallery Runutoro 2/33.jpg"
  },
  {
    img: "/Gallery Runutoro 2/34.jpg"
  },
  {
    img: "/Gallery Runutoro 2/35.jpg"
  },
  {
    img: "/Gallery Runutoro 2/36.jpg"
  },
  {
    img: "/Gallery Runutoro 2/37.jpg"
  },
  {
    img: "/Gallery Runutoro 2/38.jpg"
  },
  {
    img: "/Gallery Runutoro 2/39.jpg"
  },
  {
    img: "/Gallery Runutoro 2/40.jpg"
  },
  {
    img: "/Gallery Runutoro 2/41.jpg"
  },
  {
    img: "/Gallery Runutoro 2/42.jpg"
  },
  {
    img: "/Gallery Runutoro 2/43.jpg"
  },
  {
    img: "/Gallery Runutoro 2/44.jpg"
  },
  {
    img: "/Gallery Runutoro 2/45.jpg"
  },
  {
    img: "/Gallery Runutoro 2/46.jpg"
  },
  {
    img: "/Gallery Runutoro 2/47.jpg"
  },
  {
    img: "/Gallery Runutoro 2/48.jpeg"
  },
  {
    img: "/Gallery Runutoro 2/49.png"
  },
  {
    img: "/Gallery Runutoro 2/51.jpeg"
  },
]

export default function Gallery() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
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
    <>
      <header
        className=
        {`py-4 px-2 items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-900/90 backdrop-blur-md shadow-lg ${isScrolled ? "" : ""}`}>
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

            <Button variant="ghost" className="text-white hover:bg-white/10">
              <a href="/">{t("home")}</a>
            </Button>

            <Button variant="ghost" className="text-white hover:bg-white/10">
              <a href="/industries">{t("products")}</a>
            </Button>

            <Button variant="ghost" className="text-white bg-white/10">
              <a href="/gallery">{t("gallery")}</a>
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

      <div>
        <section className="container mx-auto mt-40">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <motion.div variants={fadeInUp}>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-24">
                <span className="bg-gradient-to-r from-indigo-800 to-blue-500 bg-clip-text text-transparent">
                  {("Gallery")}
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "" }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
            >
              {galeri.map((gallery, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className=
                  {
                    `p-1 transition-all duration-300
                  ${
                    // index === 2 ? "md:col-start-1 md:col-end-3 md:row-start-2 md:w-md" :
                    //   index === 3 ? "md:col-start-3 md:col-end-4 md:row-start-2" : ""
                    ""
                    }`
                  }
                >
                  <div className="h-full transition-all duration-500 overflow-hidden group">
                    <div className="p-1 flex justify-center">
                      <img
                        src={gallery.img || "/placeholder.svg?height=100&width=100"}
                        className="w-full h-full object-contain transition-transform duration-500 rounded-2xl gap-2"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </section>

        {/* <section className="container mx-auto mt-16">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "" }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
            >
              {galeri2.map((gallery, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className=
                  {
                    `p-1 transition-all duration-300
                  ${
                    // index === 2 ? "md:col-start-1 md:col-end-3 md:row-start-2 md:w-md" :
                    //   index === 3 ? "md:col-start-3 md:col-end-4 md:row-start-2" : ""
                    ""
                    }`
                  }
                >
                  <div className="h-full transition-all duration-500 overflow-hidden group">
                    <div className="p-1 flex justify-center">
                      <img
                        src={gallery.img || "/placeholder.svg?height=100&width=100"}
                        className="w-full h-full object-contain transition-transform duration-500 rounded-2xl gap-2"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section> */}

        <section className="container mx-auto mt-16">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "" }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
            >
              {galeri3.map((gallery, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className=
                  {
                    `p-1 transition-all duration-300
                  ${
                    // index === 2 ? "md:col-start-1 md:col-end-3 md:row-start-2 md:w-md" :
                    //   index === 3 ? "md:col-start-3 md:col-end-4 md:row-start-2" : ""
                    ""
                    }`
                  }
                >
                  <div className="h-full transition-all duration-500 overflow-hidden group">
                    <div className="p-1 flex justify-center">
                      <img
                        src={gallery.img || "/placeholder.svg?height=100&width=100"}
                        className="w-full h-full object-contain transition-transform duration-500 rounded-2xl gap-2"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}