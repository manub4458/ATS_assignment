/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{html,js,jsx}"],
  theme: {
    screens: {
      "sm": { max: "640px" },
    

			

			"md": { max: "768px" },
			// => @media (max-width: 767px) { ... }


      "lg": { max: "1024px" },
			// => @media (max-width: 1023px) { ... }

      
			"xl": { max: "1280px" },
			// => @media (max-width: 1279px) { ... }

      "2xl": { max: "1536px" },
			// => @media (max-width: 1535px) { ... }


    },
    extend: {},
  },
  plugins: [],
}