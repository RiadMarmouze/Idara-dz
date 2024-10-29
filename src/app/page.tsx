"use client";
// import Facebook from "@public/assets/Icons/Media/facebook.svg";
// import Instagram from "@public/assets/Icons/Media/instagram.svg";
// import X from "@public/assets/Icons/Media/x.svg";
// import LinkedIn from "@public/assets/Icons/Media/linkedin.svg";
import IconBookMark from "@public/assets/Icons/Common/icon-outlined-bookmark.svg";
import IconArrowSelectDown from "@public/assets/Icons/Common/icon-outlined-arrow-select-down.svg";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./components/CustomButton/CustomButton";
import { ChangeEvent, FormEvent, useState } from "react";
import { DemandeType } from "./types";
export default function Home() {
  const blogMainPost = {
    title: "كيفية إنشاء دفتر عقاري في الجزائر",
    imageUrl: "/assets/Images/Common/blog3.jpg", // Replace with actual image paths
    link: "/blog/create-property-deed",
  };
  const blogPosts = [
    {
      title: "كيفية استخراج شهادة الميلاد الإلكترونية",
      imageUrl: "/assets/Images/Common/blog3.jpg",
      link: "/blog/obtain-birth-certificate",
    },
    {
      title: "كيفية تجديد بطاقة التعريف الوطنية البيومترية",
      imageUrl: "/assets/Images/Common/blog3.jpg",
      link: "/blog/renew-biometric-id",
    },
    {
      title: "كيفية استخراج شهادة السوابق العدلية",
      imageUrl: "/assets/Images/Common/blog3.jpg",
      link: "/blog/get-criminal-record",
    },
    {
      title: "كيفية الحصول على رخصة البناء في الجزائر",
      imageUrl: "/assets/Images/Common/blog3.jpg",
      link: "/blog/get-building-permit",
    },
  ];

  const [activeTab, setActiveTab] = useState("popular");

  // Sample data for popular and latest services
  const popularServices = [
    { name: "الاستعلام عن حالة طلب الدفتر العقاري", link: "#" },
    { name: "الاستعلام عن المخالفات العقارية", link: "#" },
    { name: "طلب إصدار شهادة ميلاد", link: "#" },
    { name: "طلب تجديد بطاقة الهوية الوطنية البيومترية", link: "#" },
  ];

  const latestServices = [
    { name: "طلب استخراج شهادة السوابق العدلية", link: "#" },
    { name: "طلب إصدار رخصة بناء", link: "#" },
    { name: "طلب توثيق عقود الزواج", link: "#" },
    { name: "الاستعلام عن حالة طلب بطاقة العائلة", link: "#" },
  ];

  // Select the active list based on the current tab
  const services = activeTab === "popular" ? popularServices : latestServices;

  const [formData, setFormData] = useState<DemandeType>({
    type: "",
    title: "",
    description: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    file: null,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(
      "تم استلام طلبك بنجاح، سنتواصل معك قريباً عبر الواتساب لتزويدك بالتفاصيل ✨"
    );
  };
  return (
    <div className="relative flex w-full flex-col items-center gap-10 overflow-hidden lg:gap-20">
      {/* hero *********************************************************************************************/}
      <section
        id="hero"
        className="relative flex h-[calc(100vh-160px)] w-full justify-center gap-10"
      >
        <div className="absolute -left-[8%] flex h-full w-1/5 flex-col">
          <div className="relative flex h-full w-full items-center">
            <img
              src="/assets/Images/Logo/logo-I.png"
              alt="Illustrative Image"
              className="h-full w-full object-cover opacity-50"
            />
          </div>
        </div>
        <div className="flex w-2/5 flex-col items-center justify-center gap-10">
          <h1 className="text-section-title z-10 text-center text-primary-50">
            تبسيط الإجراءات الإدارية بكل احترافية
          </h1>
          <h2 className="text-description z-10 text-center text-secondary-50">
            .نحن هنا لنزيل عنك عبء الإجراءات الورقية المعقدة <br />
            .دعنا نساعدك بإنجاز جميع المعاملات الإدارية بسرعة وسهولة
          </h2>
        </div>
        <div className="absolute -right-[8%] flex h-full w-1/5 flex-col">
          <div className="relative flex h-full w-full items-center">
            <img
              src="/assets/Images/Logo/logo-I.png"
              alt="Illustrative Image"
              className="h-full w-full object-cover opacity-50"
            />
          </div>
        </div>
      </section>
      {/* about-us *********************************************************************************************/}

      <section id="about-us" className="body-responsive-container text-center">
        <h3 className="mb-4 text-3xl font-bold text-primary-900">من نحن</h3>
        <div className="flex justify-center rounded-xl bg-secondary-100 p-16 py-8">
          <p className="max-w-2xl text-2xl text-primary-500">
            شركة جزائرية متخصصة في تقديم الخدمات الإدارية، تهدف إلى تسهيل جميع
            أنواع الوثائق والإجراءات اللازمة للمواطنين والمقيمين. نقدم خدمات
            شاملة ومتكاملة تهتم بكافة التفاصيل لإتمام المعاملات القانونية
            والإدارية بكل سهولة وراحة.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section id="our-services" className="body-responsive-container">
        <div className="flex w-full items-center justify-between">
          <Link href={"/all-services"}>
            <h3 className="text-end font-bold text-primary-500 underline">
              كل الخدمات
            </h3>
          </Link>
          <h3 className="mb-6 text-end text-3xl font-bold text-primary-900">
            خدماتنا
          </h3>
        </div>

        <div className="flex flex-col items-end gap-2 rounded-xl bg-secondary-100 p-8">
          {/* Filter Buttons */}
          <div className="flex items-center space-x-4 pr-10 rtl:space-x-reverse">
            <button
              onClick={() => setActiveTab("popular")}
              className={`px-4 h-fit  ${
                activeTab === "popular"
                  ? "bg-primary-500 text-primary-50 rounded-xl py-2 text-xl"
                  : " text-primary-500 rounded-xl py-2 text-xl"
              }`}
            >
              الخدمات الشائعة
            </button>
            <button
              onClick={() => setActiveTab("latest")}
              className={`px-4 h-fit ${
                activeTab === "latest"
                  ? "bg-primary-500 text-primary-50 rounded-xl py-2 text-xl"
                  : " text-primary-500 rounded-xl py-2 text-xl"
              }`}
            >
              أحدث الخدمات
            </button>
          </div>

          {/* Service Cards */}
          <div
            dir="rtl"
            className="grid w-full grid-cols-1 gap-4 rounded-xl border border-primary-500 bg-primary-500 px-16 py-8 text-lg sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <a
                href={service.link}
                key={index}
                className="grid-grow rounded-lg border border-primary-200 bg-primary-50 p-4 text-primary-500 transition hover:bg-primary-50/80"
              >
                <div className="flex items-start justify-between gap-4">
                  <span>{service.name}</span>
                  <div className="rounded-full border border-primary-100 bg-primary-500 p-2">
                    <IconBookMark className="h-4 w-4 stroke-primary-50 stroke-[2px]" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-us" className="body-responsive-container">
        <h3 className="mb-6 text-center text-3xl font-bold text-primary-900">
          تواصل معنا
        </h3>
        <div className="flex flex-col items-center rounded-xl bg-primary-500 p-16">
          <form
            onSubmit={handleSubmit}
            className="flex w-[80%] max-w-xl flex-col items-end space-y-4"
          >
            <label className="input-label">نوع الخدمة المطلوبة</label>
            <div className="relative w-full">
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
                dir="rtl"
                className="input-default input-padding input-select"
                aria-label="نوع الخدمة المطلوبة"
              >
                <option value="">إختر نوع الخدمة</option>
                <option value="birth_certificate">شهادة الميلاد</option>
                <option value="residence_certificate">شهادة السكن</option>
                <option value="social_security">وثائق الضمان الاجتماعي</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center justify-center">
                <IconArrowSelectDown className="h-8 w-8 stroke-primary-50 stroke-[2px]" />
              </div>
            </div>

            <label className="input-label">عنوان الوثيقة</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="input-default input-padding"
              aria-label="عنوان الوثيقة"
            />

            <label className="input-label">تفاصيل الوثيقة المطلوبة</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              className="input-default input-padding"
              aria-label="تفاصيل الوثيقة المطلوبة"
            ></textarea>

            <label className="input-label">الإسم الشخصي</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="input-default input-padding"
              aria-label="الإسم الشخصي"
            />

            <label className="input-label">اللقب</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="input-default input-padding"
              aria-label="اللقب"
            />

            <label className="input-label">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="input-default input-padding"
              aria-label="البريد الإلكتروني"
            />

            <label className="input-label">رقم الهاتف</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="input-default input-padding"
              aria-label="رقم الهاتف"
            />

            <div className="flex w-full items-center justify-between">
              <a
                href="./tawkil.pdf"
                download="twkil.pdf"
                className="w-fit text-primary-200 hover:underline"
              >
                تحميل التوكيل
              </a>
              <label className="input-label w-fit">التوكيل</label>
            </div>

            <div className="relative flex w-full text-lg">
              <label htmlFor="fileUpload" className="input-label w-full">
                تحميل ملف التوكيل
              </label>
              <input
                type="file"
                id="fileUpload"
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                onChange={handleFileChange}
                aria-label="تحميل ملف التوكيل"
              />
              <p
                id="fileName"
                className="flex flex-grow items-center justify-end rounded-l-xl border border-primary-50 pr-5 text-primary-100"
              >
                لم يتم اختيار ملف
              </p>
              <label
                htmlFor="fileUpload"
                className="cursor-pointer rounded-r-xl bg-primary-50 px-5 py-3 text-center text-primary-500"
              >
                اختر ملف
              </label>
            </div>

            <div className="flex w-full justify-center pt-10">
              <CustomButton
                text="إرسال الطلب"
                theme="light"
                raduis="rounded-md lg:rounded-2xl"
                //
                lightTextColor="text-primary-500"
                lightBackgroundColor="bg-primary-50"
                lightBorderColor="border-primary-50"
                //
                lightHoverTextColor="hover:text-primary-50"
                lightHoverBackgroundColor="hover:bg-primary-900"
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
          </form>
        </div>
      </section>

      {/* Blogs */}
      <section
        id="blogs"
        className="flex w-full flex-col items-center bg-primary-500"
      >
        <div className="body-responsive-container flex flex-col gap-8 py-16">
          <div className="flex items-center justify-between">
            <Link href={"/all-blogs"}>
              <h3 className="text-end font-bold text-primary-50 underline">
                تصفح مقالات أخرى
              </h3>
            </Link>
            <h3 className="text-end text-3xl font-bold text-primary-50">
              مقالات إدارية
            </h3>
          </div>
          <div className="flex gap-10 text-right">
            <div className="grid w-3/5 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {blogPosts.map((post, index) => (
                <Link href={post.link} key={index}>
                  <div className="cursor-pointer overflow-hidden rounded-3xl bg-gray-800 shadow-lg">
                    <div className="relative h-48">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        layout="fill"
                        className="object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
                      />
                      <div className="absolute h-full w-full bg-primary-500/5 transition-colors hover:bg-primary-500/20" />
                    </div>
                    <div className="p-4 text-sm font-medium text-white">
                      {post.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="w-2/5">
              <div className="relative flex h-full w-full cursor-pointer overflow-hidden rounded-3xl bg-gray-800 shadow-lg">
                <div className="relative flex-grow">
                  <Image
                    src={blogMainPost.imageUrl}
                    alt={blogMainPost.title}
                    layout="fill"
                    className="object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>
                <div className="absolute bottom-0 flex h-full w-full items-end justify-end bg-primary-500/5 transition-colors hover:bg-primary-500/20">
                  <h2 className="w-full bg-black/50 p-4 text-sm font-medium text-white">
                    {blogMainPost.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
