import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      dmsans: ['"DM Sans", sans-serif'],
      inter: ['"Inter", sans-serif'],
      roboto: ['"Roboto", sans-serif'],
      montserrat: ['"Montserrat", sans-serif'],
      raleway: ['"Raleway", sans-serif'],
      source: ['"Source Sans 3", sans-serif'],
      kufam: ['"Kufam", sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#256252",
          50: "#74CBB4",
          100: "#65C5AC",
          200: "#48BA9C",
          300: "#3B9D84",
          400: "#30806B",
          500: "#256252",
          600: "#163930",
          700: "#06110E",
          // 100: "#60f8cf",
          // 200: "#39f8c5",
          // 300: "#2E846D",
        },
        blue: {
          DEFAULT: "#023A7A",
          50: "#3893FC",
          100: "#2488FB",
          200: "#0473F2",
          300: "#0360CA",
          400: "#034DA2",
          500: "#023A7A",
          600: "#012043",
        },
        background: "transparent",
      },
      backgroundImage: {
        "hero-bg":
          "linear-gradient(57deg, rgba(241,222,240,1) 0%, rgba(57,248,197,0.3) 0%, rgba(57,248,197,1) 100%)",
        "review-bg-gradient":
          "linear-gradient(90deg, rgba(72,186,156,0.3393732492997199) 0%, rgba(116,203,180,0.6054796918767507) 100%)",
        "about-section-bg": "url('/images/Image (4).png')",
        "about-section-gradient":
          "linear-gradient(90deg, rgba(220,220,220,1) 0%, rgba(255,240,233,0) 100%)",
        "card-bg-gradient":
          "linear-gradient(160deg, rgba(57,248,197,0.7) 0%, rgba(96,248,207,0.3) 100%)",
        "card-bg-gradient-2":
          "linear-gradient(45deg, rgba(57,248,197,0.7) 0%, rgba(96,248,207,0.3) 100%)",
        "home-bg": "url('/images/neo-1.jpg')",
        "about-bg": "url('/images/neo-2.jpg')",
        "projects-bg": "url('/images/neo-3.jpg')",
      },
      screens: {
        sm: "576px", // Small - ≥576px
        md: "768px", // Medium - ≥768px
        lg: "992px", // Large - ≥992px
        xl: "1200px", // X-Large - ≥1200px
      },
      container: {
        screens: {
          sm: "540px", // Bootstrap's container-sm max-width
          md: "720px", // Bootstrap's container-md max-width
          lg: "960px", // Bootstrap's container-lg max-width
          xl: "1140px", // Bootstrap's container-xl max-width
        },
      },
    },
  },
  plugins: [],
};
export default config;
