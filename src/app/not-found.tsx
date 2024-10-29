import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css"; // Ensure global styles are imported
import CustomButton from "./components/CustomButton/CustomButton";

export default function NotFoundPage() {
  return (
    <div className="flex justify-center bg-secondary-50">
      <div className="body-responsive-container w-full py-10 lg:py-20">
        <div className="flex flex-col items-center space-y-6">
          {/* SVG Image */}
          <div className="flex h-auto w-full max-w-xs justify-center">
            <Image
              src="/assets/Images/Common/404.svg" // Place your SVG file in the public folder
              alt="404 Not Found"
              width={200}
              height={200}
            />
          </div>

          {/* Text Section */}
          <div className="text-center">
            <h1 className="text-error">
              عذرًا! الصفحة التي تبحث عنها غير موجودة.
            </h1>
            <p className="text-info mt-4">
              قد تكون كتبت العنوان بشكل خاطئ، أو ربما تم نقل الصفحة.
            </p>
          </div>

          {/* Button */}
          <Link href="/" passHref>
            <CustomButton
              text="العودة إلى الصفحة الرئيسية"
              theme="light"
              raduis="rounded-md lg:rounded-2xl"
              //
              lightTextColor="text-primary-50"
              lightBackgroundColor="bg-primary-500"
              lightBorderColor="border-primary-50"
              //
              lightHoverTextColor="hover:text-gray-50"
              lightHoverBackgroundColor="hover:bg-primary-900"
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
          </Link>
        </div>
      </div>
    </div>
  );
}
