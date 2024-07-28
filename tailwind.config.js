/** @type {import('tailwindcss').Config} */
const flowbitePlugin = require("flowbite/plugin");
const formsPlugin = require("@tailwindcss/forms");
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            fontFamily: {
                car: ["Rubik"],
            },
            colors: {
                pr: {
                    // 100: "#fff5e6",
                    // 200: "#ffd799",
                    // 300: "#ffc366",
                    // 400: "#ff9b00",
                    // 500: "#e68c00",
                    // 600: "#e68c00",
                    // 700: "#cc7c00",
                    // 800: "#b36d00",
                    // 900: "#995d00",
                    100: "#fbe5e6",
                    200: "#f9cfd1",
                    300: "#f4adb0",
                    400: "#bb2e34",
                    500: "#e05359",
                    600: "#cc363c",
                    700: "#bb2e34",
                    800: "#8e262a",
                    900: "#762629",
                },
                sec: {
                    100: "#fafafa",
                    200: "#ffd799",
                    300: "#f7f7f8",
                    400: "#f5f5f6",
                    500: "#dddddd",
                    600: "#fcfcfc",
                    700: "#c4c4c4",
                    800: "#acacac",
                    900: "#acacac",
                    // 100: "#f6fbcc",
                    // 200: "#ecf89e",
                    // 300: "#daf066",
                    // 400: "#c6e338",
                    // 500: "#a3c318",
                    // 600: "#fc",
                    // 700: "#637a11",
                    // 800: "#4f6113",
                },
                slate: {
                    900: "#a3c318",
                },
            },
        },
    },
    plugins: [flowbitePlugin, formsPlugin],
};
