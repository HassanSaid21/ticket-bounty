import { LucideKanban } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import { homePath, ticketsPath } from "../paths";
import ThemeSwitcher from "./theme/theme-switcher";
function Header() {
  return (
    <nav className="fixed  top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-8">
       <div className="flex-1">
         <Link
          href={homePath()}
          className={buttonVariants({ size: "lg", variant: "ghost"  })}
          >
          <LucideKanban />
          <h1 className="text-xl font-bold ml-2">Ticketbounty</h1>
           
        </Link>
          </div>
        <div className="flex items-center gap-x-2">

        <ThemeSwitcher />
        <Link
          href={ticketsPath()}
          className={buttonVariants({ size: "lg" })}
          >
          Tickets
        </Link>
          </div>
          </div>
    </nav>
  );
}

export default Header;
