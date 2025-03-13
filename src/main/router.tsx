import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { DotPattern } from "@/components/ui/dot-pattern";
import Inquiry from "@/Inquiry";
import AboutUs from "@/AboutUs";
import Industries from "@/Industries";
import Gallery from "@/Gallery";
import { FeaturedImageGallery } from "@/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="bg-[#f2f3f4]">
      <App />
    </div>,
    children: [
    ],
  },
  {
    path: "About",
    element:
      <div className="">
        <AboutUs />
        <DotPattern />
      </div>
  },
  {
    path: "Industries",
    element:
      <div className="">
        <Industries />
        <DotPattern />
      </div>
  },
  {
    path: "Inquiry",
    element:
      <div className="">
        <Inquiry />
      </div>
  },
  {
    path: "Gallery",
    element:
      <div className="">
        <Gallery />
      </div>
  },
  {
    path: "Test",
    element:
      <div className="">
        <FeaturedImageGallery />
      </div>
  },
]);

export default router;
