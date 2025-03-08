import { useEffect, useState } from "react";
import { useLanguage } from "./context/language-context";
import { Button } from "./components/ui/button";
import { FacebookIcon, GlobeIcon, Link, LinkedinIcon, LocateIcon, MailboxIcon, Menu, PhoneIcon, TwitterIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "./components/ui/input";

export default function Inquiry() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <header
        className={`py-4 px-2 items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-2">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.ico" alt="Runutoro Logo" className="w-10 h-10" />
          </a>

          <div className="gap-12 py-2 justify-center hidden lg:flex items-center font-medium">
            <Button variant="ghost" className="text-black hover:bg-white/10">
              <a href="/">{t("home")}</a>
            </Button>
            <Button variant="ghost" className="text-black hover:bg-white/10">
              <a href="/industries">{t("Industries & Company")}</a>
            </Button>
            <Button variant="ghost" className="text-black hover:bg-white/10">
              <a href="/about">{t("aboutUs")}</a>
            </Button>
            <Button variant="ghost" className="text-black hover:bg-white/10">
              <a href="/inquiry">{t("inquiry")}</a>
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-black">
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

     <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h1>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
              Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.
            </p>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name">Name</label>
              <Input id="name" placeholder="Enter your name" name="name" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" name="email" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Enter your message" rows={5} name="message" onChange={handleChange} />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Contact Us</h2>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
              Get in touch with us for more information or to schedule a consultation.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <PhoneIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <div>
                <div className="font-medium">Phone</div>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  +81 3 456-789
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MailboxIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <div>
                <div className="font-medium">Email</div>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  info@acme.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <LocateIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <div>
                <div className="font-medium">Address</div>
                <p className="text-gray-500 dark:text-gray-400">123 Main St, Anytown USA</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <GlobeIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <div>
                <div className="font-medium">Social</div>
                <div className="flex items-center space-x-4">
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <TwitterIcon className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <FacebookIcon className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <LinkedinIcon className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
