import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { PageIndicator } from "@/PageIndicator";
import { DotPattern } from "@/components/ui/dot-pattern";
import Inquiry from "@/Inquiry";
import AboutUs from "@/AboutUs";
import Industries from "@/Industries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="bg-[#f2f3f4]">
      <App />
      <PageIndicator />
    </div>,
    children: [
    ],
  },
  {
    path: "About",
    element:
      <div className="">
        <PageIndicator />
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
        <PageIndicator />
      </div>
  },
  {
    path: "Inquiry",
    element:
      <div className="bg-[#f2f3f4]">
        <Inquiry />
        <DotPattern />
        <PageIndicator />
      </div>
  },
]);

export default router;
