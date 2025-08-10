import { Button } from "@/components/ui/button";
import Logo from "@/assets/svgs/logo.svg?react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../Auth/AuthDialog";
import SignUpLogIn from "../Auth/SignUpLogIn";
import { ModeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router";
// import useCurrentUser from "@/hooks/useCurrentUser";

export default function Header() {
  //   const user = useCurrentUser();
  //   console.log(user);

  return (
    <nav className="border-b border-primary/30 bg-background">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <Logo className="size-20" />
        </Link>

        <ul className="flex items-center gap-12 font-semibold">
          <li>
            <a href="#services">Browse Services</a>
          </li>

          <li>
            <Dialog>
              <DialogTrigger>
                <span className="cursor-pointer select-none">
                  Sell Your Services
                </span>
              </DialogTrigger>
              <DialogContent className="h-[80vh]">
                <DialogHeader className="hidden ">
                  <DialogTitle></DialogTitle>
                </DialogHeader>
                <DialogDescription className="hidden "></DialogDescription>

                <SignUpLogIn activatedTab="signup" />
              </DialogContent>
            </Dialog>
          </li>
          <li>
            <Dialog>
              <DialogTrigger>
                <Button variant={"ghost"}>Log In</Button>
              </DialogTrigger>
              <DialogContent className="h-[80vh]">
                <DialogHeader className="hidden ">
                  <DialogTitle></DialogTitle>
                </DialogHeader>
                <DialogDescription className="hidden "></DialogDescription>

                <SignUpLogIn activatedTab="login" />
              </DialogContent>
            </Dialog>
          </li>
          <li>
            <Dialog>
              <DialogTrigger>
                <Button variant={"outline"} className="border-2">
                  Sign Up
                </Button>
              </DialogTrigger>
              <DialogContent className="h-[80vh]">
                <DialogHeader className="hidden ">
                  <DialogTitle></DialogTitle>
                </DialogHeader>
                <DialogDescription className="hidden "></DialogDescription>

                <SignUpLogIn activatedTab="signup" />
              </DialogContent>
            </Dialog>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
