/**
 * Color constants for the application
 * Centralized color definitions for consistent theming
 */

export const colors = {
  // Microsoft Brand Colors
  microsoft: {
    blue: "#183a7b",
    blueHover: "#106ebe",
    blueDark: "#005a9e",
    blueLight: "#00a4ef",
  },

  // Gray Scale
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },

  // Semantic Colors
  semantic: {
    white: "#ffffff",
    black: "#000000",
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
    info: "#3b82f6",
  },
} as const

/**
 * Tailwind CSS color classes for easy use in className
 */
export const colorClasses = {
  microsoft: {
    blue: "text-[#183a7b]",
    blueBg: "bg-[#183a7b]",
    blueHover: "hover:bg-[#0E254FFF]",
    blueBorder: "border-[#0078d4]",
    redButton: "bg-[#b10603] hover:bg-[#dc2626] text-white",
    blueButton: "bg-[#0078d4] hover:bg-[#106ebe] text-white",
  },
  gray: {
    text: {
      50: "text-gray-50",
      100: "text-gray-100",
      200: "text-gray-200",
      300: "text-gray-300",
      400: "text-gray-400",
      500: "text-gray-500",
      600: "text-gray-600",
      700: "text-gray-700",
      800: "text-gray-800",
      900: "text-gray-900",
    },
    bg: {
      50: "bg-gray-50",
      100: "bg-gray-100",
      200: "bg-gray-200",
      300: "bg-gray-300",
      400: "bg-gray-400",
      500: "bg-gray-500",
      600: "bg-gray-600",
      700: "bg-gray-700",
      800: "bg-gray-800",
      900: "bg-gray-900",
    },
    border: {
      50: "border-gray-50",
      100: "border-gray-100",
      200: "border-gray-200",
      300: "border-gray-300",
      400: "border-gray-400",
      500: "border-gray-500",
      600: "border-gray-600",
      700: "border-gray-700",
      800: "border-gray-800",
      900: "border-gray-900",
    },
  },
} as const

