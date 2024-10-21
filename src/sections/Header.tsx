"use client";

import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Link from "next/link";
import Button from "@/components/Button";
import { useState } from "react";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="py-4 border-b border-white/20 max-md:backdrop-blur md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10"></div>
      <div className="container">
        <div className="flex items-center justify-between md:border md:border-white/20 md:p-2.5 md:rounded-xl max-w-2xl mx-auto md:backdrop-blur relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="border size-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="size-8"></LogoIcon>
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 items-center text-sm">
              <Link
                href={"#"}
                className={"text-white/70 hover:text-white transition"}
              >
                Features
              </Link>
              <Link
                href={"#"}
                className={"text-white/70 hover:text-white transition"}
              >
                Developers
              </Link>
              <Link
                href={"#"}
                className={"text-white/70 hover:text-white transition"}
              >
                Pricing
              </Link>
              <Link
                href={"#"}
                className={"text-white/70 hover:text-white transition"}
              >
                Changelog
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button>Join Waitlist</Button>
            <MenuIcon className="size-9 md:hidden hover:text-white/70 transition"></MenuIcon>
          </div>
        </div>
      </div>
    </header>
  );
};
