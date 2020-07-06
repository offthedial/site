import Typography from "typography"

const typography = new Typography({
    googleFonts: [
        {
            name: "DM Sans",
            styles: ["400", "400i", "500", "500i"],
        }
    ],
    headerFontFamily: ["DM Sans", "Noto Sans", "sans-serif"],
    bodyFontFamily: ["DM Sans", "Noto Sans", "sans-serif"],
    headerWeight: "500",
    bodyWeight: 400,
    boldWeight: 500,
})

export default typography