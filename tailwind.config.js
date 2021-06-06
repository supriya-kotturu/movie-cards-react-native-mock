const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.css"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: (theme) => ({
      primary: {
        dark: "#240046",
        light: "#7b2cbf",
        100: "#9d4edd",
        200: "#7b2cbf",
        300: "#5a189a",
        400: "#3c096c",
        500: "#240046",
      },
      secondary: {
        dark: "#ff6d00",
        light: "#ff9100",
        100: "#ff9e00",
        200: "#ff9100",
        300: "#ff8500",
        400: "#ff7900",
        500: "#ff6d00",
      },
      "tone-black": "#240046",
      pumpkin: " #ff6d00ff",
      "heat-wave": "#ff7900ff",
      "dark-orange": "#ff8500ff",
      "yellow-orange-color-wheel": " #ff9100ff",
      "orange-peel": "#ff9e00ff",
      "russian-violet": "#240046ff",
      "persian-indigo": "#3c096cff",
      purple: "#5a189aff",
      "french-violet": "#7b2cbfff",
      "dark-orchid": "#9d4eddff",
      ...theme("colors"),
    }),
    extend: {
      fontFamily: {
        pop: ["Poppins"],
        ...defaultTheme.fontFamily,
      },
      colors: {
        primary: {
          light: "#7b2cbf",
          dark: "#240046",
          100: "#9d4edd",
          200: "#7b2cbf",
          300: "#5a189a",
          400: "#3c096c",
          500: "#240046",
        },
        secondary: {
          dark: "#ff6d00",
          light: "#ff9100",
          100: "#ff9e00",
          200: "#ff9100",
          300: "#ff8500",
          400: "#ff7900",
          500: "#ff6d00",
        },
        "tone-black": "#240046",
        pumpkin: " #ff6d00ff",
        "heat-wave": "#ff7900ff",
        "dark-orange": "#ff8500ff",
        "yellow-orange-color-wheel": " #ff9100ff",
        "orange-peel": "#ff9e00ff",
        "russian-violet": "#240046ff",
        "persian-indigo": "#3c096cff",
        purple: "#5a189aff",
        "french-violet": " #7b2cbfff",
        "dark-orchid": " #9d4eddff",
      },
      gradientColorStops: ["active", "group-hover"],
    },
  },
  variants: {
    extend: { fontStyle: ["hover", "focus"] },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};

// /* CSS HEX */
// --pumpkin: #ff6d00ff;
// --heat-wave: #ff7900ff;
// --dark-orange: #ff8500ff;
// --yellow-orange-color-wheel: #ff9100ff;
// --orange-peel: #ff9e00ff;
// --russian-violet: #240046ff;
// --persian-indigo: #3c096cff;
// --purple: #5a189aff;
// --french-violet: #7b2cbfff;
// --dark-orchid: #9d4eddff;

// /* CSS HSL */
// --pumpkin: hsla(26, 100%, 50%, 1);
// --heat-wave: hsla(28, 100%, 50%, 1);
// --dark-orange: hsla(31, 100%, 50%, 1);
// --yellow-orange-color-wheel: hsla(34, 100%, 50%, 1);
// --orange-peel: hsla(37, 100%, 50%, 1);
// --russian-violet: hsla(271, 100%, 14%, 1);
// --persian-indigo: hsla(271, 85%, 23%, 1);
// --purple: hsla(270, 73%, 35%, 1);
// --french-violet: hsla(272, 63%, 46%, 1);
// --dark-orchid: hsla(273, 68%, 59%, 1);

// /* SCSS HEX */
// $pumpkin: #ff6d00ff;
// $heat-wave: #ff7900ff;
// $dark-orange: #ff8500ff;
// $yellow-orange-color-wheel: #ff9100ff;
// $orange-peel: #ff9e00ff;
// $russian-violet: #240046ff;
// $persian-indigo: #3c096cff;
// $purple: #5a189aff;
// $french-violet: #7b2cbfff;
// $dark-orchid: #9d4eddff;

// /* SCSS HSL */
// $pumpkin: hsla(26, 100%, 50%, 1);
// $heat-wave: hsla(28, 100%, 50%, 1);
// $dark-orange: hsla(31, 100%, 50%, 1);
// $yellow-orange-color-wheel: hsla(34, 100%, 50%, 1);
// $orange-peel: hsla(37, 100%, 50%, 1);
// $russian-violet: hsla(271, 100%, 14%, 1);
// $persian-indigo: hsla(271, 85%, 23%, 1);
// $purple: hsla(270, 73%, 35%, 1);
// $french-violet: hsla(272, 63%, 46%, 1);
// $dark-orchid: hsla(273, 68%, 59%, 1);

// /* SCSS RGB */
// $pumpkin: rgba(255, 109, 0, 1);
// $heat-wave: rgba(255, 121, 0, 1);
// $dark-orange: rgba(255, 133, 0, 1);
// $yellow-orange-color-wheel: rgba(255, 145, 0, 1);
// $orange-peel: rgba(255, 158, 0, 1);
// $russian-violet: rgba(36, 0, 70, 1);
// $persian-indigo: rgba(60, 9, 108, 1);
// $purple: rgba(90, 24, 154, 1);
// $french-violet: rgba(123, 44, 191, 1);
// $dark-orchid: rgba(157, 78, 221, 1);

// /* SCSS Gradient */
// $gradient-top: linear-gradient(0deg, #ff6d00ff, #ff7900ff, #ff8500ff, #ff9100ff, #ff9e00ff, #240046ff, #3c096cff, #5a189aff, #7b2cbfff, #9d4eddff);
// $gradient-right: linear-gradient(90deg, #ff6d00ff, #ff7900ff, #ff8500ff, #ff9100ff, #ff9e00ff, #240046ff, #3c096cff, #5a189aff, #7b2cbfff, #9d4eddff);
// $gradient-bottom: linear-gradient(180deg, #ff6d00ff, #ff7900ff, #ff8500ff, #ff9100ff, #ff9e00ff, #240046ff, #3c096cff, #5a189aff, #7b2cbfff, #9d4eddff);
// $gradient-left: linear-gradient(270deg, #ff6d00ff, #ff7900ff, #ff8500ff, #ff9100ff, #ff9e00ff, #240046ff, #3c096cff, #5a189aff, #7b2cbfff, #9d4eddff);
// $gradient-top-right: linear-gradient(45deg, #ff6d00ff, #ff7900ff, #ff8500ff, #ff9100ff, #ff9e00ff, #240046ff, #3c096cff, #5a189aff, #7b2cbfff, #9d4eddff);
// $gradient-bottom-right: linear-gradient(135deg, #ff6d00ff, #ff7900ff, #ff8500ff, #ff9100ff, #ff9e00ff, #240046ff, #3c096cff, #5a189aff, #7b2cbfff, #9d4eddff);
// $gradient-top-left: linear-gradient(225deg, #ff6d00ff, #ff7900ff, #ff8500ff, #ff9100ff, #ff9e00ff, #240046ff, #3c096cff, #5a189aff, #7b2cbfff, #9d4eddff);
// $gradient-bottom-left: linear-gradient(315deg, #ff6d00ff, #ff7900ff, #ff8500ff, #ff9100ff, #ff9e00ff, #240046ff, #3c096cff, #5a189aff, #7b2cbfff, #9d4eddff);
// $gradient-radial: radial-gradient(#ff6d00ff, #ff7900ff, #ff8500ff, #ff9100ff, #ff9e00ff, #240046ff, #3c096cff, #5a189aff, #7b2cbfff, #9d4eddff);
