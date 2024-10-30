import "@/app/globals.css";
import IconWarning from "@public/assets/Icons/Common/icon-outlined-warning.svg";
export default function SmallScreenNotificationPage() {
  return (
    <div className="flex h-screen justify-center bg-secondary-50">
      <div className="body-responsive-container flex w-full flex-col items-center justify-center space-y-6 py-10 lg:py-20">
        {/* SVG or Icon */}
        <div className="flex h-auto w-full max-w-xs items-center justify-center">
          <IconWarning className="h-28 w-28 stroke-primary-500" />
        </div>

        {/* Text Section */}
        <div className="text-center">
          <h1 className="text-error text-xl font-bold">
            عذرًا! محتوى هذا الموقع غير متوفر على الشاشات الصغيرة حاليًا.
          </h1>
          <p className="text-info mt-4 text-sm">
            نوصي باستخدام جهاز بشاشة أكبر للاستمتاع بتجربة كاملة.
          </p>
        </div>
      </div>
    </div>
  );
}
