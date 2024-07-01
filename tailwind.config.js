module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#5FA3FA",
        customBlack: "#0F2C37",
        customDarkBlue: "#0f67b2",
        registrationPageBg: "#e2f2fa",
      },
      fontFamily: {
        airbnbBd: ["AirbnbCereal_W_Bd", "sans-serif"],
        airbnbBk: ["AirbnbCereal_W_Bk", "sans-serif"],
        airbnbBlk: ["AirbnbCereal_W_Blk", "sans-serif"],
        airbnbLt: ["AirbnbCereal_W_Lt", "sans-serif"],
        airbnbMd: ["AirbnbCereal_W_Md", "sans-serif"],
        airbnbXBd: ["AirbnbCereal_W_XBd", "sans-serif"],
        orbitronBlack: ["Orbitron-Black", "sans-serif"],
        orbitronBold: ["Orbitron-Bold", "sans-serif"],
        orbitronExtraBold: ["Orbitron-ExtraBold", "sans-serif"],
        orbitronMedium: ["Orbitron-Medium", "sans-serif"],
        orbitronRegular: ["Orbitron-Regular", "sans-serif"],
        orbitronSemiBold: ["Orbitron-SemiBold", "sans-serif"],
        poppinsBlack: ["Poppins-Black", "sans-serif"],
        poppinsBlackItalic: ["Poppins-BlackItalic", "sans-serif"],
        poppinsBold: ["Poppins-Bold", "sans-serif"],
        poppinsBoldItalic: ["Poppins-BoldItalic", "sans-serif"],
        poppinsExtraBold: ["Poppins-ExtraBold", "sans-serif"],
        poppinsExtraBoldItalic: ["Poppins-ExtraBoldItalic", "sans-serif"],
        poppinsExtraLight: ["Poppins-ExtraLight", "sans-serif"],
        poppinsExtraLightItalic: ["Poppins-ExtraLightItalic", "sans-serif"],
        poppinsItalic: ["Poppins-Italic", "sans-serif"],
        poppinsLight: ["Poppins-Light", "sans-serif"],
        poppinsLightItalic: ["Poppins-LightItalic", "sans-serif"],
        poppinsMedium: ["Poppins-Medium", "sans-serif"],
        poppinsMediumItalic: ["Poppins-MediumItalic", "sans-serif"],
        poppinsRegular: ["Poppins-Regular", "sans-serif"],
        poppinsSemiBold: ["Poppins-SemiBold", "sans-serif"],
        poppinsSemiBoldItalic: ["Poppins-SemiBoldItalic", "sans-serif"],
        poppinsThin: ["Poppins-Thin", "sans-serif"],
        poppinsThinItalic: ["Poppins-ThinItalic", "sans-serif"],
        comfortaaBold: ["Comfortaa-Bold", "sans-serif"],
        comfortaaLight: ["Comfortaa-Light", "sans-serif"],
        comfortaaMedium: ["Comfortaa-Medium", "sans-serif"],
        comfortaaRegular: ["Comfortaa-Regular", "sans-serif"],
        comfortaaSemiBold: ["Comfortaa-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
