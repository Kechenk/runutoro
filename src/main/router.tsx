import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Playground from "@/Playground";
import Zzz from "@/Zzz";
import { PageIndicator } from "@/PageIndicator";
import Profile from "@/Profile";
import { DotPattern } from "@/components/ui/dot-pattern";
import Inquiry from "@/Inquiry";

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
    path: "Playground",
    element: <div className="bg-zinc-950"><Playground /></div>
  },
  {
    path: "Zzz",
    element:
      <div className="">
        <Zzz />
        <PageIndicator />
      </div>
  },
  {
    path: "Profile",
    element:
      <div className="bg-[#f2f3f4]">
        <Profile />
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
  }
]);

export default router;
