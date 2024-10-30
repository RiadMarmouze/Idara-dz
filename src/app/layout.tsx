import type { Metadata } from "next";
import "./globals.css";
import Header from "./sections/Header/Header";
import Footer from "./sections/Footer/Footer";
import SmallScreenNotificationPage from "./small-screen";

export const metadata: Metadata = {
  title: "Idara DZ: Simplifying Administrative Paperwork in Algeria",
  description:
    "Idara DZ offers a comprehensive, online solution for managing administrative paperwork in Algeria. From document submission to official representation, our services make bureaucracy hassle-free.",
  keywords:
    "Idara DZ, Algeria, administrative paperwork, document processing, remote services, paperwork assistance, Algeria administration",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://idaradz.com",
    siteName: "Idara DZ",
    title: "Idara DZ: Simplifying Administrative Paperwork in Algeria",
    description:
      "Idara DZ is your trusted partner for handling complex administrative paperwork in Algeria. Submit your documents and authorize representation online—fast, secure, and professional.",
    images: [
      {
        url: "/assets/Images/Common/og-idaradz.jpg",
        alt: "Idara DZ online paperwork submission and authorization services in Algeria",
      },
    ],
  },
  twitter: {
    site: "https://idaradz.com",
    card: "summary_large_image",
    title: "Idara DZ: Simplifying Administrative Paperwork in Algeria",
    description:
      "Idara DZ provides efficient and secure administrative paperwork services in Algeria. Manage your documents and authorize representation from home.",
    images: "/assets/Images/Common/og-idaradz.jpg",
  },
};

// export const metadata: Metadata = {
//   title: "إدارة DZ: تبسيط الإجراءات الإدارية في الجزائر",
//   description:
//     "إدارة DZ تقدم حلاً شاملاً عبر الإنترنت لتسيير الأوراق الإدارية في الجزائر. من تقديم الوثائق إلى التمثيل الرسمي، خدماتنا تجعل الإجراءات الإدارية أسهل وأكثر راحة.",
//   keywords: "إدارة DZ, الجزائر, الأوراق الإدارية, معالجة الوثائق, الخدمات عن بعد, مساعدة في الإجراءات, الإدارة الجزائرية",
//   robots: "index, follow",
//   openGraph: {
//     type: "website",
//     url: "https://idaradz.com",
//     siteName: "إدارة DZ",
//     title: "إدارة DZ: تبسيط الإجراءات الإدارية في الجزائر",
//     description:
//       "إدارة DZ هي شريكك الموثوق لتسيير المعاملات الإدارية المعقدة في الجزائر. قدّم وثائقك وفوّض التمثيل بسهولة وأمان عبر الإنترنت.",
//     images: [
//       {
//         url: "/assets/Images/Common/og-idaradz.jpg",
//         alt: "إدارة DZ لخدمات تقديم الأوراق والتفويض عبر الإنترنت في الجزائر",
//       },
//     ],
//   },
//   twitter: {
//     site: "https://idaradz.com",
//     card: "summary_large_image",
//     title: "إدارة DZ: تبسيط الإجراءات الإدارية في الجزائر",
//     description:
//       "إدارة DZ توفر خدمات آمنة وسريعة لتسيير الأوراق الإدارية في الجزائر. قدّم وثائقك وفوّض التمثيل من منزلك بكل راحة.",
//     images: "/assets/Images/Common/og-idaradz.jpg",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Scheherazade+New:wght@400;500;600;700&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon-512x512.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="relative mx-auto flex h-full w-full max-w-[1920px] flex-col bg-secondary-50">
        <div className="absolute -z-10 hidden h-full w-full xl:block">
          <video
            className="absolute left-0 top-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="assets/Videos/hero-time-lapse.mp4"
          />
          <div className="absolute h-full w-full bg-primary-500/60" />
        </div>

        <Header  />

        <main className="z-10 mt-[160px] hidden w-full xl:block">{children}</main>

        <Footer />
        <div className="block xl:hidden">
          <SmallScreenNotificationPage />
        </div>
      </body>
    </html>
  );
}
