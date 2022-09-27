/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.jsx", 
    "./src/components/util/Search.jsx",
    "./src/components/Dropdown/DropdownBtn.jsx",
    "./src/components/Dropdown/DropdownMenu.jsx",
    "./src/components/Dropdown/DropdownListItem.jsx",
    "./src/components/Dropdown/DropdownList.jsx"
  ],
  theme: {
    extend: {},
    colors: {
      "pink": "#f472b6",
      "gray": "#d1d5db",
      "gray2": "#9ca3af",
      "light-pink": "#fce7f3",
      "white": "#FFFFFF",
    },
  },
  plugins: [],
};
