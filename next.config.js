const withImages = require('next-images')
module.exports = {
  reactStrictMode: true,
}

// Goggle fonts
const { withGoogleFonts } = require("nextjs-google-fonts");

module.exports = withGoogleFonts({
  googleFonts: {
    fonts: [
      "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,400;1,700&display=swap",
    ],
  },
});
