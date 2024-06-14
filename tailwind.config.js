/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Basic farver
      basic100: "#FCFBF9",
      basic200: "#EAE1D1",
      basic300: "#D2BF9D",
      basic400: "#BEA372",
      basic500: "#907442",
      basic600: "#6B5732",
      basic700: "#59482A",
      basic800: "#332A18",
      basic900: "#18140C",

      // De røde
      primaryOne100: "#FBDBDC",
      primaryOne200: "#F39EA1",
      primaryOne300: "#EC6A70",
      primaryOne400: "#E63E46",
      primaryOney500: "#DC1D26",
      primaryOne600: "#B71820",
      primaryOne700: "#98141B",
      primaryOne800: "#7E1116",
      primaryOne900: "#690E12",

      //De orange
      primaryTwo100: "#FFE9DE",
      primaryTwo200: "#FFBB99",
      primaryTwo300: "#FF935E",
      primaryTwo400: "#FF712B",
      primaryTwo500: "#FF5400",
      primaryTwo600: "#D44600",
      primaryTwo700: "#B03A00",
      primaryTwo800: "#923000",
      primaryTwo900: "#792800",

      //De grønne
      secondaryOne100: "#C4FCE4",
      secondaryOne200: "#86F9C8",
      secondaryOne300: "#51F7B0",
      secondaryOne400: "#23F59B",
      secondaryOne500: "#0AE687",
      secondaryOne600: "#08BF70",
      secondaryOne700: "#079F5D",
      secondaryOne800: "#06844D",
      secondaryOne900: "#056E40",

      //De blå
      secondaryTwo100: "#E0E2FD",
      secondaryTwo200: "#9EA4FA",
      secondaryTwo300: "#666FF7",
      secondaryTwo400: "#3641F5",
      secondaryTwo500: "#0D1AF3",
      secondaryTwo600: "#0A15CA",
      secondaryTwo700: "#0811A8",
      secondaryTwo800: "#070E8B",
      secondaryTwo900: "#060C73",
    },
    extend: {
      fontFamily: {
        displayBold: ["DisplayBold"],
        displayBoldItalic: ["DisplayBoldItalic"],
        displayRegular: ["DisplayRegular"],
        DisplayRegularItalic: ["DisplayRegularItalic"],
        DisplayLight: ["DisplayLight"],
      },
    },
  },
  plugins: [],
};
