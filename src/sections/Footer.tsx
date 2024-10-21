import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstagramSocial from "@/assets/social-instagram.svg";
import YoutubeSocial from "@/assets/social-youtube.svg";
export const Footer = () => {
  return (
    <footer className="py-6 md:px-8   border-t border-white/15">
      <div className="container lg:mt-12">
        <div className="flex flex-col lg:flex-row lg:items-end gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="size-6"></Logo>
            <div className="font-medium">AI Startup Landing Page</div>
          </div>

          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            <a
              href="#"
              className="text-sm md:text-sm text-white/70 hover:text-white transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-sm md:text-sm text-white/70 hover:text-white transition"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-sm md:text-sm text-white/70 hover:text-white transition"
            >
              Company
            </a>
            <a
              href="#"
              className="text-sm md:text-sm text-white/70 hover:text-white transition"
            >
              Blogs
            </a>
            <a
              href="#"
              className="text-sm md:text-sm text-white/70 hover:text-white transition"
            >
              Changelog
            </a>
          </nav>

          <div className="flex gap-5 cursor-pointer lg:flex-1 lg:justify-end">
            <XSocial className="text-white/40 hover:text-white transition"></XSocial>
            <InstagramSocial className="text-white/40 hover:text-white transition"></InstagramSocial>
            <YoutubeSocial className="text-white/40 hover:text-white transition"></YoutubeSocial>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-4 mt-8 text-center px-12 md:px-8 lg:px-0">
        <p className="text-sm md:text-sm text-white/70">
          ©️ 2024 All rights reserved. almamon757@gmail.com.
        </p>
      </div>
    </footer>
  );
};
