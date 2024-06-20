/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{html,js,jsx}"],
  theme: {
    screens: {
      "sm": { min: "375px" },
    

			

			"md": { min: "768px" },
			// => @media (max-width: 767px) { ... }


      "lg": { min: "1024px" },
			// => @media (max-width: 1023px) { ... }

      
			"xl": { min: "1280px" },
			// => @media (max-width: 1279px) { ... }

      "2xl": { min: "1536px" },
			// => @media (max-width: 1535px) { ... }


    },
    extend: {},
  },
  plugins: [],
}