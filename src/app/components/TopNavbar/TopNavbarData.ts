// app/components/navData.ts
export interface NavItem {
  title: string;
  href: string;
}
export const navItems: NavItem[] = [
  { title: "مقالات", href: "#blogs" },
  { title: "تواصل معنا", href: "#contact-us" },
  { title: "خدماتنا", href: "#our-services" },
  { title: "من نحن", href: "#about-us" },
];
