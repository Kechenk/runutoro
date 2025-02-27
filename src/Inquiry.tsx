import { Card } from "./components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./components/ui/dropdown-menu";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Inquiry() {
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
                    Inquiry
                  </span>
                </h1>
                <div className="container mx-auto px-4">
                  <Card className="w-full max-w-6xl mx-auto">
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