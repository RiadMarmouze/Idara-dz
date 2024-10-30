"use client";
import React, { useEffect, useState } from "react";
import TopNavbar from "@/app/components/TopNavbar/TopNavbar";
import CustomButton from "@/app/components/CustomButton/CustomButton";
import Link from "next/link";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // Adjust scroll value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed hidden xl:block top-0 left-0 z-20 w-full transition-colors duration-300 ${
        scrolled ? "bg-primary-500 lg:border-b lg:border-primary-50 " : "border-none bg-transparent"
      }`}
    >
      <div className="relative flex items-center justify-center px-5 pt-12 lg:px-10 lg:pt-16">
        <div className="absolute mb-5 flex h-full items-center lg:mb-8">
          <TopNavbar />
        </div>
        <div className="flex w-full flex-col-reverse items-center justify-between pb-5 lg:flex-row lg:pb-8">
          {/* Logo */}
          <Link href="/" passHref className="flex gap-4">
            <div className="flex h-full items-center gap-4">
              <img
                src="/assets/Images/Logo/logo-idara.png"
                alt="logo idara"
                className="h-16"
              />
            </div>
            <div className="flex h-full items-center gap-4">
              <img
                src="/assets/Images/Logo/logo-dz.png"
                alt="logo dz"
                className="h-16"
              />
            </div>
          </Link>

          {/* Sign In Button */}
          <div className="hidden lg:flex lg:gap-4">
            <CustomButton
              text="تسجيل الدخول"
              theme="light"
              raduis="rounded-md lg:rounded-2xl"
              //
              lightTextColor="text-primary-50"
              lightBackgroundColor="bg-primary-500/40"
              lightBorderColor="border-primary-50"
              //
              lightHoverTextColor="hover:text-gray-50"
              lightHoverBackgroundColor="hover:bg-transparent"
              lightHoverBorderColor="hover:border-primary-50"
              //
              darkTextColor="text-white"
              darkBackgroundColor="bg-primary-800"
              darkBorderColor="border-primary-800"
              //
              darkHoverTextColor="hover:text-gray-400"
              darkHoverBackgroundColor="hover:bg-primary-900"
              darkHoverBorderColor="hover:border-primary-900"
            />
            <CustomButton
              text="سجل الآن"
              theme="light"
              raduis="rounded-md lg:rounded-2xl"
              //
              lightTextColor="text-primary-50"
              lightBackgroundColor="bg-primary-50/40"
              lightBorderColor="border-primary-50"
              //
              lightHoverTextColor="hover:text-primary-50"
              lightHoverBackgroundColor="hover:bg-transparent"
              lightHoverBorderColor="hover:border-primary-100"
              //
              darkTextColor="text-white"
              darkBackgroundColor="bg-primary-800"
              darkBorderColor="border-primary-800"
              //
              darkHoverTextColor="hover:text-gray-400"
              darkHoverBackgroundColor="hover:bg-primary-900"
              darkHoverBorderColor="hover:border-primary-900"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
