import React from "react";
import classNames from "classnames";

type Theme = "light" | "dark";

interface ButtonProps {
  text?: string;
  padding?: string;
  raduis?: string;
  fontWeight?: string;
  textSize?: string;

  lightTextColor?: string;
  lightHoverTextColor?: string;
  darkTextColor?: string;
  darkHoverTextColor?: string;
  lightBackgroundColor?: string;
  darkBackgroundColor?: string;
  lightHoverBackgroundColor?: string;
  darkHoverBackgroundColor?: string;
  lightBorderColor?: string;
  darkBorderColor?: string;
  lightHoverBorderColor?: string;
  darkHoverBorderColor?: string;
  theme?: Theme;
  disabled?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
  text = "Click",
  padding = "px-10 py-4",
  raduis = "rounded-xl",
  fontWeight = "font-bold",
  textSize = "text-base",

  lightTextColor = "text-white",
  lightBackgroundColor = "bg-primary-700",
  lightBorderColor = "border-primary-500",

  lightHoverBorderColor = "hover:border-primary-600",
  lightHoverTextColor = "hover:text-gray-200",
  lightHoverBackgroundColor = "hover:bg-primary-400",

  darkTextColor = "text-white",
  darkBackgroundColor = "bg-primary-800",
  darkBorderColor = "border-primary-800",

  darkHoverTextColor = "hover:text-gray-400",
  darkHoverBackgroundColor = "hover:bg-primary-900",
  darkHoverBorderColor = "hover:border-primary-900",
  theme = "light",
  disabled = false,
}) => {
  const baseClasses = ` ${padding} ${fontWeight} ${textSize} ${raduis} text-nowrap leading-none  focus:outline-none transition-all`;

  // Conditionally generate classes based on theme, variant, and color props
  const buttonClasses = classNames(baseClasses, {
    // Outlined button variant
    [`border ${lightTextColor} ${lightBackgroundColor} ${lightBorderColor} `]:
      theme === "light",
    [`border ${darkTextColor} ${darkBackgroundColor} ${darkBorderColor} `]:
      theme === "dark",

    // Hover styles for outlined variant
    [` ${lightHoverTextColor} ${lightHoverBackgroundColor} ${lightHoverBorderColor}`]:
      theme === "light",
    [`${darkHoverTextColor} ${darkHoverBackgroundColor} ${darkHoverBorderColor}`]:
      theme === "dark",
  });

  return (
    <button disabled={disabled} className={buttonClasses}>
      {text}
    </button>
  );
};

export default CustomButton;

// import React from "react";

// type Variant = "filled" | "outlined";
// type Theme = "light" | "dark";

// interface ButtonProps {
//   variant?: Variant;
//   lightColor?: string;
//   darkColor?: string;
//   theme?: Theme;
//   children: React.ReactNode;
//   onClick: () => void;
// }

// const CustomButton: React.FC<ButtonProps> = ({
//   variant = "filled",
//   lightColor = "blue",
//   darkColor = "blue",
//   theme = "light",
//   onClick,
//   children,
// }) => {
//   const baseClasses = "px-4 py-2 rounded focus:outline-none transition-all";

//   const styles: Record<
//     Variant,
//     Record<Theme, Record<"default" | "hover" | "focus", string>>
//   > = {
//     filled: {
//       light: {
//         default: bg-${lightColor}-500 text-white,
//          bg-${lightColor}-600,
//         focus: focus:ring focus:ring-${lightColor}-300,
//       },
//       dark: {
//         default: bg-${darkColor}-800 text-white,
//          bg-${darkColor}-700,
//         focus: focus:ring-${darkColor}-500,
//       },
//     },
//     outlined: {
//       light: {
//         default: border-2 border-${lightColor}-500 text-${lightColor}-500 bg-transparent,
//          bg-${lightColor}-500 text-white,
//         focus: focus:ring focus:ring-${lightColor}-300,
//       },
//       dark: {
//         default: border-2 border-${darkColor}-500 text-${darkColor}-500 bg-transparent,
//          bg-${darkColor}-500 text-white,
//         focus: focus:ring-${darkColor}-500,
//       },
//     },
//   };

//   // Get the classes based on the variant and current theme
//   const variantClasses = styles[variant][theme];
//   const classes = ${baseClasses} ${variantClasses.default} ${variantClasses.hover} ${variantClasses.focus};

//   return (
//     <button className={classes} onClick={onClick}>
//       {children}
//     </button>
//   );
// };

// export default CustomButton;
