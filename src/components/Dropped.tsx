import { IoMdArrowDropdown } from "react-icons/io";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function Dropped() {
  return (
    <>
      <div className="md:gap-8 gap-12 hidden md:flex text-xs justify-center items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <a href="/profile" className="hover:underline flex items-center">
              Industries & Companies
              <IoMdArrowDropdown className="size-4" />
            </a>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 border-2">
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
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
    </>
  )
}