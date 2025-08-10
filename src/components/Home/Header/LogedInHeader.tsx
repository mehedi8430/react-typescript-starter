import { ModeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router";
import Logo from "@/assets/svgs/logo.svg?react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Search from "@/assets/svgs/search.svg?react";
import Notification from "@/components/Dashboard/DashboardHeader/Notification";
import MessageDropdown from "../MessageDropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import assets from "@/assets";

export default function LogedInHeader() {
  return (
    <nav className="border-b border-primary/30 bg-background">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/">
            <Logo className="size-20" />
          </Link>

          <div className="relative">
            <Input placeholder="Search" className="w-90 pr-16" />
            <Button className="!absolute top-0 right-0 !px-5 h-9 !rounded-l-none">
              <Search className="size-5" />
            </Button>
          </div>
        </div>

        <ul className="flex items-center gap-5 font-semibold">
          <li>
            <Notification />
          </li>
          <li>
            <MessageDropdown />
          </li>
          <li>
            <Link to="/my_bookings">My Bookings</Link>
          </li>
          <li>
            <Link to="/my_profile">
              <Avatar className="size-8 rounded-full">
                {/* <AvatarImage src='https://avatar.iran.liara.run/public' alt='user avatar' /> */}
                <AvatarImage
                  src={assets.image.DefaultPlaceholder}
                  alt="user avatar"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </li>

          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
