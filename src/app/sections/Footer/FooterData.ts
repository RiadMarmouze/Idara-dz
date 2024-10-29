// app/components/footerData.ts
export interface FooterLink {
  text: string;
  path: string;
}

interface Link {
  name: string;
  url: string;
}

interface Section {
  title: string;
  links: Link[];
}

interface Link {
  name: string;
  url: string;
  icon?: string; // Optional icon field
}

interface PaymentMethod {
  name: string;
  icon: string;
}

// Main Links Section
export const mainLinks: Section = {
  title: "روابط رئيسية", // Translated "Main Links"
  links: [
    { name: "من نحن", url: "/about-us" },
    { name: "خدماتنا", url: "/our-services" },
    { name: "تواصل معنا", url: "/contact-us" },
    { name: "مقالات", url: "/blogs" },
  ],
};

// About Section
export const aboutLinks: Section = {
  title: "معلومات عنا", // Translated "About"
  links: [
    { name: "الأسئلة الشائعة", url: "/faq" }, // Translated "FAQ"
    { name: "الدفع", url: "/payments" }, // Translated "Payments"
    { name: "الإلغاء والإرجاع", url: "/cancellation-returns" }, // Translated "Cancellation & Returns"
  ],
};

// Help Section
export const helpLinks: Section = {
  title: "الدعم", // Translated "Help"
  links: [
    { name: "اتصل بنا", url: "/contact" }, // Translated "Contact Us"
    { name: "عن الشركة", url: "/about" }, // Translated "About Us"
    { name: "الوظائف", url: "/careers" }, // Translated "Careers"
  ],
};

export const paymentMethods: PaymentMethod[] = [
  {
    name: "VISA",
    icon: "/assets/Images/Common/PaymentMethod/visa.png", // Replace with actual image path
  },
  {
    name: "MasterCard",
    icon: "/assets/Images/Common/PaymentMethod/mastercard.png", // Replace with actual image path
  },
  {
    name: "Discover",
    icon: "/assets/Images/Common/PaymentMethod/discover.png", // Replace with actual image path
  },
  {
    name: "CIB",
    icon: "/assets/Images/Common/PaymentMethod/cib.png", // Replace with actual image path
  },
  {
    name: "Diners Club",
    icon: "/assets/Images/Common/PaymentMethod/dinersclub.png", // Replace with actual image path
  },
  {
    name: "PayPal",
    icon: "/assets/Images/Common/PaymentMethod/paypal.png", // Replace with actual image path
  },
];
