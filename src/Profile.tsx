import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CalendarIcon,
  MapPinIcon,
  BuildingIcon,
  UserIcon,
  BriefcaseIcon
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./components/ui/dropdown-menu"
import { IoMdArrowDropdown } from "react-icons/io"

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

export default function Profile() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="relative overflow-hidden">
          <header className="py-4 absolute top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl md:shadow-md px-6 w-[90%] max-w-7xl">
            <div className="container mx-auto flex justify-between items-center px-4">
              <span className="font-bold text-lg">
                <a href="/">
                  <img src="logo.ico" alt="Logo" className="w-10" />
                </a>
              </span>

              <div className="md:gap-8 gap-12 hidden md:flex text-xs justify-center items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <a href="/profile" className="hover:underline flex items-center">
                      2nd Section
                      <IoMdArrowDropdown className="size-4" />
                    </a>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40 border-2">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <a href="/profile">
                          2nd Section
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <a href="/profile" className="hover:underline flex items-center">
                      2nd Section
                      <IoMdArrowDropdown className="size-4" />
                    </a>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40 border-2">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <a href="/profile">
                          2nd Section
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <a href="/inquiry" className="hover:underline flex items-center">
                    Inquiry
                  </a>
                  <DropdownMenuContent className="w-40 border-2">
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <nav className="flex items-center gap-2 text-[12px] text-zinc-950">
                <a href="#" className="hover:underline">
                  JP
                </a>
                <a href="#" className="">
                  |
                </a>
                <a href="#" className="hover:underline">
                  EN
                </a>
              </nav>
            </div>
          </header>

          <main className="relative flex min-h-dvh flex-col items-center justify-center text-center">
            <div className="relative z-10 container">
              <div className="mx-auto max-w-6xl space-y-6">
                <h1 className="font-bold justify-start text-3xl leading-[1.25] sm:text-5xl lg:text-6xl xl:text-7xl font-parkinsans">
                  <span className="bg-gradient-to-br from-yellow-300 to-[#17D1C6] bg-clip-text text-transparent">
                    Company Profile
                  </span>
                </h1>

                <div className="container mx-auto px-4">
                  <Card className="w-full max-w-6xl mx-auto">
                    <CardHeader>
                      <CardTitle className="text-3xl font-bold text-center mb-6">{companyInfo.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <CalendarIcon className="h-5 w-5 text-gray-500" />
                            <span className="text-sm font-medium">Established: {companyInfo.established}</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <MapPinIcon className="h-5 w-5 text-gray-500 mt-1" />
                            <span className="text-sm">{companyInfo.address}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <BuildingIcon className="h-5 w-5 text-gray-500" />
                            <span className="text-sm font-medium">Capital: {companyInfo.capital}</span>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h3 className="text-lg font-semibold flex items-center">
                              <UserIcon className="h-5 w-5 text-gray-500 mr-2" />
                              Management
                            </h3>
                            <div className="text-left list-disc list-inside text-sm pl-5 space-y-1">
                              {companyInfo.management.map((person, index) => (
                                <li key={index} className="pl-2">
                                  {person.name} ({person.position})
                                </li>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-2 text-left pl-1">
                            <h3 className="text-lg font-semibold flex items-center text-left">
                              <BriefcaseIcon className="h-5 w-5 text-gray-500 mr-2" />
                              Business Description
                            </h3>
                            <p className="text-sm pl-7">{companyInfo.businessDescription}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

