// app/components/Footer.tsx
import React from "react";
import { aboutLinks, helpLinks, mainLinks, paymentMethods } from "./FooterData";
import styles from "./Footer.module.css";

import Link from "next/link";
import Facebook from "@public/assets/Icons/Media/facebook.svg";
import Instagram from "@public/assets/Icons/Media/instagram.svg";
import X from "@public/assets/Icons/Media/x.svg";
import LinkedIn from "@public/assets/Icons/Media/linkedin.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer z-10 hidden w-full xl:block">
      <div className="flex flex-col items-center border-t border-primary-50">
        <div className="body-responsive-container flex flex-col items-end gap-5 p-10">
          <Link href="/" passHref>
            <div className="relative flex items-center gap-4">
              <img
                src="/assets/Images/Logo/logo-idara.png"
                alt="logo idara"
                className="h-16"
              />
              <img
                src="/assets/Images/Logo/logo-dz.png"
                alt="logo dz"
                className="h-16"
              />
            </div>
          </Link>
          <div className="grid grid-cols-2 gap-10 lg:flex lg:w-full lg:flex-row-reverse lg:justify-evenly lg:gap-0">
            {/* Main Links Section */}
            <div className="flex flex-col items-center gap-4 text-center lg:flex-grow lg:pr-4">
              <h3 className="text-sm font-bold uppercase lg:text-base">
                {mainLinks.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {mainLinks.links.map((link, linkIdx) => (
                  <li key={linkIdx} className={`${styles.footerLink}`}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Links Section */}
            <div className="flex flex-col items-center gap-4 text-center lg:flex-grow lg:border-r lg:border-primary-50 lg:pr-4">
              <h3 className="text-sm font-bold uppercase lg:text-base">
                {aboutLinks.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {aboutLinks.links.map((link, linkIdx) => (
                  <li key={linkIdx} className={`${styles.footerLink}`}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Links Section */}
            <div className="flex flex-col items-center gap-4 text-center lg:flex-grow lg:border-r lg:border-primary-50 lg:pr-4">
              <h3 className="text-sm font-bold uppercase lg:text-base">
                {helpLinks.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {helpLinks.links.map((link, linkIdx) => (
                  <li key={linkIdx} className={`${styles.footerLink}`}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links Section */}
            <div className="flex flex-col items-center gap-4 text-center lg:flex-grow lg:border-r lg:border-primary-50 lg:pr-4">
              <h3 className="text-sm font-bold uppercase lg:text-base">
                تابعنا
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                <li key={1}>
                  <Link href="" passHref>
                    <Facebook className="w-10 fill-white hover:fill-primary-100" />
                  </Link>
                </li>
                <li key={2}>
                  <Link href="" passHref>
                    <Instagram className="w-10 fill-white hover:fill-primary-100" />
                  </Link>
                </li>
                <li key={3}>
                  <Link href="/" passHref>
                    <X className="w-10 fill-white hover:fill-primary-100" />
                  </Link>
                </li>
                <li key={4}>
                  <Link href="" passHref>
                    <LinkedIn className="w-10 fill-white hover:fill-primary-100" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 flex flex-row items-center gap-10 text-center lg:flex-grow lg:flex-col lg:gap-4 lg:border-r lg:border-primary-50">
              <div className="flex flex-1 flex-col gap-4">
                <h3 className="text-sm font-bold uppercase lg:text-base">
                  رقم الهاتف
                </h3>
                <div className="flex flex-col gap-2">
                  <p className={`${styles.footerLink}`}>+213 782 48 33 36</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <h3 className="font-bold uppercase">العنوان</h3>
                <p className={`${styles.footerLink}`}></p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col-reverse items-center gap-5 bg-primary-50 py-8 text-primary-500 lg:flex-row lg:justify-evenly lg:gap-0 lg:pr-4">
          <div className="flex flex-row">
            <p className="text-sm lg:text-base">
              © idara.dz {new Date().getFullYear()}{" "}
            </p>
          </div>

          <div className="grid grid-cols-3 justify-center gap-4 lg:flex lg:flex-row">
            {paymentMethods.map((method, methodIdx) => (
              <div
                key={methodIdx}
                className="h-8 w-12 rounded-md bg-primary-200 hover:bg-primary-300"
              ></div>
              // <img key={methodIdx} src={method.icon} alt={method.name} />
            ))}
          </div>
          <div className="flex flex-row gap-4 text-sm lg:text-base">
            <a href={"/terms"}>الشروط والأحكام</a>
            <a href={"/privacy"}>سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
